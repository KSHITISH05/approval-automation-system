// /src/app/(dashboard)/dashboard/templates/page.tsx

"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface Template {
  id: string;
  name: string;
  type: string;
  createdAt: string;
}

export default function TemplatesPage() {
  const [templates, setTemplates] = useState<Template[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchTemplates = async () => {
      try {
        const res = await fetch("/api/templates");
        const data = await res.json();
        if (data.success) {
          setTemplates(data.templates);
        }
      } catch (err) {
        console.error("Error fetching templates:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTemplates();
  }, []);

  const handleDeleteTemplate = async (templateId: string) => {
    if (!confirm("Are you sure you want to delete this template?")) return;

    try {
      const res = await fetch(`/api/templates/${templateId}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success) {
        setTemplates(templates.filter(t => t.id !== templateId));
      }
    } catch (err) {
      console.error("Error deleting template:", err);
      alert("Failed to delete template");
    }
  };

  const handleUseTemplate = (template: Template) => {
    router.push(`/dashboard/new?type=${template.type}&templateId=${template.id}`);
  };

  if (loading) return <p className="text-gray-300">Loading templates...</p>;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Templates 📋</h1>
        <button
          onClick={() => router.push("/dashboard/new")}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          New Request
        </button>
      </div>

      {templates.length === 0 ? (
        <p className="text-gray-400">No templates found. Create a new request and save it as a template.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {templates.map((template) => (
            <div
              key={template.id}
              className="bg-white/5 border border-white/10 rounded-lg p-4 space-y-4"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-medium">{template.name}</h3>
                  <p className="text-sm text-gray-400">{template.type}</p>
                </div>
                <span className="text-xs text-gray-500">
                  {new Date(template.createdAt).toLocaleDateString()}
                </span>
              </div>

              <div className="flex justify-end space-x-2">
                <button
                  onClick={() => handleUseTemplate(template)}
                  className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Use Template
                </button>
                <button
                  onClick={() => handleDeleteTemplate(template.id)}
                  className="px-3 py-1 text-sm bg-red-600 text-white rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 

/*
This page implements a Template Management interface for the approval workflow system. Here's a detailed breakdown:

1. Purpose:
   - Displays a list of saved document templates that users can reuse
   - Allows users to quickly create new requests based on existing templates
   - Provides template management functionality (viewing, using, deleting)

2. UI Components:
   - Header section with page title and "New Request" button
   - Grid layout for displaying template cards
   - Empty state message when no templates exist
   - Individual template cards showing:
     * Template name and type
     * Creation date
     * Action buttons (Use Template, Delete)

3. Template Card Features:
   - Visual hierarchy with template name and type prominently displayed
   - Creation date shown for reference
   - Two main actions:
     * "Use Template" - Creates a new request pre-filled with template data
     * "Delete" - Removes the template from the system

4. Responsive Design:
   - Grid layout adapts to screen size:
     * 1 column on mobile (grid-cols-1)
     * 2 columns on medium screens (md:grid-cols-2)
     * 3 columns on large screens (lg:grid-cols-3)
   - Consistent spacing and padding for readability

5. User Experience:
   - Clear call-to-action for creating new requests
   - Helpful empty state message guiding users to create templates
   - Quick access to template actions
   - Visual feedback through hover states on buttons

6. Integration:
   - Connects with template management system
   - Likely interfaces with document creation workflow
   - Handles template CRUD operations

This page serves as a central hub for template management, streamlining the process
of creating new requests by allowing users to reuse previously saved configurations.
*/

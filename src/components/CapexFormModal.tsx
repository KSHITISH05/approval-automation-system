"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface CostTableRow {
  item: string;
  budgetBasic: number;
  taxes: number;
  totalCapex: number;
}

interface SpendingPlanRow {
  year: number;
  months: { [key: string]: number };
}

interface Approver {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

interface Template {
  id: string;
  name: string;
  type: string;
  formData: any;
}

interface CapexFormData {
  title: string;
  unit: string;
  location: string;
  projectManager: string;
  projectHead: string;
  priority: string;
  budgetType: "Budget" | "Unbudget";
  description: string;
  projectStart: string;
  projectEnd: string;
  oldAssets: string;
  technicalSuitability: string;
  compliance: string;
  implications: string;
  costTable: CostTableRow[];
  economicViability: string;
  spendingPlan: SpendingPlanRow[];
  additionalComments: string;
  file?: File;
  approvers: { id: string; sequence: number }[];
}

interface CapexFormModalProps {
  onClose: () => void;
  onSubmit: (data: CapexFormData) => void;
  type: "CAPEX" | "OPEX";
}

export default function CapexFormModal({ onClose, onSubmit, type }: CapexFormModalProps) {
  const [formData, setFormData] = useState<CapexFormData>({
    title: "",
    unit: "",
    location: "",
    projectManager: "",
    projectHead: "",
    priority: "Medium",
    budgetType: "Budget",
    description: "",
    projectStart: "",
    projectEnd: "",
    oldAssets: "",
    technicalSuitability: "",
    compliance: "",
    implications: "",
    costTable: [{ item: "", budgetBasic: 0, taxes: 0, totalCapex: 0 }],
    economicViability: "",
    spendingPlan: [{ year: new Date().getFullYear(), months: {} }],
    additionalComments: "",
    approvers: [],
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [availableApprovers, setAvailableApprovers] = useState<Approver[]>([]);
  const [selectedApprovers, setSelectedApprovers] = useState<Approver[]>([]);
  const [templates, setTemplates] = useState<Template[]>([]);
  const [templateName, setTemplateName] = useState("");
  const [showSaveTemplate, setShowSaveTemplate] = useState(false);

  useEffect(() => {
    // Fetch available approvers
    const fetchApprovers = async () => {
      try {
        const res = await fetch("/api/users/approvers");
        const data = await res.json();
        if (data.success) {
          setAvailableApprovers(data.approvers);
        }
      } catch (err) {
        console.error("Error fetching approvers:", err);
      }
    };
    fetchApprovers();
  }, []);

  // Fetch templates on mount
  useEffect(() => {
    const fetchTemplates = async () => {
      try {
        const res = await fetch("/api/templates");
        const data = await res.json();
        if (data.success) {
          setTemplates(data.templates.filter((t: Template) => t.type === type));
        }
      } catch (err) {
        console.error("Error fetching templates:", err);
      }
    };
    fetchTemplates();
  }, [type]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    // Validate required fields
    Object.entries(formData).forEach(([key, value]) => {
      if (key !== "file" && !value && value !== 0) {
        newErrors[key] = "This field is required";
      }
    });

    // Validate approvers
    if (formData.approvers.length === 0) {
      newErrors.approvers = "At least one approver is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onSubmit(formData);
  };

  const addApprover = (approver: Approver) => {
    if (!selectedApprovers.find(a => a.id === approver.id)) {
      const newApprovers = [...selectedApprovers, approver];
      setSelectedApprovers(newApprovers);
      setFormData(prev => ({
        ...prev,
        approvers: newApprovers.map((a, index) => ({
          id: a.id,
          sequence: index + 1
        }))
      }));
    }
  };

  const removeApprover = (approverId: string) => {
    const newApprovers = selectedApprovers.filter(a => a.id !== approverId);
    setSelectedApprovers(newApprovers);
    setFormData(prev => ({
      ...prev,
      approvers: newApprovers.map((a, index) => ({
        id: a.id,
        sequence: index + 1
      }))
    }));
  };

  const moveApprover = (index: number, direction: "up" | "down") => {
    const newApprovers = [...selectedApprovers];
    const newIndex = direction === "up" ? index - 1 : index + 1;

    if (newIndex >= 0 && newIndex < newApprovers.length) {
      [newApprovers[index], newApprovers[newIndex]] = [newApprovers[newIndex], newApprovers[index]];
      setSelectedApprovers(newApprovers);
      setFormData(prev => ({
        ...prev,
        approvers: newApprovers.map((a, index) => ({
          id: a.id,
          sequence: index + 1
        }))
      }));
    }
  };

  const addCostTableRow = () => {
    setFormData(prev => ({
      ...prev,
      costTable: [...prev.costTable, { item: "", budgetBasic: 0, taxes: 0, totalCapex: 0 }]
    }));
  };

  const removeCostTableRow = (index: number) => {
    setFormData(prev => ({
      ...prev,
      costTable: prev.costTable.filter((_, i) => i !== index)
    }));
  };

  const addSpendingPlanYear = () => {
    const lastYear = formData.spendingPlan[formData.spendingPlan.length - 1].year;
    setFormData(prev => ({
      ...prev,
      spendingPlan: [...prev.spendingPlan, { year: lastYear + 1, months: {} }]
    }));
  };

  const handleSaveTemplate = async () => {
    try {
      const res = await fetch("/api/templates", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: templateName,
          type,
          formData,
        }),
      });

      const data = await res.json();
      if (data.success) {
        alert("Template saved successfully!");
        setShowSaveTemplate(false);
        setTemplateName("");
        // Refresh templates list
        const templatesRes = await fetch("/api/templates");
        const templatesData = await templatesRes.json();
        if (templatesData.success) {
          setTemplates(templatesData.templates.filter((t: Template) => t.type === type));
        }
      } else {
        alert("Failed to save template");
      }
    } catch (err) {
      console.error("Error saving template:", err);
      alert("Failed to save template");
    }
  };

  const handleLoadTemplate = (template: Template) => {
    if (confirm("Load this template? This will replace your current form data.")) {
      setFormData(template.formData);
    }
  };
  const router = useRouter();

  return (
    <div className="max-auto mx-auto bg-white rounded-xl shadow-lg p-6 my-8">
      <div className="flex justify-between items-center border-b pb-4 mb-6">
        <h2 className="text-2xl font-semibold">{type} Request Form</h2>
        <div className="flex gap-4">
          <button
            onClick={() => setShowSaveTemplate(true)}
            className="text-blue-600 hover:text-blue-700"
          >
            Save as Template
          </button>
          <button
            onClick={() => {
              onClose();
              router.push("/dashboard/initiator");
            }}
            className="text-gray-500 hover:text-gray-700"
          >
            Cancel
          </button>
        </div>
      </div>

      {/* Template Selection */}
      {templates.length > 0 && (
        <div className="mb-6">
          <label className="block text-black text-sm font-bold mb-2">
            Load Template
          </label>
          <select
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-black"
            onChange={(e) => {
              const template = templates.find(t => t.id === e.target.value);
              if (template) handleLoadTemplate(template);
            }}
            value=""
          >
            <option value="">Select a template</option>
            {templates.map(template => (
              <option key={template.id} value={template.id}>
                {template.name}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Save Template Modal */}
      {showSaveTemplate && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full">
            <h3 className="text-lg font-medium mb-4">Save as Template</h3>
            <input
              type="text"
              placeholder="Template Name"
              value={templateName}
              onChange={(e) => setTemplateName(e.target.value)}
              className="w-full p-2 border rounded mb-4 text-black"
            />
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setShowSaveTemplate(false)}
                className="px-4 py-2 text-gray-700 bg-gray-100 rounded hover:bg-gray-200"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveTemplate}
                disabled={!templateName}
                className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 disabled:opacity-50"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="text-center text-2xl font-bold text-gray-800">MP BIRLA CEMENT</div>
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Application for {type} expenditure</h2>
          <div className="text-gray-500">Approval #: PENDING</div>
        </div>
        <div>
          <label htmlFor="approvalTitle" className="block text-black text-sm font-bold mb-2">Approval Title</label>
          <input
            id="approvalTitle"
            name="title"
            type="text"
            value={formData.title}
            onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-black"
          />
          {errors.title && <p className="mt-1 text-sm text-red-600">{errors.title}</p>}
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <div>
              <label htmlFor="unit" className="block text-black text-sm font-bold mb-2">Unit</label>
              <input
                id="unit"
                name="unit"
                type="text"
                value={formData.unit}
                onChange={(e) => setFormData(prev => ({ ...prev, unit: e.target.value }))}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-black"
              />
            </div>
            <div>
              <label htmlFor="location" className="block text-black text-sm font-bold mb-2">Location</label>
              <input
                id="location"
                name="location"
                type="text"
                value={formData.location}
                onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-black"
              />
            </div>
            <div>
              <label htmlFor="projectManager" className="block text-black text-sm font-bold mb-2">Project Manager</label>
              <input
                id="projectManager"
                name="projectManager"
                type="text"
                value={formData.projectManager}
                onChange={(e) => setFormData(prev => ({ ...prev, projectManager: e.target.value }))}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-black"
              />
            </div>
            <div>
              <label htmlFor="projectHead" className="block text-black text-sm font-bold mb-2">Project Head</label>
              <input
                id="projectHead"
                name="projectHead"
                type="text"
                value={formData.projectHead}
                onChange={(e) => setFormData(prev => ({ ...prev, projectHead: e.target.value }))}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-black"
              />
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <label htmlFor="requestDate" className="block text-black text-sm font-bold mb-2">Date of Request</label>
              <input
                id="requestDate"
                name="requestDate"
                type="date"
                value={new Date().toISOString().split('T')[0]}
                disabled
                className="mt-1 block w-full rounded-md border-gray-300 bg-gray-100 text-black font-semibold"
              />
            </div>
            <div>
              <label htmlFor="priority" className="block text-black text-sm font-bold mb-2">Priority</label>
              <select
                id="priority"
                name="priority"
                value={formData.priority}
                onChange={(e) => setFormData(prev => ({ ...prev, priority: e.target.value }))}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-black"
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
            <div>
              <label className="block text-black text-sm font-bold mb-2">Budget Type</label>
              <div className="mt-2 space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="budgetType"
                    value="Budget"
                    checked={formData.budgetType === "Budget"}
                    onChange={(e) => setFormData(prev => ({ ...prev, budgetType: e.target.value as "Budget" | "Unbudget" }))}
                    className="form-radio"
                  />
                  <span className="ml-2">Budget</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="budgetType"
                    value="Unbudget"
                    checked={formData.budgetType === "Unbudget"}
                    onChange={(e) => setFormData(prev => ({ ...prev, budgetType: e.target.value as "Budget" | "Unbudget" }))}
                    className="form-radio"
                  />
                  <span className="ml-2">Unbudget</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div>
          <label htmlFor="description" className="block text-black text-sm font-bold mb-2">Requirement Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-black"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="projectStart" className="block text-black text-sm font-bold mb-2">Commencement Date</label>
            <input
              id="projectStart"
              name="projectStart"
              type="date"
              value={formData.projectStart}
              onChange={(e) => setFormData(prev => ({ ...prev, projectStart: e.target.value }))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-black"
            />
          </div>
          <div>
            <label htmlFor="projectEnd" className="block text-black text-sm font-bold mb-2">Completion Date</label>
            <input
              id="projectEnd"
              name="projectEnd"
              type="date"
              value={formData.projectEnd}
              onChange={(e) => setFormData(prev => ({ ...prev, projectEnd: e.target.value }))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-black"
            />
          </div>
        </div>
        {[
          { label: "Old Asset Details", key: "oldAssets" },
          { label: "Technical Suitability Justification", key: "technicalSuitability" },
          { label: "Incase Compliance", key: "compliance" },
          { label: "Implication of Not Proceeding", key: "implications" },
        ].map(({ label, key }) => (
          <div key={key}>
            <label htmlFor={key} className="block text-black text-sm font-bold mb-2">{label}</label>
            <textarea
              id={key}
              name={key}
              value={formData[key as keyof CapexFormData] as string}
              onChange={(e) => setFormData(prev => ({ ...prev, [key]: e.target.value }))}
              rows={3}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-black"
            />
          </div>
        ))}
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="block text-black text-sm font-bold mb-2">Estimated Cost Table</label>
            <button
              type="button"
              onClick={addCostTableRow}
              className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Add Row
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Budget Basic</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Taxes</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Capex</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {formData.costTable.map((row, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <input
                        id={`costItem${index}`}
                        name={`costItem${index}`}
                        type="text"
                        value={row.item}
                        onChange={(e) => {
                          const newTable = [...formData.costTable];
                          newTable[index].item = e.target.value;
                          setFormData(prev => ({ ...prev, costTable: newTable }));
                        }}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-black"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <input
                        id={`budgetBasic${index}`}
                        name={`budgetBasic${index}`}
                        type="number"
                        value={row.budgetBasic}
                        onChange={(e) => {
                          const newTable = [...formData.costTable];
                          newTable[index].budgetBasic = Number(e.target.value);
                          newTable[index].totalCapex = newTable[index].budgetBasic + (newTable[index].budgetBasic * newTable[index].taxes / 100);
                          setFormData(prev => ({ ...prev, costTable: newTable }));
                        }}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-black"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <input
                        id={`taxes${index}`}
                        name={`taxes${index}`}
                        type="number"
                        value={row.taxes}
                        onChange={(e) => {
                          const newTable = [...formData.costTable];
                          newTable[index].taxes = Number(e.target.value);
                          newTable[index].totalCapex = newTable[index].budgetBasic + (newTable[index].budgetBasic * newTable[index].taxes / 100);
                          setFormData(prev => ({ ...prev, costTable: newTable }));
                        }}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-black"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <input
                        id={`totalCapex${index}`}
                        name={`totalCapex${index}`}
                        type="number"
                        value={row.totalCapex}
                        disabled
                        className="block w-full rounded-md border-gray-300 bg-gray-50 text-black font-semibold"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button
                        type="button"
                        onClick={() => removeCostTableRow(index)}
                        className="text-red-600 hover:text-red-900"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <label htmlFor="economicViability" className="block text-black text-sm font-bold mb-2">Economic Viability</label>
          <textarea
            id="economicViability"
            name="economicViability"
            value={formData.economicViability}
            onChange={(e) => setFormData(prev => ({ ...prev, economicViability: e.target.value }))}
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-black"
          />
        </div>
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="block text-black text-sm font-bold mb-2">Spending Plan</label>
            <button
              type="button"
              onClick={addSpendingPlanYear}
              className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Add Year
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Year</th>
                  {Array.from({ length: 12 }, (_, i) => (
                    <th key={i} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {new Date(0, i).toLocaleString('default', { month: 'short' })}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {formData.spendingPlan.map((row, yearIndex) => (
                  <tr key={yearIndex}>
                    <td className="px-6 py-4 whitespace-nowrap text-black font-semibold">{row.year}</td>
                    {Array.from({ length: 12 }, (_, monthIndex) => {
                      const month = new Date(0, monthIndex).toLocaleString('default', { month: 'short' });
                      return (
                        <td key={monthIndex} className="px-6 py-4 whitespace-nowrap">
                          <input
                            id={`spendingPlan${yearIndex}${month}`}
                            name={`spendingPlan${yearIndex}${month}`}
                            type="number"
                            value={row.months[month] || 0}
                            onChange={(e) => {
                              const newPlan = [...formData.spendingPlan];
                              newPlan[yearIndex].months[month] = Number(e.target.value);
                              setFormData(prev => ({ ...prev, spendingPlan: newPlan }));
                            }}
                            className="block w-24 px-3 py-2 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-black text-base"
                          />
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <label htmlFor="additionalComments" className="block text-black text-sm font-bold mb-2">Additional Comments</label>
          <textarea
            id="additionalComments"
            name="additionalComments"
            value={formData.additionalComments}
            onChange={(e) => setFormData(prev => ({ ...prev, additionalComments: e.target.value }))}
            rows={3}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-black"
          />
        </div>
        <div>
          <label htmlFor="attachment" className="block text-black text-sm font-bold mb-2">Attachment (Optional)</label>
          <input
            id="attachment"
            name="attachment"
            type="file"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                setFormData(prev => ({ ...prev, file }));
              }
            }}
            className="mt-1 block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-md file:border-0
              file:text-sm file:font-semibold
              file:bg-blue-50 file:text-blue-700
              hover:file:bg-blue-100"
          />
        </div>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <label className="block text-black text-sm font-bold mb-2">Approvers</label>
            <select
              className="mt-1 block w-64 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-black"
              onChange={(e) => {
                const approver = availableApprovers.find(a => a.id === e.target.value);
                if (approver) addApprover(approver);
              }}
              value=""
            >
              <option value="">Select an approver</option>
              {availableApprovers
                .filter(a => !selectedApprovers.find(sa => sa.id === a.id))
                .map(approver => (
                  <option key={approver.id} value={approver.id}>
                    {approver.firstName} {approver.lastName} ({approver.email})
                  </option>
                ))}
            </select>
          </div>

          {errors.approvers && (
            <p className="text-sm text-red-600">{errors.approvers}</p>
          )}

          <div className="space-y-2">
            {selectedApprovers.map((approver, index) => (
              <div key={approver.id} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium">{index + 1}.</span>
                  <span>{approver.firstName} {approver.lastName}</span>
                  <span className="text-gray-500 text-sm">({approver.email})</span>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    type="button"
                    onClick={() => moveApprover(index, "up")}
                    disabled={index === 0}
                    className="text-gray-500 hover:text-gray-700 disabled:opacity-50"
                  >
                    ↑
                  </button>
                  <button
                    type="button"
                    onClick={() => moveApprover(index, "down")}
                    disabled={index === selectedApprovers.length - 1}
                    className="text-gray-500 hover:text-gray-700 disabled:opacity-50"
                  >
                    ↓
                  </button>
                  <button
                    type="button"
                    onClick={() => removeApprover(approver.id)}
                    className="text-red-600 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-end space-x-4">
          <button
            type="submit"
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
} 
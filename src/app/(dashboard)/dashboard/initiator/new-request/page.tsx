// src/app/(dashboard)/dashboard/initiator/new-request/page.tsx

"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import CapexFormModal from "@/components/CapexFormModal"; // <-- Import your form

export default function NewRequestPage() {
  const [formType, setFormType] = useState<"CAPEX" | "OPEX">("CAPEX");

  return (
    <div className="max-w-4xl mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">Initiate New Request</h1>
      <div className="flex gap-4 mb-6">
        <Button
          variant={formType === "CAPEX" ? "default" : "outline"}
          onClick={() => setFormType("CAPEX")}
        >
          CAPEX
        </Button>
        <Button
          variant={formType === "OPEX" ? "default" : "outline"}
          onClick={() => setFormType("OPEX")}
        >
          OPEX
        </Button>
      </div>
      <div>
        {formType === "CAPEX" ? (
           <CapexFormModal
           onClose={() => {}}
           onSubmit={async (formData) => {
             const res = await fetch("/api/forms/capex/submit", {
               method: "POST",
               headers: { "Content-Type": "application/json" },
               body: JSON.stringify(formData),
             });
             const data = await res.json();
             if (data.document) {
               alert("Request submitted successfully!");
               window.location.href = "/dashboard/initiator";
             } else {
               alert("Failed to submit request.");
             }
           }}
           type="CAPEX"
         />
        ) : (
          <div>
            {/* Replace with your actual OPEX form component */}
            <p className="mb-2 font-semibold">OPEX Form Fields...</p>
          </div>
        )}
      </div>
    </div>
  );
}

/*
This code implements a form page for initiating new CAPEX or OPEX requests:

1. The page allows users to switch between CAPEX and OPEX form types using toggle buttons
   at the top of the page.

2. For CAPEX requests:
   - Uses a CapexFormModal component to collect form data
   - On submit, sends a POST request to /api/forms/capex/submit with the form data
   - Shows success/failure alerts and redirects back to initiator dashboard on success

3. For OPEX requests:
   - Currently shows a placeholder message
   - Needs implementation of actual OPEX form component

4. The form type state is managed using useState hook, defaulting to "CAPEX"

5. The layout uses:
   - Max width container with auto margins
   - Heading for the page title
   - Button group for form type selection
   - Conditional rendering based on selected form type

This page ties into the larger approval workflow system, allowing initiators
to create new approval requests that will be routed through approvers based
on the document type and approval trail configuration.
*/

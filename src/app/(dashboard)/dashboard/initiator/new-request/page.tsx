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
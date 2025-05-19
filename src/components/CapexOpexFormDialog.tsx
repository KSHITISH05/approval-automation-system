// ./src/components/CapexOpexFormDialog.tsx
"use client";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function CapexOpexFormDialog({ open, onOpenChange }: { open: boolean, onOpenChange: (v: boolean) => void }) {
  const [formType, setFormType] = useState<"CAPEX" | "OPEX">("CAPEX");

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Initiate New Request</DialogTitle>
        </DialogHeader>
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
        {formType === "CAPEX" ? (
          <div>
            {/* Replace with your actual CAPEX form */}
            <p className="mb-2 font-semibold">CAPEX Form Fields...</p>
            {/* ... */}
          </div>
        ) : (
          <div>
            {/* Replace with your actual OPEX form */}
            <p className="mb-2 font-semibold">OPEX Form Fields...</p>
            {/* ... */}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
} 
/*
This component creates a dialog/modal for initiating new CAPEX (Capital Expenditure) or OPEX (Operating Expenditure) requests.

Key features:
- Uses the Dialog component from shadcn/ui for the modal functionality
- Maintains state for switching between CAPEX and OPEX forms using useState
- Provides tab-like buttons to toggle between CAPEX and OPEX views
- Placeholder sections for the actual form fields

Component props:
- open: boolean - Controls dialog visibility 
- onOpenChange: (boolean) => void - Callback when dialog open state changes

Flow:
1. Dialog opens when 'open' prop is true
2. User can switch between CAPEX/OPEX using the toggle buttons
3. Different form fields are shown based on selected type
4. Form fields are currently placeholder text
5. Dialog can be closed via the close button or clicking outside

The component uses shadcn/ui components:
- Dialog, DialogContent, DialogHeader, DialogTitle for the modal
- Button for the toggle buttons with variant styling

State management:
- formType state tracks current selected form type ("CAPEX" | "OPEX")
- setFormType updates the form type when toggle buttons are clicked

Styling:
- Uses Tailwind CSS classes for layout and spacing
- Button variants change based on selected state
- max-w-2xl class limits dialog width
*/

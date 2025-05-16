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
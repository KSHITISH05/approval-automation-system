// /src/app/(dashboard)/dashboard/initiator/page.tsx

"use client";

import { useEffect, useState } from "react";
import InitiatorSidebar from "@/components/InitiatorSidebar";
import ApprovalCard from "@/components/ApprovalCard";
import { useRouter } from "next/navigation";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

type Comment = {
  user: string;
  time: string;
  text: string;
};

type ApprovalCardData = {
  id: string;
  title: string;
  description: string;
  amount: number;
  type: string;
  approvalTrail: {
    sequenceOrder: number;
    status: "APPROVED" | "PENDING" | "REJECTED";
    approver: {
      firstName: string;
      lastName: string;
    };
  }[];
  comments: Comment[];
  initiator: any;
};

export default function InitiatorDashboard() {
  const [approvals, setApprovals] = useState<ApprovalCardData[]>([]);
  const [loading, setLoading] = useState(true);
  const [showTypeDialog, setShowTypeDialog] = useState(false);
  const router = useRouter();

  useEffect(() => {
    async function fetchDocuments() {
      setLoading(true);
      try {
        const res = await fetch("/api/documents/my");
        const data = await res.json();
        if (data.success) {
          const withTrail = await Promise.all(
            data.documents.map(async (doc: any) => {
              const trailRes = await fetch(`/api/documents/${doc.id}/approvals`);
              const trailData = await trailRes.json();
              
              // Process the approval trail to match the expected structure
              const approvalTrail = (trailData.approvals || [])
                .map((step: any) => ({
                  sequenceOrder: step.sequenceOrder,
                  status: step.status,
                  approver: {
                    firstName: step.approver.firstName,
                    lastName: step.approver.lastName
                  }
                }))
                .sort((a: any, b: any) => a.sequenceOrder - b.sequenceOrder);

              return {
                id: doc.id,
                title: doc.title,
                description: doc.description,
                amount: doc.amount,
                type: doc.type,
                approvalTrail,
                comments: [],
                initiator: doc.initiator,
              };
            })
          );
          setApprovals(withTrail);
        } else {
          setApprovals([]);
        }
      } catch (err) {
        console.error("Error fetching documents:", err);
        setApprovals([]);
      }
      setLoading(false);
    }
    fetchDocuments();
  }, []);

  function handleTypeSelect(type: "CAPEX" | "OPEX") {
    setShowTypeDialog(false);
    if (type === "CAPEX") {
      router.push("/dashboard/initiator/new-request?type=capex");
    } else {
      router.push("/dashboard/initiator/new-request?type=opex");
    }
  }

  return (
    <div className="flex min-h-screen bg-[#eaf2fb]">
      <InitiatorSidebar />
      <main className="flex-1 p-10">
        <div className="flex justify-between items-center mb-8">
            <div>
            <h1 className="text-3xl font-bold text-black">Initiator Dashboard</h1>
            <p className="text-gray-600">Create approval requests and track progress.</p>
            </div>
          <Button
            className="bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold"
            onClick={() => setShowTypeDialog(true)}
          >
            Initiate New Request
          </Button>
            </div>
        <Dialog open={showTypeDialog} onOpenChange={setShowTypeDialog}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Select Request Type</DialogTitle>
            </DialogHeader>
            <div className="flex gap-4 justify-center mt-4">
              <Button onClick={() => handleTypeSelect("CAPEX")}>CAPEX</Button>
              <Button onClick={() => handleTypeSelect("OPEX")}>OPEX</Button>
            </div>
          </DialogContent>
        </Dialog>
            <div>
          <h2 className="text-lg font-semibold mb-4 text-blue-800">Initiated Requests</h2>
          {loading ? (
            <p>Loading...</p>
          ) : approvals.length === 0 ? (
            <p className="text-red-600">No requests found.</p>
      ) : (
            approvals.map(approval => (
              <ApprovalCard key={approval.id} approval={approval} />
            ))
          )}
        </div>
      </main>
    </div>
  );
}


/*
This file implements the Initiator Dashboard page, which serves as the main interface for users with 
the Initiator role. Here's a detailed breakdown of its functionality:

1. Layout & Structure:
   - Uses a flex layout with a sidebar (InitiatorSidebar) and main content area
   - Background color is set to a light blue (#eaf2fb)
   - Main content has padding and proper spacing

2. Header Section:
   - Displays dashboard title and description
   - Features a prominent "Initiate New Request" button
   - Button triggers a dialog for selecting request type (CAPEX/OPEX)

3. Request Type Selection:
   - Implements a modal dialog (Dialog component)
   - Allows users to choose between CAPEX and OPEX request types
   - Selection triggers handleTypeSelect function which likely redirects to appropriate form

4. Requests Display:
   - Shows a list of previously initiated requests under "Initiated Requests" section
   - Handles loading state with a loading message
   - Shows "No requests found" message when there are no requests
   - Maps through approvals array to render ApprovalCard components
   - Each approval card receives approval data including approval trail information

5. State Management:
   - Manages loading state for request fetching
   - Handles dialog visibility state (showTypeDialog)
   - Maintains list of approvals in state

6. Integration:
   - Integrates with approval workflow system
   - Uses shared components (InitiatorSidebar, ApprovalCard)
   - Likely connects to API endpoints for fetching approval data

This dashboard serves as the central hub for initiators to:
- Create new approval requests (both CAPEX and OPEX)
- Monitor existing requests
- Track approval progress
- Access their request history

The interface follows a clean, professional design with clear hierarchy and intuitive navigation,
making it easy for initiators to manage their approval workflows.
*/

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
  approvalTrail: { id: string; name: string; status: string }[];
  comments: Comment[];
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
              return {
                id: doc.id,
                title: doc.title,
                description: doc.description,
                amount: doc.amount,
                type: doc.type,
                approvalTrail: (trailData.approvals || []).map((step: any) => ({
                  id: step.id,
                  name: `${step.approver.firstName} ${step.approver.lastName}`,
                  status: step.status,
                })),
                comments: [],
              };
            })
          );
          setApprovals(withTrail);
      } else {
          setApprovals([]);
      }
    } catch (err) {
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
              <ApprovalCard key={approval.id} approval={{
                ...approval,
                approvalId: approval.approvalTrail[0]?.id || ""
              }} />
            ))
          )}
        </div>
      </main>
    </div>
  );
}
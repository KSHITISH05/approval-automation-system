"use client";

import { useEffect, useState } from "react";
import InitiatorSidebar from "@/components/InitiatorSidebar";
import CommentThread from "@/components/CommentThread";
import CapexFormView from "@/components/CapexFormView";
import { Button } from "@/components/ui/button";

interface CapexFormResponse {
  success: boolean;
  data?: any;
  message?: string;
}

export default function ApproverDashboard() {
  const [approvals, setApprovals] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedForm, setSelectedForm] = useState<any>(null);

  useEffect(() => {
    const fetchApprovals = async () => {
      try {
        const res = await fetch("/api/approvals/pending");
        const data = await res.json();
        setApprovals(data.approvals || []);
      } catch (error) {
        setApprovals([]);
      }
      setLoading(false);
    };
    fetchApprovals();
  }, []);

  const handleAction = async (approvalId: string, action: "APPROVED" | "REJECTED") => {
    try {
      const res = await fetch("/api/approvals/action", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ approvalId, action }),
      });
      const data = await res.json();
      if (data.success) {
        setApprovals((prev) => prev.filter((a) => a.id !== approvalId));
        alert(`Request ${action.toLowerCase()} successfully!`);
      } else {
        alert(data.message || "Something went wrong");
      }
    } catch (err) {
      alert("Server error. Try again.");
    }
  };

  const handleViewForm = async (documentId: string) => {
    try {
      const res = await fetch(`/api/forms/capex/${documentId}`);
      const data: CapexFormResponse = await res.json();
      if (data.success && data.data) {
        setSelectedForm(data.data);
      }
    } catch (err) {
      alert("Failed to load form details");
    }
  };

  return (
    <div className="flex min-h-screen bg-[#eaf2fb]">
      <InitiatorSidebar />
      <main className="flex-1 p-10">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-black">Approver Dashboard <span role="img" aria-label="approver">🧑‍💼</span></h1>
            <p className="text-gray-600">Review and approve pending requests.</p>
          </div>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-4 text-blue-800">Pending Approvals</h2>
          {loading ? (
            <p>Loading...</p>
          ) : approvals.length === 0 ? (
            <p className="text-red-600">No pending approvals.</p>
          ) : (
            approvals.map((a: any) => (
              <div key={a.id} className="bg-white rounded-xl shadow-lg p-6 my-8">
                <div className="flex justify-between items-center border-b pb-4 mb-4">
                  <div>
                    <div className="text-xl font-bold mb-1 text-black">{a.document.title}</div>
                    <div className="mb-1 text-gray-700">{a.document.description}</div>
                  </div>
                  <div className="text-gray-500">{new Date(a.document.createdAt).toLocaleDateString()}</div>
                </div>
                {!a.isCurrentTurn && (
                  <div className="mb-4 text-yellow-600 font-medium">
                    Waiting for previous approvers to complete their review.
                  </div>
                )}
                <div className="mb-4">
                  <span className="font-bold text-black text-lg flex items-center mb-2">
                    <span className="text-blue-600 mr-2">💬</span> Comments
                  </span>
                  <div className="p-4 rounded bg-gray-50 text-gray-800">
                    <CommentThread documentId={a.document.id} approvalId={a.id} />
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    className="bg-green-600 hover:bg-green-700 text-white rounded"
                    disabled={!a.isCurrentTurn}
                    onClick={() => handleAction(a.id, "APPROVED")}
                  >
                    Approve
                  </Button>
                  <Button
                    className="bg-red-600 hover:bg-red-700 text-white rounded"
                    disabled={!a.isCurrentTurn}
                    onClick={() => handleAction(a.id, "REJECTED")}
                  >
                    Reject
                  </Button>
                  <Button
                    className="bg-blue-600 hover:bg-blue-700 text-white rounded"
                    onClick={() => handleViewForm(a.document.id)}
                  >
                    View Details
                  </Button>
                </div>
              </div>
            ))
          )}
        </div>
        {selectedForm && (
          <CapexFormView
            isOpen={!!selectedForm}
            onClose={() => setSelectedForm(null)}
            data={selectedForm}
            type={selectedForm.budgetType === "Budget" ? "CAPEX" : "OPEX"}
          />
        )}
      </main>
    </div>
  );
}



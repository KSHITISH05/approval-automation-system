// ./src/components/ApprovalCard.tsx
import { Card, CardContent } from "@/components/ui/card";
import CommentThread from "@/components/CommentThread";

type Approval = {
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
  comments: { user: string; time: string; text: string }[];
  approvalId?: string;
};

export default function ApprovalCard({ approval }: { approval: Approval }) {
  return (
    <Card className="mb-8 bg-white border border-gray-200 shadow-sm">
      <CardContent className="p-6">
        <h2 className="text-xl text-black font-bold mb-1">{approval.title}</h2>
        <p className="mb-2 text-black">{approval.description}</p>
        <p className="mb-4 text-black">
          Amount. ₹{approval.amount} — {approval.type}
        </p>
        
        {/* Approval Trail */}
        <div className="mb-2 font-semibold text-black">Approval Trail</div>
        <ol className="mb-4 pl-4 list-decimal text-gray-800">
          {(approval.approvalTrail || [])
            .filter((step) => step?.approver) // Only valid approver entries
            .sort((a, b) => a.sequenceOrder - b.sequenceOrder) // Sort by order
            .map((step, index) => {
              const fullName = `${step.approver.firstName} ${step.approver.lastName}`;
              let statusColor = "text-yellow-600"; // default PENDING
              if (step.status === "APPROVED") statusColor = "text-green-600";
              else if (step.status === "REJECTED") statusColor = "text-red-600";

              return (
                <li key={index} className="mb-1">
                  {fullName} — <span className={`font-normal ${statusColor}`}>{step.status}</span>
                </li>
              );
            })}
        </ol>

        <div className="mb-2 font-semibold text-black">Comments</div>
        <CommentThread documentId={approval.id} approvalId={approval.approvalId || ""} />
      </CardContent>
    </Card>
  );
}


import { Card, CardContent } from "@/components/ui/card";
import CommentThread from "@/components/CommentThread";

type Approval = {
  id: string;
  title: string;
  description: string;
  amount: number;
  type: string;
  approvalTrail: { id: string; name: string; status: string }[];
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
        <div className="mb-2 font-semibold text-black">Approval Trail</div>
        <ol className="mb-4 pl-4 list-decimal text-gray-800">
          {approval.approvalTrail.map((step, idx) => (
            <li key={idx}>
              {step.name} — <span className="font-normal">{step.status}</span>
            </li>
          ))}
        </ol>
        <div className="mb-2 font-semibold text-black">Comments</div>
        <CommentThread documentId={approval.id} approvalId={approval.approvalId || ""} />
      </CardContent>
    </Card>
  );
}
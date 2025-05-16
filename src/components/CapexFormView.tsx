"use client";

import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

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
  fileName?: string;
  fileUrl?: string;
  id?: string;
  initiator?: {
    firstName: string;
    lastName: string;
    email: string;
  };
  approvals?: Array<{
    sequenceOrder: number;
    status: string;
    approver: {
      firstName: string;
      lastName: string;
      email: string;
    };
  }>;
  status?: string;
}

interface CapexFormViewProps {
  isOpen: boolean;
  onClose: () => void;
  data: CapexFormData;
  type: "CAPEX" | "OPEX";
}

export default function CapexFormView({ isOpen, onClose, data, type }: CapexFormViewProps) {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="mx-auto max-w-4xl w-full bg-white rounded-xl shadow-lg max-h-[90vh] overflow-y-auto">
          <div className="flex justify-between items-center p-6 border-b sticky top-0 bg-white z-10">
            <Dialog.Title className="text-2xl font-semibold">
              {type} Request Details
            </Dialog.Title>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          <div className="p-6 space-y-6">
            {/* Status Badge */}
            <div className="flex justify-end">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                data.status === "APPROVED" ? "bg-green-100 text-green-800" :
                data.status === "REJECTED" ? "bg-red-100 text-red-800" :
                "bg-yellow-100 text-yellow-800"
              }`}>
                {data.status || "PENDING"}
              </span>
            </div>

            {/* Initiator Info */}
            {data.initiator && (
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-sm font-medium text-gray-700">Initiator</h3>
                <p className="mt-1 text-gray-900">
                  {data.initiator.firstName} {data.initiator.lastName} ({data.initiator.email})
                </p>
              </div>
            )}

            {/* Approval Trail */}
            {data.approvals && data.approvals.length > 0 && (
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-sm font-medium text-gray-700 mb-2">Approval Trail</h3>
                <div className="space-y-2">
                  {data.approvals.map((approval, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div>
                        <span className="text-sm font-medium">{index + 1}.</span>
                        <span className="ml-2">
                          {approval.approver.firstName} {approval.approver.lastName}
                        </span>
                      </div>
                      <span className={`px-2 py-1 rounded text-xs ${
                        approval.status === "APPROVED" ? "bg-green-100 text-green-800" :
                        approval.status === "REJECTED" ? "bg-red-100 text-red-800" :
                        "bg-yellow-100 text-yellow-800"
                      }`}>
                        {approval.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Rest of the form content */}
            <div className="text-center text-2xl font-bold text-gray-800">
              MP BIRLA CEMENT
            </div>

            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Application for {type} expenditure</h2>
              <div className="text-gray-500">Approval #: PENDING</div>
            </div>

            {/* 3. Title */}
            <div>
              <h3 className="text-sm font-medium text-gray-700">Approval Title</h3>
              <p className="mt-1 text-gray-900">{data.title}</p>
            </div>

            {/* 4. Request Metadata */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-700">Unit</h3>
                  <p className="mt-1 text-gray-900">{data.unit}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-700">Location</h3>
                  <p className="mt-1 text-gray-900">{data.location}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-700">Project Manager</h3>
                  <p className="mt-1 text-gray-900">{data.projectManager}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-700">Project Head</h3>
                  <p className="mt-1 text-gray-900">{data.projectHead}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium  text-gray-700">Date of Request</h3>
                  <p className="mt-1 text-gray-900">{new Date(data.projectStart).toLocaleDateString()}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-700">Priority</h3>
                  <p className="mt-1 text-gray-900">{data.priority}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-700">Budget Type</h3>
                  <p className="mt-1 text-gray-900">{data.budgetType}</p>
                </div>
              </div>
            </div>

            {/* 5. Description */}
            <div>
              <h3 className="text-sm font-medium text-gray-700">Requirement Description</h3>
              <p className="mt-1 text-gray-900 whitespace-pre-wrap">{data.description}</p>
            </div>

            {/* 6. Project Duration */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-sm font-medium text-gray-700">Commencement Date</h3>
                <p className="mt-1 text-gray-900">{new Date(data.projectStart).toLocaleDateString()}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-700">Completion Date</h3>
                <p className="mt-1 text-gray-900">{new Date(data.projectEnd).toLocaleDateString()}</p>
              </div>
            </div>

            {/* 7-10. Text Areas */}
            {[
              { label: "Old Asset Details", key: "oldAssets" },
              { label: "Technical Suitability Justification", key: "technicalSuitability" },
              { label: "Incase Compliance", key: "compliance" },
              { label: "Implication of Not Proceeding", key: "implications" },
            ].map(({ label, key }) => (
              <div key={key}>
                <h3 className="text-sm font-medium text-gray-700">{label}</h3>
                <p className="mt-1 text-gray-900 whitespace-pre-wrap">{data[key as keyof CapexFormData] as string}</p>
              </div>
            ))}

            {/* 11. Cost Table */}
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-2">Estimated Cost Table</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Budget Basic</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Taxes</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Capex</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {data.costTable.map((row, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-900">{row.item}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-900">₹{row.budgetBasic.toLocaleString()}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-900">₹{row.taxes.toLocaleString()}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-900">₹{row.totalCapex.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 12. Economic Viability */}
            <div>
              <h3 className="text-sm font-medium text-gray-700">Economic Viability</h3>
              <p className="mt-1 text-gray-900 whitespace-pre-wrap">{data.economicViability}</p>
            </div>

            {/* 13. Spending Plan */}
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-2">Spending Plan</h3>
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
                    {data.spendingPlan.map((row, yearIndex) => (
                      <tr key={yearIndex}>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-900">{row.year}</td>
                        {Array.from({ length: 12 }, (_, monthIndex) => {
                          const month = new Date(0, monthIndex).toLocaleString('default', { month: 'short' });
                          return (
                            <td key={monthIndex} className="px-6 py-4 whitespace-nowrap text-gray-900">
                              ₹{(row.months[month] || 0).toLocaleString()}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 14. Additional Comments */}
            <div>
              <h3 className="text-sm font-medium text-gray-700">Additional Comments</h3>
              <p className="mt-1 text-gray-900 whitespace-pre-wrap">{data.additionalComments}</p>
            </div>

            {/* File Attachment */}
            {data.fileName && data.id && (
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-sm font-medium text-gray-700">Attachment</h3>
                <a
                  href={`/api/documents/${data.id}/file`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-flex items-center text-blue-600 hover:text-blue-800"
                >
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                  </svg>
                  {data.fileName}
                </a>
              </div>
            )}
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
} 
// ./src/components/CapexFormView.tsx
"use client";

import { Dialog, Button } from "@headlessui/react";
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
  documentId?: string;
  document?: any;
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

            {/* Additional Comments */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-gray-700">Additional Comments</h3>
              <p className="mt-1 text-sm text-gray-900">{data.additionalComments}</p>
            </div>

            {/* File Download Section */}
            {data.fileName && (
              <div className="bg-gray-50 p-4 rounded-lg mt-4">
                <h3 className="text-sm font-medium text-gray-700 mb-2">Attached File</h3>
                <Button
                  onClick={() => window.open(`/api/documents/${data.id}/file`, '_blank')}
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  Download {data.fileName}
                </Button>
              </div>
            )}
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
} 

/*
This file implements a CapexFormView component that displays a capital expenditure (CAPEX) form in a dialog/modal view. Here's a detailed breakdown:

1. Component Structure:
- Uses @headlessui/react Dialog for the modal functionality
- Takes a CAPEX form data object as input with details like:
  - Basic project info (title, unit, location, etc.)
  - Project managers and heads
  - Priority and budget type
  - Project timeline
  - Technical details
  - Cost table with budget breakdowns
  - Spending plan across months/years
  - Additional comments and file attachments

2. Key Features:
- Displays form data in a structured, read-only view
- Shows cost breakdown in a table format
- Displays spending plan in a month-wise table
- Handles file attachments with download capability
- Uses proper formatting for currency values (₹)
- Maintains consistent styling using Tailwind CSS

3. Data Organization:
- Uses TypeScript interfaces (CostTableRow, SpendingPlanRow, CapexFormData) 
- Structures data hierarchically
- Handles optional fields like file attachments
- Includes approval workflow data

4. UI Components:
- Organized sections for different types of information
- Responsive tables for financial data
- Proper spacing and typography
- Interactive elements like file download links

This component serves as a detailed view for CAPEX proposals, likely used in a financial or project management system.
*/


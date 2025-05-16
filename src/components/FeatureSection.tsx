export default function FeatureSection() {
  return (
    <section className="w-full max-w-4xl mx-auto py-8 px-4 md:px-0">
      <h2 className="text-2xl font-bold mb-8 text-[#1a2a41]">Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Approval Workflow Card */}
        <div className="flex items-center gap-4 bg-white rounded-xl shadow p-6 border border-blue-50">
          <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100">
            {/* Checklist Icon */}
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-blue-700">
              <rect x="4" y="4" width="16" height="16" rx="4" strokeWidth="2" />
              <path d="M8 12l2 2 4-4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span className="text-lg font-semibold text-[#1a2a41]">Approval Workflow</span>
        </div>
        {/* Dashboards Card */}
        <div className="flex items-center gap-4 bg-white rounded-xl shadow p-6 border border-blue-50">
          <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100">
            {/* Bar Chart Icon */}
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-blue-700">
              <rect x="4" y="13" width="3" height="7" rx="1" strokeWidth="2" />
              <rect x="10.5" y="9" width="3" height="11" rx="1" strokeWidth="2" />
              <rect x="17" y="5" width="3" height="15" rx="1" strokeWidth="2" />
            </svg>
          </span>
          <span className="text-lg font-semibold text-[#1a2a41]">Dashboards</span>
        </div>
      </div>
    </section>
  );
} 
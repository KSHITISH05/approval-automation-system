// src/app/layout.tsx
// src/app/layout.tsx
import "@/app/globals.css"; // ✅ ADD THIS LINE

export const metadata = {
    title: "MP Birla Approval System",
    description: "Secure internal approval system for MP Birla",
  };
  
  export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
      <html lang="en">
      <body suppressHydrationWarning={true}>{children}</body>
      </html>
    );
  }

  
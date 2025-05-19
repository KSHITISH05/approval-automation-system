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

/*
This is the root layout component for the Next.js application. Here's what it does:

1. Global Styles:
   - Imports global CSS styles from globals.css
   - Applies Tailwind CSS styling framework

2. Metadata Configuration:
   - Sets page title to "MP Birla Approval System"
   - Provides description for SEO purposes
   - Used by Next.js head management

3. Root Layout Structure:
   - Defines base HTML structure for all pages
   - Sets language to English
   - Includes body with hydration warning suppressed
   - Renders child components via {children} prop

4. Hydration Handling:
   - suppressHydrationWarning prevents console warnings
   - Helps manage client/server rendering mismatches

This layout wraps all pages in the application, providing:
- Consistent base structure
- Global styles
- Meta information
- Server/client rendering coordination
*/
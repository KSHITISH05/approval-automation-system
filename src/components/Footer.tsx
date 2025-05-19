// ./src/components/Footer.tsx

export default function Footer() {
  return (
    <footer className="w-full py-6 px-4 bg-white border-t border-blue-50 mt-8">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#2d3a4d]">
        <div className="flex gap-6">
          <a href="#privacy" className="hover:text-blue-700 focus:text-blue-700 transition-colors">Privacy Policy</a>
        </div>
        <div className="flex gap-6">
          <a href="#terms" className="hover:text-blue-700 focus:text-blue-700 transition-colors">Terms/Contact</a>
        </div>
      </div>
    </footer>
  );
}

/*
This component implements a footer section for the web application with the following features:

1. Layout Structure:
   - Full-width footer (w-full)
   - Vertical padding of 6 units and horizontal padding of 4 units (py-6 px-4)
   - White background (bg-white)
   - Top border in light blue (border-t border-blue-50)
   - Top margin of 8 units (mt-8)

2. Content Container:
   - Maximum width constraint of 4xl (max-w-4xl)
   - Auto horizontal margins for centering (mx-auto)
   - Flex container with:
     - Column layout on mobile (flex-col)
     - Row layout on medium screens and up (md:flex-row)
   - Items centered vertically (items-center)
   - Space between content (justify-between)
   - Gap spacing of 4 units (gap-4)
   - Small text size (text-sm)
   - Custom text color (#2d3a4d)

3. Navigation Links:
   - Two sections with flex layout and gap-6 spacing
   - Links for:
     - Privacy Policy
     - Terms/Contact
   - Interactive states:
     - Hover effect changes text to blue-700
     - Focus state matches hover state
     - Smooth color transition (transition-colors)

4. Responsive Design:
   - Stacks vertically on mobile devices
   - Horizontal layout on medium screens and larger
   - Consistent spacing and padding across breakpoints

The footer provides essential navigation links while maintaining a clean,
professional appearance that matches the application's design system.
*/

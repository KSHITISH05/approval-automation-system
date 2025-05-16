// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Required to scan your files
  ],
  theme: {
    extend: {
      // you can extend your color palette or font here if needed
    },
  },
  plugins: [],
};
export default config;

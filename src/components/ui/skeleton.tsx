// ./src/components/ui/skeleton.tsx

import { cn } from "@/lib/utils"

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("bg-accent animate-pulse rounded-md", className)}
      {...props}
    />
  )
}

export { Skeleton }

/*
This is a skeleton component that uses the cn function to merge the skeleton variants with the className prop.
It also uses the data-slot attribute to allow the skeleton to be used as a child of another component.

*/

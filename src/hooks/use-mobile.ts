// ./src/hooks/use-mobile.ts
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    mql.addEventListener("change", onChange)
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return !!isMobile
}

/*
This hook implements a mobile detection mechanism using the window.matchMedia API.
It provides a boolean value indicating whether the current viewport is mobile or not.


1. Mobile Detection Mechanism:
   - Uses window.matchMedia to check the viewport width
   - Sets the mobile state based on the viewport width
   - Returns true if the viewport width is less than the mobile breakpoint


2. State Management:
   - Uses React.useState to manage the mobile state
   - Sets the initial state based on the current viewport width
   - Updates the state when the viewport width changes


3. Cleanup:
   - Removes the event listener when the component unmounts
   - Ensures the hook is not running when the component is not mounted

The useIsMobile hook provides a simple and efficient way to detect mobile devices

*/
  
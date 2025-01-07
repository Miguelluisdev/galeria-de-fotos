// hooks/useClickOutside.ts
import { useEffect, useRef } from "react"

type ClickOutsideHandler = () => void

export function useClickOutside<T extends HTMLElement>(
  handler: ClickOutsideHandler,
) {
  const ref = useRef<T>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [handler])

  return ref
}

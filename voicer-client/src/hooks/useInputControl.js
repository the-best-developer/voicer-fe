import { useState, useCallback } from "react"

export const useInputControl = (params) => {
  const [value, setValue] = useState(params)
  const onChange = useCallback((ev) => setValue(ev.currentTarget.value), [])
  return { value, onChange }
}

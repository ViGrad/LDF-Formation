import React from "react"
import { ChangeEvent } from "react"

export interface IInputProps {
  defaultValue: string
  onChange: (value: string) => void
}

export default ({ defaultValue, onChange }: IInputProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value)
  }

  return <input value={defaultValue} onChange={handleChange} />
}


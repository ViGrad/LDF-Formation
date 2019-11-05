import React from "react"
interface IFormFieldProps {
  label: string
  onChange: (text: string) => void
}

const FormField = (props: IFormFieldProps) => {
  const handleChange = (event: any) => {
    props.onChange(event.target.value)
  }
  return (
    <div>
      <label> {props.label} </label>
      <input onChange={handleChange} />
    </div>
  )
}
export default FormField

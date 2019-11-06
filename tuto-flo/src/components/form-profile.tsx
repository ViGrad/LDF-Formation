import React from "react"
import FormField from "./form-field"
import { IProfileField } from "../models/profile-field"
interface IFormProfileProps {
  data: IProfileField[]
}

const FormViewProfile = (props: IFormProfileProps) => {

  return (
    <div>
      <h1>Form Profil</h1>
      {props.data.map(d => (
        <div>
          <FormField label={d.label} value={d.value} onChange={d.onChange}  />
        </div>
      ))}
    </div>
  )
}

export default FormViewProfile

import React from "react"
import { IProfileField } from "../models/profile-field"

interface IViewProfileProps {
  data: IProfileField[]
}

const ViewProfile = (props: IViewProfileProps) => {
  return (
    <div>
      <h1>
        View Profil
      </h1>
      {props.data.map(d => (
        <div>
          <p>
            {d.label} : {d.value}
          </p>
          <br />
        </div>
      ))}
    </div>
  )
}

export default ViewProfile

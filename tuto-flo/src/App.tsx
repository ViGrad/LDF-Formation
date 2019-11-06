import React from "react"
import FormProfile from "./components/form-profile"
import ViewProfile from "./components/view-profile"
import { IProfile } from "./models/fake-profile"
import { IProfileField } from "./models/profile-field"

const App: React.FC = () => {
  const initProfile: IProfile = {
    age: "18",
    firstname: "Patou",
    lastname: "Latchi",
    sex: "M"
  }

  const [profile, setProfile] = React.useState(initProfile)

  const profileFields: IProfileField[] = (Object.keys(profile) as Array<
    keyof typeof profile
  >).map((key, i) => ({
    label: key,
    // @ts-ignore
    value: profile[key],
    onChange: (value: string) => {
      setProfile({ ...profile, [key]: value })
    }
  }))

  return (
    <div className="App">
      <FormProfile data={profileFields} />
      <ViewProfile data={profileFields} />
    </div>
  )
}

export default App

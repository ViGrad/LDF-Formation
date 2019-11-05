type returnType = [() => string, (x: string) => void]

const useState = (): returnType => {
  let variable = ""

  const getVariable = () => {
    return variable
  }

  const setVariable = (arg: any) => {
    variable = arg
  }

  return [getVariable, setVariable]
}

const [getVariable, setVariable] = useState()
const before = getVariable()
setVariable("salut")
const after = getVariable()

before
after
// @ts-ignore
const array = ["Vincent", "Nabil", "Florian"]

const newArray = array.map((x: string) => { 
  return `Bonjour, je m'appelle ${x}!` 
})

 console.log(newArray) // ["Bonjour, je m'appelle Vincent!", "Bonjour, je m'appelle Nabil!", "Bonjour, je m'appelle Florian!"]
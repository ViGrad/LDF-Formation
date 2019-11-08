// @ts-ignore
// https://developer.mozilla.org/fr/docs/Glossaire/Fonction_de_rappel
const arr = [1, 2, 3]
const mapped = arr.map(el => {
  return el * 2
})
console.log(mapped)

const map = (array: any[], callback: (x: any) => any) => {
  let newArray = []
  for(const el in arr) {
    newArray.push(callback(el))
  }
  return newArray
}
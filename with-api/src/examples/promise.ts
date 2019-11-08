// @ts-ignore
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({message: "bonjour"})
  }, 1000)
  //reject("Error!")
})

promise.then((res: any) => {
  return res.message + "!"
}).then(res => console.log(res))
.catch(res => console.log(res)) 
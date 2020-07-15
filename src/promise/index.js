const promise = new Promise((resolve, reject) => {
  const FLAG = 6
  if(FLAG === 5){
    resolve('Success')
  } else {
    reject(new Error('Internal Server Error 500'))
  }
})


promise.then(response => console.log(response))
  .catch(err => console.error(err))
const resolveAfter2Seconds = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve('Resolved')
      reject(new Error('Internal server error'))
    }, 2000);
  })
}

const asyncCall = async () => {
  try {
    const result = await resolveAfter2Seconds()
  
    console.log(result)

  } catch(error){
    console.error(error)
  }
}

asyncCall()
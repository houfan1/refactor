

module.exports = {
  getUser: () => {
    // return 111
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ name: '小笨猪' })
      }, 1000)
    })
  },
  getData: () => {
    return 222
  }
}

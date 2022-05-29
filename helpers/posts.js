require('colors')

const showMenu = () => {
  return new Promise(resolve => {
    console.clear()
    console.log(`
    =========================
         Select a option
    =========================`.blue)

    console.log(`
    1. Create folder
    2. Remove folder
    3  Find file
    4. Display IP network settings
    5. Check the history of actions
    6. Close
    `)

    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
    })

    readline.question('Select a option: ', (option) => {
      resolve(option)
      readline.close()
    })
  })
}

const pauseMenu = async () => {
  return new Promise(resolve => {
    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
    })

    readline.question(`Click ${'ENTER'.blue} for continue`, () => {
      readline.close()
      resolve()
    })
  })
}

module.exports = {
  showMenu,
  pauseMenu
}

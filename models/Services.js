const fs = require('fs')
const path = require('path')
const os = require('os')
// const util = require('util')

const Command = require('./Service')
const { answerQuestion } = require('../helpers/inquirer')

class Services {
  constructor () {
    this.list = {}
  }

  saveExecutedService (description) {
    const command = new Command(description)
    this.list[command.id] = command
  }

  async createFolder () {
    try {
      const { key: answer } = await answerQuestion('Write name\'s folder')

      fs.mkdirSync(path.join(process.cwd(), answer))

      console.log('\nCreated folder successfully\n')
    } catch (err) {
      console.log(`\n${err.message}\n`.red)
    }
  }

  async removeFolder () {
    try {
      const { key: answer } = await answerQuestion('Write name\'s folder')

      fs.rmdirSync(path.join(process.cwd(), answer))

      console.log('\nRemoved folder successfully\n')
    } catch (err) {
      console.log(`\n${err.message}\n`.red)
    }
  }

  networkInfo () {
    console.log('\n')
    console.log(os.networkInterfaces())
    console.log('\n')
  }

  checkFiles () {
    console.log('\n')
    fs.readdirSync(process.cwd()).forEach(file => {
      console.log(file)
    })
    console.log('\n')
  }

  checkList () {
    console.log('\nResult:\n'.green)
    if (this.list) {
      Object.keys(this.list).forEach((key) => {
        const command = this.list[key]
        console.log(command.description)
      })
    } else {
      console.log("\n Any command hasn't been executed".yellow)
    }
    console.log('\n')
  }
}

module.exports = Services

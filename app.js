#!/usr/bin/env node

require('colors')
const { showMenu, pauseMenu } = require('./helpers/inquirer')

const Services = require('./models/Services')
// const { saveDb } = require('./helpers/saveDb');

console.clear()

const main = async () => {
  let option
  const services = new Services()

  do {
    const { option: selectedOption, nameSelected } = await showMenu()
    option = selectedOption

    switch (option) {
      case 1:
        services.saveExecutedService(nameSelected)
        await services.createFolder()
        break

      case 2:
        services.saveExecutedService(nameSelected)
        await services.removeFolder()
        break

      case 3:
        services.saveExecutedService(nameSelected)
        services.networkInfo()
        break

      case 4:
        services.saveExecutedService(nameSelected)
        services.checkFiles()
        break

      case 5:
        services.checkList()
        break
    }

    // saveDb( services.list );

    if (option !== 0) await pauseMenu()
  } while (option !== 0)
}

main()

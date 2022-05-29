const inquirer = require('inquirer')
require('colors')

const questionPause = [
  {
    type: 'input',
    name: 'key',
    message: `Press ${'Enter'.blue} for continue`
  }
]

const questions = [
  {
    type: 'list',
    name: 'option',
    message: 'Select option',
    choices: [
      {
        value: 1,
        name: '1. Create folder'
      },
      {
        value: 2,
        name: '2. Remove folder'
      },
      {
        value: 3,
        name: '3. Display IP network settings'
      },
      {
        name: '4. Display files of actually directory',
        value: 4
      },
      {
        value: 5,
        name: '5. Check executed commands'
      },
      {
        value: 0,
        name: '0. Close'
      }
    ]
  }
]

const showMenu = async () => {
  console.clear()
  console.log(
    `
  =========================
       Select a option
  =========================
  `.blue
  )

  const { option } = await inquirer.prompt(questions)
  const nameSelected = questions[0].choices.find(
    (choince) => option === choince.value
  ).name
  return { option, nameSelected }
}

const pauseMenu = async () => {
  const { key } = await inquirer.prompt(questionPause)
  return key
}

const answerQuestion = async (question) => {
  const { key } = await inquirer.prompt([
    {
      type: 'input',
      name: 'key',
      message: question
    }
  ]
  )

  return { key }
}

module.exports = {
  showMenu,
  pauseMenu,
  answerQuestion
}

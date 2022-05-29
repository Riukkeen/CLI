const { v4: uuidv4 } = require('uuid')

class Service {
  constructor (description) {
    this.id = uuidv4()
    this.description = description
    this.done = null
  }
}

module.exports = Service

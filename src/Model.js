  class Model {
    constructor(name, quantity) {
      this.id = crypto.randomUUID()
      this.name = name
      this.quantity = +quantity
      this.stored = false
    }
  } 

  export { Model }
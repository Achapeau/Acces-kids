const Abstractmanager = require("./AbstractManager");

class AnimalManager extends Abstractmanager {
  constructor() {
    super({ table: "animal" });
  }
}

module.exports = AnimalManager;

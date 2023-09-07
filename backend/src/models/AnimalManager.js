const Abstractmanager = require("./AbstractManager");

class AnimalManager extends Abstractmanager {
  constructor() {
    super({ table: "animal" });
  }

  findTenRandomly() {
    return this.database.query(
      `SELECT * FROM ${this.table} ORDER BY RAND() LIMIT 10`
    );
  }
}

module.exports = AnimalManager;

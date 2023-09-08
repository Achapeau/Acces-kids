const Abstractmanager = require("./AbstractManager");

class AnimalManager extends Abstractmanager {
  constructor() {
    super({ table: "animal" });
  }

  findImages(number) {
    return this.database.query(
      "SELECT image_animal FROM animal ORDER BY RAND() limit ?",
      [number]
    );
  }

  findTenRandomly() {
    return this.database.query(
      `SELECT * FROM ${this.table} ORDER BY RAND() LIMIT 10`
    );
  }

  findOneImage() {
    return this.database.query(
      `SELECT image_animal FROM ${this.table} WHERE id=3`
    );
  }

  findThreeImageAndLetter() {
    return this.database.query(
      `SELECT image_animal, corresponding_letter FROM ${this.table} ORDER BY RAND() LIMIT 3`
    );
  }

  findOneImageAndLetter() {
    return this.database.query(
      `SELECT image_animal, corresponding_letter FROM ${this.table} ORDER BY RAND() LIMIT 1`
    );
  }
}

module.exports = AnimalManager;

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
}

module.exports = AnimalManager;

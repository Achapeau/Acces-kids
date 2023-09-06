const pool = require("./index");

class Abstractmanager {
  constructor({ table }) {
    this.table = table;
    this.database = pool;
  }
  findAll() {
    return this.database.query(`SELECT * FROM ${this.table} `);
  }
}
module.exports = Abstractmanager;

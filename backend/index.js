const app = require("./app");
require("dotenv").config();

const port = parseInt(process.env.APP_PORT ?? "8000");

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.info(`Server is listening on ${port}`);
  }
});

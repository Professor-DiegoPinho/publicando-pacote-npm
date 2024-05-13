const express = require("express");
const { isItHolidayToday } = require("feriadao");

const app = express();

app.get("/holiday", (req, res) => {
  const holiday = isItHolidayToday();
  res.send(holiday);
});

app.listen(5000, () => console.log(`Server is up and running!`));
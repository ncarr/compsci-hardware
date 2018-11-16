const express = require('express');
const LCD = require('lcdi2c');

const app = express();
const lcd = new LCD(1, 0x27, 16, 2);
lcd.clear();

app.get('/print/:text', (req, res) => {
  lcd.clear();
  lcd.print(req.params.text);
  res.send('OK');
});

app.listen(process.env.PORT || 3000);

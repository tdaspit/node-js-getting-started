/*
const cool = require('cool-ascii-faces');
const times = require(showTimes())
*/
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

const user = {
    name: 'Jack',
    isMarried: false,
    age: 25,
}
 
express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.send(user))
/*
.get('/cool', (req, res) => res.send(cool()))
.get('/times', (req, res) => res.send(showTimes()))
*/
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

/*
showTimes = () => {
  let result = '';
  const times = process.env.TIMES || 5;
  for (i = 0; i < times; i++) {
    result += i + ' ';
  }
  return result;
}
*/

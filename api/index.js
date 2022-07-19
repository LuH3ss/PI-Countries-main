//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const {
  conn
} = require('./src/db.js');
const {preLoadDb} = require('./src/utils/preLoadDb')
const {Country, Activity} = require('./src/db')

// Syncing all the models at once.
conn.sync({
  force: true
}).then(async() => {
  const allData = await Country.findAll({include: Activity})
  if(!allData.length) {
    preLoadDb();
  }

  server.listen(3001, () => {
    console.log('listening at 3001'); // eslint-disable-line no-console
  })
})


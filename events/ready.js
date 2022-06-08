const chalk = require('chalk')
const moment = require('moment')
const kanal = '957736119380897952'
const log = message => {
  
    console.log(`${chalk.magenta(moment().format('YYYY-MM h:mm:ss'))} ${message}`)
}

module.exports = async client => {
    client.user.setActivity("nova botlist tarafından yapılmıştır.")
    log(chalk.green(`[ BOT ] KOMUTLAR YÜKLENDI KULLANIMA HAZIR `))
  } 
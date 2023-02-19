const mineflayer = require('mineflayer')


const bot = mineflayer.createBot({
    host: 'BINFOR.aternos.me',
    username: 'GW PENJAGA SERVER',
//    port: 64509,
    // password: this.password,
    verbose: true,
    version : '1.19.3'
  })


 bot.on('chat', (username, message) => {
console.log(username + ' : ' + message);
    if (username === bot.username) return
    console.log(message);
    })

bot.once('spawn', () => {
    setInterval(movement, 1000)
    setInterval(iklan, 100000);
    function iklan() {
        Math.random() < 0.5 ? bot.chat('GW BAUUUUUUUUUUUUUU') : bot.chat('GW BAU BANGETTTTTT!')
    }
    async function movement() {
        console.log("ok");
        bot.creative.flyTo(bot.entity.position.offset(1, 250, 40))
        bot.creative.startFlying();
        bot.setControlState('jump', true);
        bot.setControlState('forward', true);
        bot.setControlState('sprint', true);
        await bot.waitForTicks(10);
        bot.setControlState('forward', false);
        bot.setControlState('back', true);
        await bot.waitForTicks(10);
        bot.setControlState('jump', false);
        bot.clearControlStates();
        bot.creative.stopFlying();
    }
})



// Log errors and kick reasons:
bot.on('kicked', console.log)
bot.on('error', console.log)

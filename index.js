// SETUP
const express = require('express')
const router = express()
const port = 3000

// Modules
const pug = require('pug')
const cookieParser = require('cookie-parser')

// Views and styles
router.set('view engine', 'pug')
router.use(express.static('./public'))

// local imports and instantiations
const Tools = require('./public/scripts/tools.js')
const tools = new Tools

router.get('/', (req, res) => {
	getCurrentTime = () => {
        let today = new Date();
        return today.toISOString().substr(11, 8);
	}
	res.cookie('Neildor', 'some-tasty-cookie')
	res.render(
		'index',
		{
			title : `Neildor's Server`,
			message : "Neildor's server",
			currentTime: tools.getCurrentTime()
		}
	)
});

router.listen(port, () => console.log(`Listening on port ${port}!`))
console.log(`${tools.printHello()} Server started: ${tools.getCurrentTime()}`)

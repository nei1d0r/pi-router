// Setup express and set port
const express = require('express')
const app = express()
const port = process.env.port || 3000

// Routes - This links to nested routes through index
const routes = require('./api/index')
app.use('/api', routes)

// Modules
const pug = require('pug')
const cookieParser = require('cookie-parser')

// Views and styles
app.set('view engine', 'pug')
app.use(express.static('./public'))

// local imports and instantiations
const Tools = require('./utils/tools.js')
const tools = new Tools

// set home route
app.get('/', (req, res) => {
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
	let userAgent = (req.headers['user-agent'])
	tools.logger(userAgent)
});

app.get('/downloadLogs', (req, res) => {
	const file = 'file.csv'
	res.download(file)
});

app.listen(port, () => console.log(`Listening on port ${port}!`))
console.log(`${tools.printHello()} Server started: ${tools.getCurrentTime()}`)

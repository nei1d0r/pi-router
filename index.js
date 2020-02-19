const express = require('express')
const router = express()
const port = 3000

const pug = require('pug')

router.use(express.static('./public'))

router.set('view engine', 'pug')

router.get('/', (req, res) => {
	getCurrentTime = () => {
        let today = new Date();
        return today.toISOString().substr(11, 8);
    }
	res.render(
		'index',
		{
			title : `Neildor's Server`,
			message : "Neildor's server",
			currentTime : getCurrentTime
		}
	)
});

router.listen(port, () => console.log(`Listening on port ${port}!`))

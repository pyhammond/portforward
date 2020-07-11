const unifi = require('../models/unifi')
unifi.setconf(require('../config'))

const controller = {

	display: (req, res, next) => unifi.get()
		.then(response => res.render('index', response.body.data[0]))
		.catch(err => {
			console.log('ERROR:', err)
		}),

	change: (req, res, next) => {
		const data = req.body
		// translate some boolean values correctly
		data.log = (data.log == '1') ? true : false
		data.enabled = (data.enabled == '1') ? true : false

		unifi.set(data)
			.then(response => {
				data.saved = true
				res.render('index', data)
			})
			.catch(err => {
				console.log('ERROR:', err)
			});
	}
}

module.exports = controller
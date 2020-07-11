const needle = require('needle') // https lib
needle.defaults({
	open_timeout: 10000,
	user_agent: 'UniFi/50612'
})

var config
const login = () => needle('post', config.uri + '/api/login',
	config.credentials, {
		json: true,
		rejectUnauthorized: false
	})

exports.setconf = conf => config = conf
exports.get = () => login()
	.then(response => needle('get',
		config.uri + '/api/s/default/rest/portforward/' + config.rule, {
			cookies: response.cookies,
			json: true,
			rejectUnauthorized: false
		}))
exports.set = data => login()
	.then(response => needle('put',
		config.uri + '/api/s/default/rest/portforward/' + config.rule,
		data, {
			cookies: response.cookies,
			json: true,
			rejectUnauthorized: false
		}))
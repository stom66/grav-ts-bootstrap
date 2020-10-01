'use strict'
module.exports = ctx => ({
	plugins: {
		autoprefixer: {
			cascade: false
		}
	}
})

module.exports = {
	plugins: [
		require('precss'),
		require('autoprefixer')
	]
}

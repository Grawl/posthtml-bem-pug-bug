'use strict'
const config = require('../gulp-config.js')
const locals = require(`../data.js`)
const postHTMLPlugins = {
	bem: require('posthtml-bem'),
	include: require('posthtml-include')
}
module.exports = {
	pug: {
		options: {
			basedir: '.',
			pretty: true,
			locals: locals,
			filters: {
				php: block => {
					return '<?' + block + '?>'
				}
			}
		}
	},
	postHTML: {
		plugins: [
			postHTMLPlugins.bem({
				elemPrefix: '-',
				modPrefix: '_',
				modDlmtr: '-'
			}),
			postHTMLPlugins.include()
		]
	}
}

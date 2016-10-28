const config = require('../gulp-config.js')
const postCSSPlugins = {
	postcssWillChange: require('postcss-will-change'),
	autoprefixer: require('autoprefixer'),
	postcssAssets: require('postcss-assets'),
	postcssAxis: require('postcss-axis'),
	postcssShort: require('postcss-short'),
	postcssImport: require('postcss-import'),
	postcssCopy: require('postcss-copy')
}
module.exports = {
	sass: {
		output: 'nested'
	},
	postcss: [
		postCSSPlugins.postcssWillChange,
		postCSSPlugins.autoprefixer,
		postCSSPlugins.postcssAssets({
			loadPaths: [config.serve]
		}),
		postCSSPlugins.postcssAxis,
		postCSSPlugins.postcssShort,
		postCSSPlugins.postcssImport,
		postCSSPlugins.postcssCopy({
			src: ['/node_modules'],
			dest: config.serve,
			relativePath(dirname, fileMeta, result, opts) {
				return opts.dest
			},
			template(fileMeta) {
				return config.stylesAssetsFolder + fileMeta.name + '.' + fileMeta.ext
			}
		}),
	]
}

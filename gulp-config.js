const env = require('./env.js')
module.exports = {
	src: "source/",
	templatesToCompile: "source/*.pug",
	templatesToWatch: "source/**/*.{pug,md,html,php}",
	stylesToCompile: "source/*.{sass,scss}",
	stylesToWatch: "source/**/*.{sass,scss}",
	stylesFolder: "source/",
	stylesAssetsFolder: "vendor/", // relative
	scriptsToCompile: "source/*.es6",
	scriptsToWatch: "source/**/*.{js,es6}",
	imagesToOptimize: "public/images/", // just folder
	serve: "public/",
	package: "*.{json,js}",
	tasksDir: "gulp/",
	imageExtensions: "svg,jpeg,jpg,png,gif",
	fontExtensions: "svg,ttf,woff,otf,eot",
	browserSync: {
		port: process.env.CI ? 3000 : env.browsersync.port,
		server: "public/",
		open: false,
		reloadOnRestart: true
	},
	upload: {
		ftp: {
			enable: false,
			description: "FTP (docs: https://github.com/morris/vinyl-ftp)"
		},
		githubPages: {
			enable: true,
			description: "Github Pages (http://pages.github.com, docs: https://github.com/shinnn/gulp-gh-pages)"
		},
		surge: {
			enable: false,
			description: "Surge (http://surge.sh, docs: https://github.com/surge-sh/gulp-surge)"
		}
	}
}

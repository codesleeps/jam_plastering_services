module.exports = {
	globDirectory: 'assets/',
	globPatterns: [
		'**/*.{css,webp,png,jpg,mp4,js,txt,json,woff,woff2,eot,svg,ttf}'
	],
	swDest: 'assets/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};
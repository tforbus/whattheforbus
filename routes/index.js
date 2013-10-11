
/*
 * GET home page.
 */

module.exports = function(app) {
	
	app.get('/', function(req, res) {
		res.render('index')
	})

	app.get('/ping', function(req, res) {
		res.send(200)
	})

	app.get('/youtube-bookmarklet', function(req, res) {
		res.render('youtube-bookmarklet')
	})
}
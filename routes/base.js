const {newsService} = require("../services");

module.exports = app => {
	app.get("/", (req, res) => {
		newsService()
			.then(res => res.json())
			.then(result => {
				res.send(result);
			});
	});
};
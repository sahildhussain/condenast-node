const {newsService} = require("../services");

module.exports = app => {
	app.get("/news", (req, res) => {
		newsService()
			.then(res => res.json())
			.then(result => {
                console.log(result)
				res.send(result);
			});
    });

    app.get("/news/:keyword", (req, res) => {
        let keyword = req.params.keyword
        let data = {q:keyword}
		newsService(data)
			.then(res => res.json())
			.then(result => {
                console.log(result)
				res.send(result);
			});
    });
    
};

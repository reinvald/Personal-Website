
var getMain = function (req, res) {
    res.sendFile(__dirname + '/home.html')
    //res.render('landingpage.ejs', { err: "" });
};

// routes
var routes = {
    get_main: getMain
};

module.exports = routes;

/*
 * GET home page.
 */

module.exports = function(app, models) {

    app.get('/', function(req, res) {
        res.redirect('/history');
    });

    app.get('/diary', function(req, res) {
        res.render('diary', { title: 'Diary' });
    });

    app.get('/trending', function(req, res) {
        res.render('trending', { title: 'Trending' });
    });

    app.post('/diary', function(req, res) {
        tasting = new models.Tasting({
            beerName: req.param('beerName'),
            location: req.param('location'),
            coords: req.param('coords'),
            notes: req.param('notes'),
            liked: false
        });
        tasting.save();

        res.redirect('/history');
    });

    app.get('/history', function(req, res){
        models.Tasting.find(function(err, tastings) {
            console.log(tastings);
            res.render('history', { title: 'History', tastings: tastings });
        });
    });

    app.get('/trending', function(req, res){
        models.Tasting.find(function(err, tastings) {
            console.log(tastings);
            res.render('trending', { title: 'Trending', tastings: tastings });
        });
    });
};


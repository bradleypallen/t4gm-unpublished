
/**
 * Module dependencies.
 */

var express = require('express')
    , routes = require('./routes')
    , utils = require('./utils')
    , http = require('http');

var app = express();

app.configure(function(){
    app.set('port', process.env.PORT || 6073);
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.set('mapping', utils.parse_linkset_ntriples('./public/data/linkset.nt', 'http://www.t4gm.info'));
    app.use(express.favicon(__dirname + '/public/images/favicon.ico'));
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
    app.use(express.errorHandler());
});

app.get('/', routes.dataset);

app.get('/index.html', routes.dataset);

app.get('/linkset', routes.linkset);

app.get('/concept/:id.:format?', routes.redirect);

app.get('/t4gm-dump.rdf.gz', routes.gone);

app.get('/about', routes.gone);

app.get('/help', routes.gone);

http.createServer(app).listen(app.get('port'), function(){
    console.log("Express server listening on port " + app.get('port'));
});

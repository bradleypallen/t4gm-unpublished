var statusCodes = require('http').STATUS_CODES;

exports.dataset = function(req, res) {
    if (req.accepts('application/xhtml+xml')) {
	res.set('Content-Type', 'application/xhtml+xml');
        res.render('index', { 'title': 't4gm.info' });
	res.end();
    } else if (req.accepts('application/rdf+xml')) {
	res.set('Content-Type', 'application/rdf+xml');
        res.sendfile('./public/data/dataset.rdf');
    } else if (req.accepts('text/turtle')) {
	res.set('Content-Type', 'text/turtle');
        res.sendfile('./public/data/dataset.ttl');
    } else if (req.accepts('text/plain')) {
	res.set('Content-Type', 'text/plain');
        res.sendfile('./public/data/dataset.nt');
    } else {
	res.statusCode = 406;
	res.end();
    }
};

exports.linkset = function(req, res) {
    if (req.accepts('application/rdf+xml')) {
	res.set('Content-Type', 'application/rdf+xml');
        res.sendfile('./public/data/linkset.rdf');
    } else if (req.accepts('text/turtle')) {
	res.set('Content-Type', 'text/turtle');
        res.sendfile('./public/data/linkset.ttl');
    } else if (req.accepts('text/plain')) {
	res.set('Content-Type', 'text/plain');
        res.sendfile('./public/data/linkset.nt');
    } else {
	res.statusCode = 406;
	res.end();
    }
};

exports.redirect = function(req, res) {
    var head = 'HEAD' == req.method
      , target_url = res.app.settings.mapping[req.url]
      , body;
    if (target_url != null) {
	res.statusCode = 301;
	if (req.accepts('text')) {
	    body = statusCodes[301] + '. Redirecting to ' + target_url;
	}
	if (req.accepts('html')) {
	    body = '<p>' + statusCodes[301] + '. Redirecting to <a href="' + target_url + '">' + target_url + '</a></p>';
	}
 	res.set('Location', target_url);
    } else {
	res.statusCode = 404;
    }
    res.end(head ? null : body);
};

exports.gone = function(req, res) {
    var head = 'HEAD' == req.method
      , gone_msg = 'The requested resource is no longer available on this server and there is no forwarding address. Please remove all references to this resource.'
      , body;
    res.statusCode = 410;
    if (req.accepts('text')) {
	body = statusCodes[410] + '. ' + gone_msg;
    }
    if (req.accepts('html')) {
	body = '<p>' + statusCodes[410] + '. ' + gone_msg + '</p>';
    }
    res.end(head ? null : body);
};

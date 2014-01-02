var url = require ('url');
var reader = require ('buffered-reader');

exports.parse_linkset_ntriples = function (filename) {
    var mapping = {};
    var re = /<(.+)>\s+<.+>\s+<(.+)>\s*\./;
    new reader.DataReader (filename, { encoding: "utf8" })
	.on ("error", function (error) {
	    console.log (error);
	})
	.on ("line", function (line) {
	    var match = re.exec(line);
	    if (match != null) {
		var resource = url.parse(match[1]);
		mapping[resource.path] = match[2];
	    }
	})
	.read ();
    return mapping;
}
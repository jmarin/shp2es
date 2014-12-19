#!/Users/marinj/homebrew/bin/node

'use strict';

var program = require('commander');
//var shp = require('./lib/shp');

program
  .version('1.0.0')
	.option('-s, --shapefile', 'Shapefile')
	.option('-h, --host', 'ElasticSearch host')
	.option('-p','--port', 'ElasticSearch port')
	.parse(process.argv);

	if (program.shapefile === undefined ||
      program.host === undefined ||
      program.port === undefined) {
		usage();
		return;
	} else {
	  console.log('This is where all the magic happens');
		//console.log(shp.read(program.shapefile));
	}

console.log('Loading shapefile: ' + program.shapefile);



function usage() {
  console.log('usage: shp2es -s <shapefile> -h <ElasticSearch host> -p <ElasticSearch port>');
}

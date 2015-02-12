#!/usr/bin/env node

'use strict';

var program = require('commander');
var shp = require('./lib/shp');

program
  .version('1.0.0')
	.option('-s, --shapefile <s>', 'Shapefile')
	.option('-h, --host <h>', 'ElasticSearch host')
	.option('-p ,--port <p>', 'ElasticSearch port', parseInt)
	.parse(process.argv);

	if (program.shapefile === undefined ||
      program.host === undefined ||
      program.port === undefined) {
		usage();
		return;
	} else {
		shp.read(program.shapefile, program.host, program.port);
		return;
	}


function usage() {
  console.log('usage: shp2es -s <shapefile> -h <ElasticSearch host> -p <ElasticSearch port>');
}

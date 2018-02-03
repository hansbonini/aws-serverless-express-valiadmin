'use strict'

import awsServerlessExpress from 'aws-serverless-express';
import admin from './admin/app.js';

const server = awsServerlessExpress.createServer(admin);

exports.init = (event, context) => {
	return awsServerlessExpress.proxy(server, event, context);
}

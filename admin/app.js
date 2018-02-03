'use strict'

import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import cors from 'cors';

import awsServerlessExpressMiddleware from 'aws-serverless-express/middleware';

import pugStatic from 'pug-static';

const app = express();
app.engine('pug', require('pug').__express);
app.set('views', '/var/task/views');
app.set('view engine', 'pug');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(awsServerlessExpressMiddleware.eventContext());

app.use('/css', express.static('/var/task/css'));
app.use('/js', express.static('/var/task/js'));
app.use(pugStatic("/var/task/views"));

module.exports = app;

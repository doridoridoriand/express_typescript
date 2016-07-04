/// <reference path = '../typings/main.d.ts' />;
import Route from './config/route';

const express = require('express');
const app     = express();
const server  = require('http').Server(app);
const port    = 3000;

Route.init(app);

server.listen(port);

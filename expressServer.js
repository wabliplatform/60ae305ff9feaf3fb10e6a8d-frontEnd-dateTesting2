const http = require('http');
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const path = require('path');

class ExpressServer {
    constructor(port) {
      this.port = port;
      this.app = express();
      this.setupMiddleware();
    }
  
    setupMiddleware() {
      this.app.use(cors());
      this.app.use(bodyParser.json({ limit: '14MB' }));
      this.app.use(express.json());
      this.app.use(express.urlencoded({ extended: false }));
      this.app.use(cookieParser());
      this.app.use(express.static(__dirname));
      this.app.get('/', (req, res) => res.sendFile(path.join(__dirname,'html','Dashboard.html')));
			this.app.get('/Dashboard', (req, res) => res.sendFile(path.join(__dirname,'html','Dashboard.html')));
			this.app.get('/Dashboard/:id', (req, res) => res.sendFile(path.join(__dirname,'html','Dashboard.html')));
			this.app.get('/AddProject', (req, res) => res.sendFile(path.join(__dirname,'html','AddProject.html')));
			this.app.get('/AddProject/:id', (req, res) => res.sendFile(path.join(__dirname,'html','AddProject.html')));
			this.app.get('/EditProject', (req, res) => res.sendFile(path.join(__dirname,'html','EditProject.html')));
			this.app.get('/EditProject/:id', (req, res) => res.sendFile(path.join(__dirname,'html','EditProject.html')));
			this.app.get('/SignIn', (req, res) => res.sendFile(path.join(__dirname,'html','SignIn.html')));
			this.app.get('/SignIn/:id', (req, res) => res.sendFile(path.join(__dirname,'html','SignIn.html')));
			this.app.get('/SearchByDate', (req, res) => res.sendFile(path.join(__dirname,'html','SearchByDate.html')));
			this.app.get('/SearchByDate/:id', (req, res) => res.sendFile(path.join(__dirname,'html','SearchByDate.html')));
			
    }
  
    launch() {
          http.createServer(this.app).listen(this.port);
          console.log(`Listening on port ${this.port}`);
    }
  
  
    async close() {
      if (this.server !== undefined) {
        await this.server.close();
        console.log(`Server on port ${this.port} shut down`);
      }
    }
  }
  
  module.exports = ExpressServer;
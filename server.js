

"use strict"

const aiFile = require('./ai.js');
const AI = aiFile.AI; 

const blockingTerrainFile = require('./blockingTerrain.js');
const blockingTerrain = blockingTerrainFile.blockingTerrain;

const express = require('express');
const socketIO = require('socket.io');
const path = require('path');

const PORT = process.env.PORT || 3000;


const server = express()
	.use(express.static(path.join(__dirname, 'public')))


server.get('/path', function(req, res){
	var query = req.query;
	var path = AI.AStar({x: ~~(query.startX / 32), y: ~~(query.startY / 32)}, {x: ~~(query.endX / 32), y: ~~(query.endY / 32)}, blockingTerrain);
	res.send(path);
})
server.listen(PORT, () => console.log(`Listening on ${ PORT }`));


var entityStats = {
  'quarry': {'attack': 0, 'cost': 0, 'value': 100, 'object': true},
  'dwarfSoldier': {'attack': 10, 'cost' : 50, 'value' : 25},
  'elfFemale' : {'attack' : 12, 'cost' : 75, 'value' : 35},
  'humanSoldier' : {'attack' : 15, 'cost' : 120, 'value' : 60},
  'orcPeon' : {'attack' : 20, 'cost' : 150, 'value' : 75}
}








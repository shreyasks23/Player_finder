const express = require('express');
const router = express.Router();
const Player = require('../models/player')


//GET all players
router.get('/players', function(req, res, next){
    
       console.log('GET request');
       res.send({'TYPE':'GET'});
       
   });


   //CREATE new player
   router.post('/players', function(req, res, next){
      Player.create(req.body).then(function(player){
        res.send(player); 
      }).catch(next);     
           
   });

   //UPDATE existing ninja
   router.put('/players/:id', function(req, res, next){
    
       Player.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){

        Player.findOne({_id: req.params.id}).then(function(player){

            res.send(player);
        });
        });
       
   });


   //DELETE existing player
   router.delete('/players/:id', function(req, res, next){

    Player.findByIdAndRemove({_id: req.params.id}).then(function(player){
        res.send(player);
    });
             
            
     });

   module.exports = router;
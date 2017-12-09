const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create player schema & model

const PlayerSchema = new Schema({

    name: {
        type:String,
        required:[true , 'name field is required']
    },

    sport:{

        type:String
    },

    available:{

        type:Boolean,
        default:false
    }

    //add geo location
});

const Player = mongoose.model('player',PlayerSchema);
module.exports= Player;
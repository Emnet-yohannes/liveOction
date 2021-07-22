import mongoose from 'mongoose';

//first we have to create mongoose schema

const bidSchema = mongoose.Schema({
    title:String,
    // description:String,
    owner:String,
    // tags:[String],
    coverImage:String,
    // likeCount:{
    //     type:Number,
    //     default:0
    // },
    deadLine:{
        type:Date,
        default:new Date()
    },
});
//we have to turn the schema to model
const BidModel = mongoose.model('BidModel',bidSchema);
export default BidModel;
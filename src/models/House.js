import {Schema, model} from "mongoose";

const HouseSchema = new Schema({
  thumbnail : String,
  description : String,
  price : Number,
  location : String,
  status : Boolean,
  user:{ //refencia ao id do usuario
    type: Schema.Types.ObjectId,
    ref:'User'
  }

}, {
  toJSON : {
    virtuals : true
  }
});

//recuper a imagem 
HouseSchema.virtual('thumbnail_url').get(function(){
return `http://localhost:3333/files/${this.thumbnail}`;
})

export default model('House',HouseSchema);
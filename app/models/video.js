// Example model

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var VideoSchema = new Schema({
  title: String,
  description: String,
  username: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  category: String,
  tags: [String]

});

VideoSchema.virtual('date')
  .get(function(){
    return this._id.getTimestamp();
  });

mongoose.model('Video', VideoSchema);


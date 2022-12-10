const { Schema, model } = require('mongoose');

const motiveSchema = new Schema(
  {
    description: {
      type: String,
      required: true,
    },
    object_id: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    
  }
);

const Motive = model('Motive', motiveSchema);

module.exports = Motive;
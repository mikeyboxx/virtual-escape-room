const { Schema, model } = require('mongoose');

const motiveSchema = new Schema(
  {
    description: {
      type: String,
      required: true,
    },
    motive_id: {
      type: String,
      required: true,
    },
    interaction_id: {
      type: String,
      required: true,
    },
    
  }
);

const Motive = model('Motive', motiveSchema);

module.exports = Motive;

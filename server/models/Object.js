const { Schema, model } = require('mongoose');

const objectSchema = new Schema(
  {
    type: {   // 'Character' or 'Thing'
      type: String,
      required: true,
    },
    is_weapon: {   
      type: Boolean,
      default: false,
    },
    description: {
      type: String,
      required: true,
    },
    room_id: {
      type: Schema.Types.ObjectId,
      required: true,
    },
  }
);

const Object = model('Object', objectSchema);

module.exports = Object;

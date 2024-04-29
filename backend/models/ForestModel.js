const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const forestSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    ecoregion: {
      type: String,
      required: true,
    },
    canopy: {
      type: String,
      required: true,
    },
    subCanopy: {
      type: String,
      required: true,
    },
    shrub: {
      type: String,
      required: true,
    },
    herb: {
      type: String,
      required: true,
    },
    groundCover: {
      type: String,
      required: true,
    },
    underground: {
      type: String,
      required: true,
    },
    vine: {
      type: String,
      required: true,
    },
    fungi: {
      type: String,
      required: false,
    },
    user_id: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Forest', forestSchema);

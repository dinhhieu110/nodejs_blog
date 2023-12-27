const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const slug = require("mongoose-slug-updater");

const Course = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    thumbnail: { type: String, maxLength: 255 },
    videoId: { type: String, required: true },
    slug: { type: String, slug: "name", unique: true },
  },
  {
    timestamps: true,
  }
);

// Add plugins
mongoose.plugin(slug);

module.exports = mongoose.model("Course", Course);
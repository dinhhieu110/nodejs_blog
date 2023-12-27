module.exports = {
  // function 1: xử lí nhận array từ DB
  multipleMongooseToObject: function (mongooseArray) {
    return mongooseArray.map((mongooseArray) => mongooseArray.toObject());
  },
  // function 2: xử lí nhận 1 object từ DB
  mongooseToObject: function (mongoose) {
    return mongoose ? mongoose.toObject() : mongoose;
  },
};

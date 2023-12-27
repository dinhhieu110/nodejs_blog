const Course = require("../models/Course");
const { multipleMongooseToObject } = require("../../util/mongoose");
class MeController {
  // [GET] /me/stored-courses
  storeCourses(req, res, next) {
    Course.find({})
      .then((courses) => {
        res.render("me/stored-courses", {
          courses: multipleMongooseToObject(courses),
        });
      })
      .catch((err) => {
        next(err);
      });
  }
}

module.exports = new MeController();

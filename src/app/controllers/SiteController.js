const Course = require("../models/Course");
const { multipleMongooseToObject } = require("../../util/mongoose");

class SiteController {
  // [GET] /
  home(req, res, next) {
    // Lấy dữ liệu từ Mongo DB bằng 2 cách:
    // 1. Promise
    Course.find({})
      .then((courses) => {
        // Vì lỗi bảo mật của hbs nên ghi đè courses để this ở bên hbs có thể render
        res.render("home", {
          courses: multipleMongooseToObject(courses),
        }); // trả về json của các courses từ DB ở home
      })
      .catch((err) => {
        next(err);
      });
  }
  // 2. Async/Await
  // try {
  //   const courses = await Course.find({});
  //   res.render("home", { courses });
  // } catch (error) {
  //   next(error);
  // }
  // res.render("home");
  // }

  // [GET] /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();

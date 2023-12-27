const express = require("express");
const router = express.Router();

const coursesController = require("../app/controllers/CourseController");

router.get("/create", coursesController.create); // view add course
router.post("/store", coursesController.store); // add course
router.get("/:id/update", coursesController.update); // view update course
router.put("/:id", coursesController.update2); // update course
router.delete("/:id", coursesController.destroy);
router.get("/:slug", coursesController.show); // view detail course

module.exports = router;

const express = require("express");
const router = express.Router();
const TutorController = require("../controllers/tutor.controller");

router.get("/tutors", TutorController.getTutors);

router.post("/tutor", TutorController.createTutor);

router.put("/tutor/:id", TutorController.updateTutor);

router.delete("/tutor/:id", TutorController.deleteTutor);

module.exports = router;

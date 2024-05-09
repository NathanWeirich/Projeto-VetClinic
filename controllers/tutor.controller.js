const TutorService = require("../services/tutor.service");

exports.getTutors = async function (req, res) {
  try {
    const tutors = await TutorService.getAllTutors();
    res.json(tutors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createTutor = async (req, res) => {
  try {
    const newTutor = await TutorService.createTutor(req.body);
    res.status(201).json(newTutor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateTutor = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedTutor = await TutorService.updateTutor(id, req.body);
    res.json(updatedTutor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteTutor = async (req, res) => {
  const { id } = req.params;
  try {
    await TutorService.deleteTutor(id);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

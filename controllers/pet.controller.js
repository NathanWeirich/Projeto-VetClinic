const PetService = require("../services/pet.service");
const TutorService = require("../services/tutor.service");

exports.createPet = async (req, res) => {
  const { tutorId } = req.params;
  const petData = req.body;
  try {
    const tutor = await TutorService.getTutorById(tutorId);
    if (!tutor) {
      return res.status(404).json({ message: "Tutor not found" });
    }
    const newPet = await PetService.createPet(tutorId, petData);
    res.status(201).json(newPet);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updatePet = async (req, res) => {
  const { petId } = req.params;
  const updatedPetData = req.body;
  try {
    const updatedPet = await PetService.updatePet(petId, updatedPetData);
    res.json(updatedPet);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deletePet = async (req, res) => {
  const { petId } = req.params;
  try {
    await PetService.deletePet(petId);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

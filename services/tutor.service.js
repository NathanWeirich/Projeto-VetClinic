const Tutor = require("../models/tutor.model");
const Pet = require("../models/pet.model");

exports.getTutorById = async (tutorId) => {
  try {
    const tutor = await Tutor.findByPk(tutorId);
    return tutor;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.getAllTutors = async () => {
  try {
    return await Tutor.findAll({ include: Pet });
  } catch (error) {
    throw new Error("Unable to fetch tutors");
  }
};

exports.createTutor = async (tutorData) => {
  try {
    return await Tutor.create(tutorData);
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.updateTutor = async (id, updatedData) => {
  try {
    const tutor = await Tutor.findByPk(id);
    if (!tutor) {
      throw new Error("Tutor not found");
    }
    await tutor.update(updatedData);
    return tutor;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.deleteTutor = async (id) => {
  try {
    const tutor = await Tutor.findByPk(id);
    if (!tutor) {
      throw new Error("Tutor not found");
    }
    await tutor.destroy();
  } catch (error) {
    throw new Error(error.message);
  }
};

const Pet = require("../models/pet.model");
const Tutor = require("../models/tutor.model");

exports.getAllPets = async () => {
  try {
    return await Pet.findAll({ include: Tutor });
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.createPet = async (tutorId, petData) => {
  try {
    const tutor = await Tutor.findByPk(tutorId);
    if (!tutor) {
      throw new Error("Tutor not found");
    }

    const pet = await Pet.create(petData);
    await pet.setTutor(tutor);
    return pet;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.updatePet = async (petId, updatedData) => {
  try {
    const pet = await Pet.findByPk(petId);
    if (!pet) {
      throw new Error("Pet not found");
    }

    await pet.update(updatedData);
    return pet;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.deletePet = async (petId) => {
  try {
    const pet = await Pet.findByPk(petId);
    if (!pet) {
      throw new Error("Pet not found");
    }

    await pet.destroy();
  } catch (error) {
    throw new Error(error.message);
  }
};

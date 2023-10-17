import PetModel from "../models/pet.model";

const create = async (data: any) => {
  const newPet = await PetModel.create(data);
  return newPet;
};

const findAll = async () => {
  const pets = await PetModel.find();
  return pets;
};

const findById = async (id: string) => {
  const pet = await PetModel.findById(id);
  if (!pet) return "Pet not found.";
  return pet;
};

const findByIdAndUpdate = async (id: string, data: any) => {
  const updatedPet = await PetModel.findByIdAndUpdate(id, data, {
    new: true,
  });
  if (!updatedPet) return "Pet not found.";
  return updatedPet;
};

const findByIdAndDelete = async (id: string) => {
  const deletedPet = await PetModel.findByIdAndDelete(id);
  if (!deletedPet) return "Pet not found.";
  return deletedPet;
};

export { create, findAll, findById, findByIdAndUpdate, findByIdAndDelete };

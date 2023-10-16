import PetModel from "../models/pet.model";

export const create = async (data: any) => {
  const newPet = await PetModel.create(data);
  return newPet;
};

export const findAll = async () => {
  const pets = await PetModel.find();
  return pets;
};

export const findById = async (id: string) => {
  const pet = await PetModel.findById(id);
  if (!pet) return "Pet not found.";
  return pet;
};

export const findByIdAndUpdate = async (id: string, data: any) => {
  const updatedPet = await PetModel.findByIdAndUpdate(id, data, {
    new: true,
  });
  if (!updatedPet) return "Pet not found.";
  return updatedPet;
};

export const findByIdAndDelete = async (id: string) => {
  const deletedPet = await PetModel.findByIdAndDelete(id);
  if (!deletedPet) return "Pet not found.";
  return deletedPet;
};

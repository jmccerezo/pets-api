import PetModel from "../../db/pets";

export const addItem = async (data: any) => {
  const newPet = await PetModel.create(data);
  return newPet;
};

export const listItems = async () => {
  const pets = await PetModel.find();
  return pets;
};

export const getItem = async (id: string) => {
  const pet = await PetModel.findById(id);
  if (!pet) return "Pet not found";
  return pet;
};

export const editItem = async (id: string, data: any) => {
  const updatedPet = await PetModel.findByIdAndUpdate(id, data);
  return updatedPet;
};

export const deleteItem = async (id: string) => {
  const deletedPet = await PetModel.findByIdAndDelete(id);
  return deletedPet;
};

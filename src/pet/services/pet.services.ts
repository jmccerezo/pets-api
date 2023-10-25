import PetModel from "../models/pet.model";

const create = async (data: any) => {
  return await PetModel.create(data);
};

const findAll = async () => {
  return await PetModel.find();
};

const findById = async (id: string) => {
  return await PetModel.findById(id);
};

const findByIdAndUpdate = async (id: string, data: any) => {
  return await PetModel.findByIdAndUpdate(id, data, {
    new: true,
  });
};

const findByIdAndDelete = async (id: string) => {
  return await PetModel.findByIdAndDelete(id);
};

export { create, findAll, findById, findByIdAndUpdate, findByIdAndDelete };

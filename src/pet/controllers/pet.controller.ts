import {
  create,
  findAll,
  findById,
  findByIdAndUpdate,
  findByIdAndDelete,
} from "../services/pet.service";

export const addPet = async (req: any, res: any) => {
  await create(req.body)
    .then((data) => res.status(200).json(data))
    .catch((err: Error) => res.status(500).send(err));
};

export const getAllPets = async (req: any, res: any) => {
  await findAll()
    .then((data) => res.status(200).json(data))
    .catch((err: Error) => res.status(500).send(err));
};

export const getOnePet = async (req: any, res: any) => {
  await findById(req.params.id)
    .then((data) => res.status(200).json(data))
    .catch((err: Error) => res.status(500).send(err));
};

export const editPet = async (req: any, res: any) => {
  await findByIdAndUpdate(req.params.id, req.body)
    .then((data) => res.status(200).json(data))
    .catch((err: Error) => res.status(500).send(err));
};

export const deletePet = async (req: any, res: any) => {
  await findByIdAndDelete(req.params.id)
    .then((data) => res.status(200).json(data))
    .catch((err: Error) => res.status(500).send(err));
};

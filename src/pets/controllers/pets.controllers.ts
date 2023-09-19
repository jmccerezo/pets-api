import {
  addItem,
  listItems,
  getItem,
  editItem,
  deleteItem,
} from "../models/pets.models";

export const addPet = async (req: any, res: any) => {
  await addItem(req.body)
    .then((data) => res.status(200).json(data))
    .catch((err: Error) => res.status(500).send(err));
};

export const listPets = async (req: any, res: any) => {
  await listItems()
    .then((data) => res.status(200).json(data))
    .catch((err: Error) => res.status(500).send(err));
};

export const getPet = async (req: any, res: any) => {
  await getItem(req.params.id)
    .then((data) => res.status(200).json(data))
    .catch((err: Error) => res.status(500).send(err));
};

export const editPet = async (req: any, res: any) => {
  await editItem(req.params.id, req.body)
    .then((data) => res.status(200).json(data))
    .catch((err: Error) => res.status(500).send(err));
};

export const deletePet = async (req: any, res: any) => {
  await deleteItem(req.params.id)
    .then((data) => res.status(200).json(data))
    .catch((err: Error) => res.status(500).send(err));
};

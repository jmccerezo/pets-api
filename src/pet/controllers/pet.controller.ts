import express from "express";
import {
  create,
  findAll,
  findById,
  findByIdAndUpdate,
  findByIdAndDelete,
} from "../services/pet.service";

const addPet = async (req: express.Request, res: express.Response) => {
  await create(req.body)
    .then((data) => res.status(200).json(data))
    .catch((err: Error) => res.status(500).send(err));
};

const getAllPets = async (req: express.Request, res: express.Response) => {
  await findAll()
    .then((data) => res.status(200).json(data))
    .catch((err: Error) => res.status(500).send(err));
};

const getOnePet = async (req: express.Request, res: express.Response) => {
  await findById(req.params.id)
    .then((data) => res.status(200).json(data))
    .catch((err: Error) => res.status(500).send(err));
};

const editPet = async (req: express.Request, res: express.Response) => {
  await findByIdAndUpdate(req.params.id, req.body)
    .then((data) => res.status(200).json(data))
    .catch((err: Error) => res.status(500).send(err));
};

const deletePet = async (req: express.Request, res: express.Response) => {
  await findByIdAndDelete(req.params.id)
    .then((data) => res.status(200).json(data))
    .catch((err: Error) => res.status(500).send(err));
};

export { addPet, getAllPets, getOnePet, editPet, deletePet };

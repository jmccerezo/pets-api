import { Request, Response } from "express";
import {
  create,
  findAll,
  findById,
  findByIdAndUpdate,
  findByIdAndDelete,
} from "../services/pet.services";

const notFoundResponse = {
  message: "Pet does not exist.",
  error: "Not Found",
  statusCode: 404,
};

const addPet = async (req: Request, res: Response) => {
  await create(req.body)
    .then((data) => res.status(200).send(data))
    .catch((err: Error) => res.status(500).send(err));
};

const getAllPets = async (req: Request, res: Response) => {
  await findAll()
    .then((data) => res.status(200).send(data))
    .catch((err: Error) => res.status(500).send(err));
};

const getOnePet = async (req: Request, res: Response) => {
  await findById(req.params.id)
    .then((data) => {
      if (!data) return res.status(404).send(notFoundResponse);

      return res.status(200).send(data);
    })
    .catch((err: Error) => res.status(500).send(err));
};

const editPet = async (req: Request, res: Response) => {
  await findByIdAndUpdate(req.params.id, req.body)
    .then((data) => {
      if (!data) return res.status(404).send(notFoundResponse);

      return res.status(200).send(data);
    })
    .catch((err: Error) => res.status(500).send(err));
};

const deletePet = async (req: Request, res: Response) => {
  await findByIdAndDelete(req.params.id)
    .then((data) => {
      if (!data) return res.status(404).send(notFoundResponse);

      return res.status(200).send(data);
    })
    .catch((err: Error) => res.status(500).send(err));
};

export { addPet, getAllPets, getOnePet, editPet, deletePet };

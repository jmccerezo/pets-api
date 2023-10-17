import express from "express";
import {
  addPet,
  getAllPets,
  getOnePet,
  editPet,
  deletePet,
} from "../controllers/pet.controller";

const router = express.Router();

/**
 * @swagger
 * components:
 *  schemas:
 *     Pet:
 *      type: object
 *      properties:
 *          name:
 *              type: string
 *              example: Hachiko
 *              description: Pet's name
 *          type:
 *              type: string
 *              example: Dog
 *              description: Pet's type
 *          breed:
 *              type: string
 *              example: Akita Inu
 *              description: Pet's breed
 *          gender:
 *              type: string
 *              example: Male
 *              description: Pet's gender
 *          age:
 *              type: integer
 *              example: 11
 *              description: Pet's age
 */

/**
 * @swagger
 * /pets:
 *  post:
 *     tags:
 *       - pets
 *     summary: Add pet
 *     description: Add pet
 *     requestBody:
 *         description: A JSON object containing pet information
 *         content:
 *            application/json:
 *                schema:
 *                   $ref: '#/components/schemas/Pet'
 *                example:
 *                   name: Hachiko
 *                   type: Dog
 *                   breed: Akita Inu
 *                   gender: Male
 *                   age: 11
 *     responses:
 *      200:
 *         description: Success
 *      500:
 *         description: Internal Server Error
 */
router.post("/", addPet);

/**
 * @swagger
 * /pets:
 *  get:
 *     tags:
 *       - pets
 *     summary: Get all pets
 *     description: Get all pets
 *     responses:
 *      200:
 *         description: Success
 *      500:
 *         description: Internal Server Error
 */
router.get("/", getAllPets);

/**
 * @swagger
 * /pets/{id}:
 *  get:
 *     tags:
 *       - pets
 *     summary: Get one pet
 *     description: Get one pet
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Pet id
 *     responses:
 *      200:
 *         description: Success
 *      500:
 *         description: Internal Server Error
 */
router.get("/:id", getOnePet);

/**
 * @swagger
 * /pets/{id}:
 *  put:
 *     tags:
 *       - pets
 *     summary: Edit pet
 *     description: Edit pet
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Pet id
 *     requestBody:
 *          description: A JSON object containing pet information
 *          content:
 *             application/json:
 *                 schema:
 *                    $ref: '#/components/schemas/Pet'
 *                 example:
 *                    name: Hachiko
 *                    type: Dog
 *                    breed: Akita Inu
 *                    gender: Male
 *                    age: 11
 *     responses:
 *      200:
 *          description: Success
 *      500:
 *          description: Internal Server Error
 */
router.put("/:id", editPet);

/**
 * @swagger
 * /pets/{id}:
 *  delete:
 *     tags:
 *       - pets
 *     summary: Delete pet
 *     description: Delete pet
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Pet id
 *     responses:
 *      200:
 *          description: Success
 *      500:
 *          description: Internal Server Error
 */
router.delete("/:id", deletePet);

export default router;

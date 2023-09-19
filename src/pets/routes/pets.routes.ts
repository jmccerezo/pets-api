import express from "express";
import {
  listPets,
  getPet,
  editPet,
  addPet,
  deletePet,
} from "../controllers/pets.controllers";

/**
 * @swagger
 * components:
 *  schemas:
 *     Pet:
 *      type: object
 *      properties:
 *          _id:
 *              type: string
 *              description: Pet's id
 *          name:
 *              type: string
 *              description: Pet's name
 *          type:
 *              type: string
 *              description: Pet's type
 *          breed:
 *              type: string
 *              description: Pet's breed
 *          gender:
 *              type: string
 *              description: Pet's gender
 *          age:
 *              type: integer
 *              description: Pet's age
 *          createdAt:
 *              type: date
 *              description: Create timestamp
 *          updatedAt:
 *              type: date
 *              description: Update timestamp
 *     example:
 *          _id: 650923ce5b355e32b2da6ac7
 *          name: Hachiko
 *          type: Dog
 *          breed: Akita Inu
 *          gender: Male
 *          age: 11
 *          createdAt: 2023-09-19T04:30:06.053+00:00
 *          updatedAt: 2023-09-19T04:30:06.053+00:00
 *
 * /pets:
 *  post:
 *      summary: Add new pet
 *      description: Add new pet
 *      requestBody:
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
 *      responses:
 *      200:
 *          description: Success
 *      500:
 *          description: Internal Server Error
 *
 *  get:
 *     summary: Get all pets
 *     description: Get all pets
 *     responses:
 *      200:
 *         description: Success
 *      500:
 *         description: Internal Server Error
 *
 * /pets/{id}:
 *  get:
 *     summary: Get a single pet
 *     description: Get a single pet
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
 *
 *  put:
 *     summary: Edit pet details
 *     description: Edit pet details
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Pet id
 *     requestBody:
 *       description: A JSON object containing pet information
 *       content:
 *         application/json:
 *           schema:
 *              $ref: '#/components/schemas/Pet'
 *           example:
 *              name: Hachiko
 *              breed: Akita Inu
 *              type: Dog
 *              gender: Male
 *              age: 11
 *     responses:
 *     200:
 *        description: Success
 *     500:
 *       description: Internal Server Error
 *
 *  delete:
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
 *     200:
 *        description: Success
 *     500:
 *       description: Internal Server Error
 */

const router = express.Router();

router.post("/", addPet);

router.get("/", listPets);

router.get("/:id", getPet);

router.put("/:id", editPet);

router.delete("/:id", deletePet);

export default router;

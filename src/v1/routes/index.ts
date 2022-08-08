import express from "express";
import testsController from "../controllers/testsController";

const router = express.Router();

/**
 * @openapi
 * /:
 *  get:
 *      tags:
 *          - Tests
 *      summary: Check if the API is online
 *      description: Test if the routes are working
 *      produces:
 *          -application/json
 *      responses:
 *          '200':
 *              description: A successful response
 *              schema:
 *                  type: object
 *                  properties:
 *                      online:
 *                          type: boolean
 */
router.get("/", testsController.checkConnection);

export default router;
import express from 'express';
import * as coffeeController from '../controllers/coffee_controller';
import * as coffeeLoverController from '../controllers/coffeelover_controller';

export const router = express.Router();
router.get('/coffee', coffeeController.getCoffee);
router.get('/coffeelover', coffeeLoverController.getCoffeeLover)
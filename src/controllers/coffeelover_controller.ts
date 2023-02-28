import { Request, Response} from 'express';
import * as coffeeLoverService from '../services/coffeelover_service';

export const getCoffeeLover = async (req: Request, res: Response) => {
    res.send(coffeeLoverService.getCoffeeLover);    
};
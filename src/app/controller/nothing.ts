import { Request, Response } from 'express';

export const nothing = (req: Request, res: Response) => {
    return res.json({
      response: 'Nada aqui'
    });
}

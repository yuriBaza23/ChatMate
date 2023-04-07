import { Request, Response } from 'express';

export class AppController {
  public get(req: Request, res: Response): void {
    res.status(200).json({ message: 'Hello World!' });
  }
}
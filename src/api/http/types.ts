import {Request, Response} from "express";

export type HttpMethod = (req: Request, res: Response) => Promise<Response>;

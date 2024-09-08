import { Request, Response } from 'express';
import fs from 'fs'

class paramsController{

  public profile(req:Request, res:Response) {
    const profiles = fs.readFileSync('./src/assets/profile.json', { encoding: 'utf8'});
    console.log(profiles)
    return res.json(JSON.parse(profiles));
  }

}

export const paramsCtl = new paramsController();
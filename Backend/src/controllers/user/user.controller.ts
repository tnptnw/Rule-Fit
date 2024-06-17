import { Request, Response } from "express";
import updateUserService from "../../services/user/updateUsername";
import getUserService from "../../services/user/getUsername";
import updateImageService from "../../services/user/updateImage";

interface IUpdateUsername {
  token: string;
  username: string;
}
interface IGetUsername {
    token: string;
}
interface IUpdateImage {
  token: string;
  image: Blob;
}

export const updateUsername = async (req: Request, res: Response) => {
  try {
    console.log("Updating username...");
    const reqBody: IUpdateUsername = req.body;
    const data = await updateUserService.updateUsername(reqBody);
    console.log("Username updated");
    return res.status(200).json({
      success: true,
      data: data,
      error: null,
    });
  } catch (error) {
    console.error("Error updating username:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
};

export const getUsername = async (req: Request, res: Response) => {
    try {
      console.log("Getting username...");
      const reqBody: IGetUsername = req.body;
      const data = await getUserService.getUsername(reqBody);
      console.log("Username retrieved");
      return res.status(200).json({
        success: true,
        data: data,
        error: null,
      });
    } catch (error) {
      console.error("Error getting username:", error);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    }
}

export const updateImage = async (req: Request, res: Response) => {
  try {
    console.log("Updating image...");
    const reqBody: IUpdateImage = req.body;
    const data = await updateImageService.updateImage(reqBody);
    console.log("Image updated");
    return res.status(200).json({
      success: true,
      data: data,
      error: null,
    });
  } catch (error) {
    console.error("Error updating image:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
}



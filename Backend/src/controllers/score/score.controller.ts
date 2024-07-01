import { Request, Response } from "express";
import verifyToken from "../../controllers/auth/verifyToken";
import scoreService from "../../services/score/getScore";

interface IScore {
  parameterId: number;
}
export const getScore = async (req: Request, res: Response) => {
  try {
    console.log("Getting score...");
    const reqBody: IScore = req.body;
    const data = await scoreService.getScore(reqBody);
    console.log("Score retrieved");
    return res.status(200).json({
      success: true,
      data: data,
      error: null,
    });
  } catch (error) {
    console.error("Error getting score:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
};

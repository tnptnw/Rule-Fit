import { Request, Response } from "express";
import suggestService from "../../services/suggest/getSuggest";

interface ISuggest {
  parameterId: number;
}
export const getSuggest = async (req: Request, res: Response) => {
  try {
    console.log("Getting suggest...");
    const reqBody: ISuggest = req.body;
    const data = await suggestService.getSuggest(reqBody);
    console.log("Suggest retrieved");
    return res.status(200).json({
      success: true,
      data: data,
      error: null,
    });
  } catch (error) {
    console.error("Error getting suggest:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
};

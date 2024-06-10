import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import historyService from "../../services/history/getHistory";

interface IHistory {
  token: string;
}

export const getHistory = async (req: Request, res: Response) => {
  try {
    console.log("Getting history...");
    const reqBody: IHistory = req.body;
    const data = await historyService.getHistory(reqBody);
    console.log("History retrieved");
    return res.status(200).json({
      success: true,
      data: data,
      error: null,
    });
  } catch (error) {
    console.error("Error getting history:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
};

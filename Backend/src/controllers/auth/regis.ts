import { PrismaClient, users_gender } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import * as jwt from "jsonwebtoken";

const prisma = new PrismaClient();

interface regisRequest {
  username: string;
  password: string;
  birthyear: number;
  gender: users_gender;
}

const regis = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // Get the data from the request body
    const reqBody: regisRequest = req.body;

    // Check if the input is empty
    if (
      !reqBody.username ||
      !reqBody.password ||
      !reqBody.birthyear ||
      !reqBody.gender
    ) {
      return res.status(400).json({
        success: false,
        data: null,
        error: "Invalid input",
      });
    }

    const alreadyExist = await prisma.users.findFirst({
      where: {
        username: reqBody.username,
      },
    });

    if (alreadyExist) {
      return res.status(400).json({
        success: false,
        data: null,
        error: "Username already exists",
      });
    }

    await prisma.users.create({
      data: {
        username: reqBody.username,
        password: reqBody.password,
        birthyear: reqBody.birthyear,
        gender: reqBody.gender,
      },
    });

    return res.status(200).json({
      success: true,
      data: "User created",
      error: null,
    });
  } catch (error: any) {
    console.error("Error:", error);
    return res.status(500).json({
      success: false,
      data: null,
      error: error.message,
    });
  } finally {
    await prisma.$disconnect();
  }
};

export default regis;

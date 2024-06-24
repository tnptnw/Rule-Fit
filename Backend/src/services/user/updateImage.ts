import { PrismaClient } from "@prisma/client";
import verifyToken from "../../controllers/auth/verifyToken";

class userService {
  async updateImage(token: string, imgURL: string) {
    console.log("geting in service...");
    const prisma = new PrismaClient();
    const userId = verifyToken(token);
    const user = prisma.users.update({
      where: {
        id: userId,
      },
      data: {
        image: imgURL,
      },
    });
    return user;
  }
}
export default new userService();

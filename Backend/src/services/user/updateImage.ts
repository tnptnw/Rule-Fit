import { PrismaClient } from "@prisma/client";
import verifyToken from "../../controllers/auth/verifyToken";

class userService {
    async updateImage(reqBody: any){
        console.log("geting in service...");
        const prisma = new PrismaClient();
        const userId = verifyToken(reqBody.token);
        const user = prisma.users.update({
          where: {
            id: userId
          },
          data: {
            image: reqBody.image
          }
        });
        return user;
    }
}
export default new userService();
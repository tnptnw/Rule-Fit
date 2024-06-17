import { PrismaClient } from "@prisma/client";
import verifyToken from "../../controllers/auth/verifyToken";

class userService {
    async updateUsername(reqBody: any){
        console.log("geting in service...");
        const prisma = new PrismaClient();
        const userId = verifyToken(reqBody.token);
        const update = prisma.users.update({
          where: {
            id: userId
          },
          data: {
            username: reqBody.username
          }
        });
        return update;
    }
}

export default new userService();
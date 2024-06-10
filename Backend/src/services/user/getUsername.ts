import { PrismaClient } from "@prisma/client";
import verifyToken from "../../controllers/auth/verifyToken";

class userService {
    async getUsername(reqBody: any){
        console.log("geting in service...");
        const prisma = new PrismaClient();
        const userId = verifyToken(reqBody.token);
        const user = prisma.users.findUnique({
          where: {
            id: userId
          }
        });
        return user;
    }
}

export default new userService();
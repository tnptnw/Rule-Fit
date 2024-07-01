import verifyToken from "../../controllers/auth/verifyToken";
import { prisma } from "../../index";

class userService {
    async getUsername(reqBody: any){
        console.log("geting in service...");
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
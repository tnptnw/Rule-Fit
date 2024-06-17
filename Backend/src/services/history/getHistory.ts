import { PrismaClient } from "@prisma/client";
import verifyToken from "../../controllers/auth/verifyToken";

class historyService {
    async getHistory(reqBody: any){
        console.log("geting in service...");
        const prisma = new PrismaClient();
        const userId = verifyToken(reqBody.token);
        const get = prisma.parameter.findMany({
          where: {
            userId: userId
          }
        });
        return get;
    }
}

export default new historyService();
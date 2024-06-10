import {PrismaClient} from '@prisma/client';
import verifyToken from '../../controllers/auth/verifyToken';

class parameterService {
    async createParameter(reqBody: any){
        console.log("geting in service...");
        const prisma = new PrismaClient();
        const currentDate = new Date();
        const userId = verifyToken(reqBody.token);
        const create = prisma.parameter.create({
          data: {
            userId: userId,
            date: currentDate,
            height: reqBody.height,
            weight: reqBody.weight,
            sleepStart: reqBody.sleepStart,
            sleepEnd: reqBody.sleepEnd,
            calorie: reqBody.calorie,
            protein: reqBody.protein,
            cabohydrate: reqBody.cabohydrate,
            fat: reqBody.fat,
          },
        });
        return create;
    }
}

export default new parameterService();
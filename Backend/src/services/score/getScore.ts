import { prisma } from '../../index';
class scoreService {
    async getScore(reqBody: any) {
        const parameterId = reqBody.parameterId;
        const data = await prisma.parameter.findUnique({
            where: {
                parameterId: parameterId,
            },
            select:{
                scoreId: true,
            }
        });
        const scoreData = await prisma.score.findUnique({
            where: {
                scoreId: data?.scoreId,
            },
        });
        return scoreData;
    }
}

export default new scoreService();
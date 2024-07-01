import { prisma } from "../..";
class suggestService {
  async getSuggest(reqBody: any) {
    const parameterId = reqBody.parameterId;
    const data = await prisma.parameter.findUnique({
      where: {
        parameterId: parameterId,
      },
      select: {
        scoreId: true,
      },
    });
    const suggestData = await prisma.suggest.findUnique({
      where: {
        suggestId: data?.scoreId,
      },
    });
    return suggestData;
  }
}

export default new suggestService();

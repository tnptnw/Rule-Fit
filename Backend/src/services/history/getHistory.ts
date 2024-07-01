import verifyToken from '../../controllers/auth/verifyToken';
import { prisma } from '../../index';

class historyService {
	async getHistory(reqBody: any) {
		console.log('geting in service...');
		const userId = verifyToken(reqBody.token);
		const get = prisma.parameter.findMany({
			where: {
				userId: userId,
			},
			include: {
				score: true,
			},
		});
		return get;
	}
}

export default new historyService();

import verifyToken from '../../controllers/auth/verifyToken';
import { prisma } from '../../index';

class userService {
	async updateUsername(reqBody: any) {
		console.log('geting in service...');
		const userId = verifyToken(reqBody.token);
		const update = prisma.users.update({
			where: {
				id: userId,
			},
			data: {
				username: reqBody.username,
			},
		});
		return update;
	}
}

export default new userService();

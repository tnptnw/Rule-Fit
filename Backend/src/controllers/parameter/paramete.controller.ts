import { Request, Response } from 'express';
import parameterService from '../../services/parameter/createParameter';
import { Decimal } from '../../../prisma/client/runtime/library';

interface IParameter {
	token: string;
	height: Decimal;
	weight: Decimal;
	sleepStart: Date;
	sleepEnd: Date;
	calorie: number;
	protein: number;
	carbohydrate: number;
	fat: number;
}
export const createParameter = async (req: Request, res: Response) => {
	try {
		console.log('Creating parameter...');
		const reqBody: IParameter = req.body;
		const data = await parameterService.createParameter(reqBody);
		console.log('Parameter created');
		return res.status(200).json({
			success: true,
			data: data,
			error: null,
		});
	} catch (error) {
		console.error('Error creating parameter:', error);
		res.status(500).json({
			success: false,
			error: 'Internal Server Error',
		});
	}
};

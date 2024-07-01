import verifyToken from '../../controllers/auth/verifyToken';
import { prisma } from '../../index';
//weight (kg)
//height (cm)
//calorie (kcal)
//protein (g)
//carbohydrate (g)
//fat (g)

class parameterService {
	async createParameter(reqBody: any) {
		console.log('geting in service...');
		const currentDate = new Date();
		const userId = verifyToken(reqBody.token);

		// Get age
		const user = await prisma.users.findFirst({
			where: {
				id: userId,
			},
		});
		if (!user) {
			throw new Error('User not found');
		}
		const age = currentDate.getFullYear() - user.birthyear;
		const gender = user.gender;
		console.log('age: ', age);
		console.log('gender', gender);

		// Calculate BMI
		const Mheight = reqBody.height / 100;
		const bmi = reqBody.weight / (Mheight * Mheight);
		console.log('bmi: ', bmi);

		// Calculate BMI score
		let bmiScore;
		let bmiSuggest = '';
		if (bmi < 18.5) {
			bmiScore = 0; // Very underweight
			bmiSuggest =
				'Your BMI indicates that you are underweight. It is important to consume a balanced diet with more calories. Focus on nutrient-dense foods like whole grains, lean proteins, nuts, seeds, and healthy fats. Consider consulting with a healthcare provider or nutritionist to create a plan tailored to your needs.';
		} else if (bmi >= 18.5 && bmi <= 24.9) {
			bmiScore = 34; // Healthy weight range
			bmiSuggest =
				'Your BMI is within the healthy weight range. Maintain your current lifestyle by continuing to eat a balanced diet and engaging in regular physical activity. Keep monitoring your health and making positive choices.';
		} else if (bmi >= 25.0 && bmi <= 29.9) {
			bmiScore = 22; // Overweight
			bmiSuggest =
				'Your BMI indicates that you are overweight. To improve your health, consider adopting a balanced diet with appropriate portion sizes and engaging in regular physical activity. Aim for at least 150 minutes of moderate-intensity exercise per week. Small, sustainable changes can make a significant difference.';
		} else {
			bmiScore = 11; // Obese
			bmiSuggest =
				'Your BMI indicates that you are in the obese category. It is important to address this to reduce your risk of related health issues. Focus on a balanced diet with a calorie deficit and increase your physical activity. Consider seeking support from a healthcare provider, dietitian, or a weight loss program to create a personalized plan.';
		}
		console.log('bmiScore: ', bmiScore);
		console.log('bmiSuggest: ', bmiSuggest);

		// Extract hours from sleepStart and sleepEnd
		const sleepStart = new Date(reqBody.sleepStart);
		const sleepEnd = new Date(reqBody.sleepEnd);

		// Extract the hours
		const sleepStartHour = sleepStart.getHours();
		const sleepEndHour = sleepEnd.getHours();

		console.log('sleepStartHour: ', sleepStartHour);
		console.log('sleepEndHour: ', sleepEndHour);

		// Calculate sleep duration in hours
		let sleepDuration = sleepEndHour - sleepStartHour;
		console.log('sleepDuration: ', sleepDuration);
		if (sleepDuration < 0) {
			sleepDuration += 24; // Adjust for overnight sleep
		}
		console.log('sleepDuration: ', sleepDuration);

		// Define optimal sleep duration ranges for different age groups
		const optimalSleep = {
			'1-2': [11, 14],
			'3-5': [10, 13],
			'6-12': [9, 12],
			'13-18': [8, 10],
			'19+': [7, 9],
		};

		// Determine optimal sleep range for the user's age
		let optimalRange;
		if (age >= 1 && age <= 2) {
			optimalRange = optimalSleep['1-2'];
		} else if (age >= 3 && age <= 5) {
			optimalRange = optimalSleep['3-5'];
		} else if (age >= 6 && age <= 12) {
			optimalRange = optimalSleep['6-12'];
		} else if (age >= 13 && age <= 18) {
			optimalRange = optimalSleep['13-18'];
		} else if (age >= 19) {
			optimalRange = optimalSleep['19+'];
		} else {
			optimalRange = [0, 24]; // Default to a full day if no range matches
		}
		console.log('optimalRange: ', optimalRange);

		// Calculate sleep duration score based on the optimal range
		let sleepScore;
		let sleepSuggest;
		if (
			sleepDuration >= optimalRange[0] &&
			sleepDuration <= optimalRange[1]
		) {
			sleepScore = 34;
			sleepSuggest =
				'Your sleep duration is optimal. Keep maintaining your current sleep habits for better health.';
		} else {
			// Calculate the score based on how close the sleep duration is to the optimal range
			const minDifference = Math.min(
				Math.abs(sleepDuration - optimalRange[0]),
				Math.abs(sleepDuration - optimalRange[1])
			);
			sleepScore = Math.max(0, 34 - minDifference * 3.4); // Deduct 3.4 points for each hour difference

			if (sleepDuration < optimalRange[0]) {
				sleepSuggest = `You are getting less sleep than recommended. Aim to increase your sleep duration by at least ${
					optimalRange[0] - sleepDuration
				} hour(s) to meet the optimal range of ${optimalRange[0]} to ${
					optimalRange[1]
				} hours.`;
			} else {
				sleepSuggest = `You are getting more sleep than recommended. Aim to reduce your sleep duration by at least ${
					sleepDuration - optimalRange[1]
				} hour(s) to meet the optimal range of ${optimalRange[0]} to ${
					optimalRange[1]
				} hours.`;
			}
		}
		console.log('sleepScore: ', sleepScore);
		console.log('sleepSuggest: ', sleepSuggest);

		// Calculate calorie score
		const recommendedCalories = gender === 'male' ? 2500 : 2000;
		let calorieScore =
			8 -
			(Math.abs(reqBody.calorie - recommendedCalories) /
				recommendedCalories) *
				8;
		calorieScore = Math.max(0, Math.min(8, calorieScore));
		console.log('calorieScore: ', calorieScore);

		// Generate calorie suggestion
		let calorieSuggest;
		if (reqBody.calorie < recommendedCalories) {
			calorieSuggest = `You are consuming fewer calories than recommended. Aim to increase your daily intake by ${
				recommendedCalories - reqBody.calorie
			} kcal to reach the recommended ${recommendedCalories} kcal.`;
		} else if (reqBody.calorie > recommendedCalories) {
			calorieSuggest = `You are consuming more calories than recommended. Aim to decrease your daily intake by ${
				reqBody.calorie - recommendedCalories
			} kcal to reach the recommended ${recommendedCalories} kcal.`;
		} else {
			calorieSuggest =
				'Your calorie intake is optimal. Keep maintaining your current eating habits.';
		}
		console.log('calorieSuggest: ', calorieSuggest);

    // Calculate protein score
    const recommendedProtein = 1 * reqBody.weight;
    let proteinScore =
      8 -
      (Math.abs(reqBody.protein - recommendedProtein) / recommendedProtein) * 8;
    proteinScore = Math.max(0, Math.min(8, proteinScore));
    console.log("proteinScore: ", proteinScore);

		// Generate protein suggestion
		let proteinSuggest;
		if (reqBody.protein < recommendedProtein) {
			proteinSuggest = `You are consuming less protein than recommended. Aim to increase your daily intake by ${
				recommendedProtein - reqBody.protein
			} g to reach the recommended ${recommendedProtein} g.`;
		} else if (reqBody.protein > recommendedProtein) {
			proteinSuggest = `You are consuming more protein than recommended. Aim to decrease your daily intake by ${
				reqBody.protein - recommendedProtein
			} g to reach the recommended ${recommendedProtein} g.`;
		} else {
			proteinSuggest =
				'Your protein intake is optimal. Keep maintaining your current eating habits.';
		}
		console.log('proteinSuggest: ', proteinSuggest);

		// Calculate carbohydrate score
		const recommendedCarbs = (recommendedCalories * 0.55) / 4; // 55% of calories from carbs
		let carbScore =
			8 -
			(Math.abs(reqBody.carbohydrate - recommendedCarbs) /
				recommendedCarbs) *
				8;
		carbScore = Math.max(0, Math.min(8, carbScore));
		console.log('carbScore: ', carbScore);

		// Generate carbohydrate suggestion
		let carbSuggest;
		if (reqBody.carbohydrate < recommendedCarbs) {
			carbSuggest = `You are consuming fewer carbohydrates than recommended. Aim to increase your daily intake by ${
				recommendedCarbs - reqBody.carbohydrate
			} g to reach the recommended ${recommendedCarbs} g.`;
		} else if (reqBody.carbohydrate > recommendedCarbs) {
			carbSuggest = `You are consuming more carbohydrates than recommended. Aim to decrease your daily intake by ${
				reqBody.carbohydrate - recommendedCarbs
			} g to reach the recommended ${recommendedCarbs} g.`;
		} else {
			carbSuggest =
				'Your carbohydrate intake is optimal. Keep maintaining your current eating habits.';
		}
		console.log('carbSuggest: ', carbSuggest);

		// Calculate fat score
		const recommendedFat = (recommendedCalories * 0.3) / 9; // 30% of calories from fat
		let fatScore =
			8 - (Math.abs(reqBody.fat - recommendedFat) / recommendedFat) * 8;
		fatScore = Math.max(0, Math.min(8, fatScore));
		console.log('fatScore: ', fatScore);

		// Generate fat suggestion
		let fatSuggest;
		if (reqBody.fat < recommendedFat) {
			fatSuggest = `You are consuming less fat than recommended. Aim to increase your daily intake by ${
				recommendedFat - reqBody.fat
			} g to reach the recommended ${recommendedFat} g.`;
		} else if (reqBody.fat > recommendedFat) {
			fatSuggest = `You are consuming more fat than recommended. Aim to decrease your daily intake by ${
				reqBody.fat - recommendedFat
			} g to reach the recommended ${recommendedFat} g.`;
		} else {
			fatSuggest =
				'Your fat intake is optimal. Keep maintaining your current eating habits.';
		}
		console.log('fatSuggest: ', fatSuggest);

		// Calculate total score
		const totalScore =
			bmiScore +
			sleepScore +
			calorieScore +
			proteinScore +
			carbScore +
			fatScore;
		console.log('totalScore: ', totalScore);

		let scoreName = '';
		if (totalScore >= 0 && totalScore <= 34) {
			scoreName = 'Very Bad';
		} else if (totalScore >= 35 && totalScore <= 61) {
			scoreName = 'Bad';
		} else if (totalScore >= 62 && totalScore <= 78) {
			scoreName = 'Moderate';
		} else if (totalScore >= 79 && totalScore <= 89) {
			scoreName = 'Good';
		} else if (totalScore >= 90 && totalScore <= 100) {
			scoreName = 'Very Good';
		}

		//suggest
		const createSuggest = await prisma.suggest.create({
			data: {
				BMISuggest: bmiSuggest,
				sleepSuggest: sleepSuggest,
				calorieSuggest: calorieSuggest,
				proteinSuggest: proteinSuggest,
				cabohydrateSuggest: carbSuggest,
				fatSuggest: fatSuggest,
			},
			select: { suggestId: true },
		});

		const createScore = await prisma.score.create({
			data: {
				totalScore: totalScore,
				BMIScore: bmiScore,
				sleepScore: sleepScore,
				calorieScore: calorieScore,
				proteinScore: proteinScore,
				cabohydrateScore: carbScore,
				fatScore: fatScore,
				name: scoreName,
			},
			select: { scoreId: true },
		});

		const create = await prisma.parameter.create({
			data: {
				userId: userId,
				date: currentDate,
				height: reqBody.height,
				weight: reqBody.weight,
				sleepStart: reqBody.sleepStart,
				sleepEnd: reqBody.sleepEnd,
				calorie: reqBody.calorie,
				protein: reqBody.protein,
				cabohydrate: reqBody.carbohydrate,
				fat: reqBody.fat,
				scoreId: createScore.scoreId,
				suggestId: createSuggest.suggestId,
			},
			select: { parameterId: true },
		});

		const data = await prisma.parameter.findUnique({
			where: {
				parameterId: create.parameterId,
			},
			include: {
				score: true,
				suggest: true,
			},
		});
		return data;
	}
}

export default new parameterService();

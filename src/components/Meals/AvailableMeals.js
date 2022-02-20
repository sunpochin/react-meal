import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import { useEffect, useState } from 'react';

const DUMMY_MEALS = [
	{
		id: 'm1',
		name: '壽司',
		description: '新鮮魚類',
		price: 22.99,
	},
	{
		id: 'm2',
		name: '炸肉排',
		description: '德國名產',
		price: 16.5,
	},
	{
		id: 'm3',
		name: '大麥克',
		description: '美式',
		price: 12.99,
	},
	{
		id: 'm4',
		name: '沙拉',
		description: 'Healthy...and green...',
		price: 18.99,
	},
];

const AvailableMeals = () => {
	const [meals, setMeals] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [httpError, setHttpError] = useState(null);

	useEffect(() => {
		// const fetchMeals = async () => {
		// 	const response = await fetch(
		// 		'https://xxx.asia-southeast1.firebasedatabase.app/Meals.json'
		// 	);
		// 	const responseData = await response.json();
		// 	console.log('responseData: ', responseData);

		// 	// if (!response.ok) {
		// 	// 	throw new Error('Something went wrong!');
		// 	// }

		// 	const loadedMeals = [];
		// 	for (const key in responseData) {
		// 		loadedMeals.push({
		// 			id: key,
		// 			name: responseData[key].name,
		// 			description: responseData[key].description,
		// 			price: responseData[key].price,
		// 		});
		// 	}
		// 	setMeals(loadedMeals);
		// 	setIsLoading(false);
		// };
		//

		// try {
		//   fetchMeals();
		// } catch (error) {
		//   setIsLoading(false);
		//   setHttpError(error.message);
		// }
		//
		// fetchMeals().catch((error) => {
		// 	setIsLoading(false);
		// 	setHttpError(error.message);
		// });
		setIsLoading(false);
	}, []);

	if (isLoading) {
		return (
			<section className={classes.MealsLoading}>
				<p>Loading...</p>
			</section>
		);
	}

	if (httpError) {
		return (
			<section className={classes.MealsError}>
				<p>{httpError}</p>
			</section>
		);
	}

	// const mealsList = meals.map((meal) => (
	// 	<MealItem
	// 		key={meal.id}
	// 		id={meal.id}
	// 		name={meal.name}
	// 		description={meal.description}
	// 		price={meal.price}
	// 	/>
	// ));

	const mealsList = DUMMY_MEALS.map((meal) => (
		<MealItem
			key={meal.id}
			id={meal.id}
			name={meal.name}
			description={meal.description}
			price={meal.price}
		/>
	));

	return (
		<section className={classes.meals}>
			<Card>
				<ul>{mealsList}</ul>
			</Card>
		</section>
	);
};

export default AvailableMeals;

import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Bread',
    description: 'Fresh',
    price: 30,
  },
  {
    id: 'm2',
    name: 'Chocolate',
    description: 'Chocolate',
    price: 40,
  },
  {
    id: 'm3',
    name: 'Burger',
    description: 'Meat',
    price: 120,
  },
  {
    id: 'm4',
    name: 'Salad',
    description: 'Healthy',
    price: 50,
  },
];

const AvailableMeals = () => {
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

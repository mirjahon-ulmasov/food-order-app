import Card from '../UI/Card';
import classes from './AvailableMeals.module.css';
import MeailItem from './MealItem/MealItem';
import axios from 'axios';
import { useEffect, useState } from 'react';

const api = axios.create({
  baseURL: 'https://react-http-ba2b5-default-rtdb.firebaseio.com/meals.json',
});

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    api
      .get('/')
      .then(response => {
        const loadedMeals = [];
        const responseData = response.data;

        for (const key in responseData) {
          loadedMeals.push({
            id: key,
            name: responseData[key].name,
            description: responseData[key].description,
            price: responseData[key].price,
          });
        }
        setMeals(loadedMeals);
        setIsLoading(false);
      })
      .catch(error => {
        setHttpError(error.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <section className={classes.loading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes.error}>
        <p>{httpError}</p>
      </section>
    );
  }

  const mealList = meals.map(meal => <MeailItem key={meal.id} obj={meal} />);

  return <Card className={classes.meals}>{<ul>{mealList}</ul>}</Card>;
};

export default AvailableMeals;

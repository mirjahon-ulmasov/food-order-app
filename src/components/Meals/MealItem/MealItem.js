import { useContext } from 'react';

import MealItemForm from './MealItemForm';
import CartContext from '../../../store/cart-context';
import classes from './MealItem.module.css';

const MeailItem = props => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = amount => {
    cartCtx.addItem({
      id: props.obj.id,
      name: props.obj.name,
      price: props.obj.price,
      amount: amount,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.obj.name}</h3>
        <div className={classes.description}>{props.obj.description}</div>
        <div className={classes.price}>${props.obj.price.toFixed(2)}</div>
      </div>
      <MealItemForm onAddToCart={addToCartHandler} />
    </li>
  );
};

export default MeailItem;

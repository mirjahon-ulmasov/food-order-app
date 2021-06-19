import React, { Fragment } from 'react';

import mealsImg from '../../assets/meal2.jpeg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = props => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton
          onClick={props.onShowCart}
          className={classes['cart-button']}
        >
          Cart
        </HeaderCartButton>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImg} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;

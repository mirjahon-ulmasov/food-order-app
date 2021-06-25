import useForm from '../../hooks/use-form';
import classes from './Checkout.module.css';

const checkValidation = value => value.trim() !== '';

const Checkout = props => {
  let formIsValid = false;
  const {
    value: nameValue,
    inputIsValid: nameIsValid,
    hasError: nameHasError,
    inputChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: nameReset,
    errorStyle: nameErrorStyle,
  } = useForm(checkValidation);

  const {
    value: streetValue,
    inputIsValid: streetIsValid,
    hasError: streetHasError,
    inputChangeHandler: streetChangeHandler,
    inputBlurHandler: streetBlurHandler,
    reset: streetReset,
    errorStyle: streetErrorStyle,
  } = useForm(checkValidation);

  const {
    value: postalValue,
    inputIsValid: postalIsValid,
    hasError: postalHasError,
    inputChangeHandler: postalChangeHandler,
    inputBlurHandler: postalBlurHandler,
    reset: postalReset,
    errorStyle: postalErrorStyle,
  } = useForm(value => {
    return value.trim().length === 5;
  });

  const {
    value: cityValue,
    inputIsValid: cityIsValid,
    hasError: cityHasError,
    inputChangeHandler: cityChangeHandler,
    inputBlurHandler: cityBlurHandler,
    reset: cityReset,
    errorStyle: cityErrorStyle,
  } = useForm(checkValidation);

  if (nameIsValid && streetIsValid && postalIsValid && cityIsValid) {
    formIsValid = true;
  }

  const confirmHandler = event => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      name: nameValue,
      street: streetValue,
      postal: postalValue,
      city: cityValue,
    });

    nameReset();
    streetReset();
    postalReset();
    cityReset();
  };

  return (
    <form onSubmit={confirmHandler} className={classes.form}>
      <div className={nameErrorStyle}>
        <label htmlFor="name">Your Name</label>
        <div className={classes.input}>
          <input
            type="text"
            id="name"
            value={nameValue}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
          />
          {nameHasError && <p>Invalid Name!</p>}
        </div>
      </div>
      <div className={streetErrorStyle}>
        <label htmlFor="street">Street</label>
        <div className={classes.input}>
          <input
            type="text"
            id="street"
            value={streetValue}
            onChange={streetChangeHandler}
            onBlur={streetBlurHandler}
          />
          {streetHasError && <p>Invalid Street Address!</p>}
        </div>
      </div>
      <div className={postalErrorStyle}>
        <label htmlFor="postal">Postal Code</label>
        <div className={classes.input}>
          <input
            type="text"
            id="postal"
            value={postalValue}
            onChange={postalChangeHandler}
            onBlur={postalBlurHandler}
          />
          {postalHasError && <p>Invalid Postal Code!</p>}
        </div>
      </div>
      <div className={cityErrorStyle}>
        <label htmlFor="city">City</label>
        <div className={classes.input}>
          <input
            type="text"
            id="city"
            value={cityValue}
            onChange={cityChangeHandler}
            onBlur={cityBlurHandler}
          />
          {cityHasError && <p>Invalid City Address!</p>}
        </div>
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button
          disabled={!formIsValid}
          type="submit"
          className={classes.submit}
        >
          Confirm
        </button>
      </div>
    </form>
  );
};

export default Checkout;

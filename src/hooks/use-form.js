import classes from '../components/Cart/Checkout.module.css';
import { useReducer } from 'react';

const initialInputState = {
  value: '',
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  if (action.type === 'INPUT') {
    return { value: action.val, isTouched: state.isTouched };
  }
  if (action.type === 'BLUR') {
    return { value: state.value, isTouched: true };
  }
  if (action.type === 'RESET') {
    return initialInputState;
  }
};
const useForm = validation => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const inputIsValid = validation(inputState.value);
  const hasError = !inputIsValid && inputState.isTouched;

  const inputChangeHandler = event => {
    dispatch({ type: 'INPUT', val: event.target.value });
  };

  const inputBlurHandler = () => {
    dispatch({ type: 'BLUR' });
  };

  const reset = () => {
    dispatch({ type: 'RESET' });
  };

  const errorStyle = hasError
    ? `${classes.control} ${classes.invalid}`
    : classes.control;

  return {
    value: inputState.value,
    inputIsValid,
    hasError,
    inputChangeHandler,
    inputBlurHandler,
    reset,
    errorStyle,
  };
};

export default useForm;

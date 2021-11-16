const INIT_STATE = {
  valueNameAndSurname: '',
  valueEmail: '',
  valueMsg: '',
  valueDate: '',
}

export const checkTheDate = (state = INIT_STATE) => {
  const currDate = new Date();
  const currYear = String(currDate.getFullYear());
  const currMonth = String((currDate.getMonth() + 1));
  const currDay = String(currDate.getDate());
  const fullDate = `${currYear}-${currMonth}-${currDay}`;

  if (state.valueDate < fullDate) return false;

  return true;
};

export const checkTheEmail = (state = INIT_STATE) => {
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(state.valueEmail)) {
    return false;
  };
  return true;
};

export const checkTheNameAndSurname = (state = INIT_STATE) => {
  if (!state.valueNameAndSurname) {
    return false;
  };
  return true;
}

export const checkTheMsg = (state = INIT_STATE) => {
  if (!state.valueMsg) {
    return false;
  };
  return true;
}
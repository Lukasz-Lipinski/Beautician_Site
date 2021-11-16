const INIT_STATE = {
  valueNameAndSurname: '',
  valueEmail: '',
  valueMsg: '',
  valueDate: '',
  emailIsRequired: false,
  nameAndSurnameIsRequired: false,
  msgIsRequired: false,
  dateIsRequired: false
}

export const checkTheDate = (state = INIT_STATE) => {
  const currDate = new Date();
  const currYear = String(currDate.getFullYear());
  const currMonth = String((currDate.getMonth() + 1));
  const currDay = String(currDate.getDate());
  const fullDate = `${currYear}-${currMonth}-${currDay}`;

  if (state.valueDate < fullDate) {
    console.log("wybrany dzień już minął");
  };
};

export const checkTheValue = (state = INIT_STATE) => {
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(state.valueEmail)) {
    console.log("error email");
  };

  if (!state.valueMsg) {
    console.log('error msg');
  };

  if (!state.valueNameAndSurname) {
    console.log('error valueNameAndSurname');
  };
}
// Function to validate email
export const validateEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return Boolean(re.test(email));
};

// Function to check wheather the 'e' is number key event or not based on 'isNumber' key
export const IsNumberKey = (e, isNumber) => {
  if (isNumber) {
    if (e.target.value.length <= 10) {
      if (!(e.which >= 48 && e.which <= 57)) e.preventDefault();
    }
  }
};

// Function to check wheather the 'e' is number key event and is down or not.
export const IsNumberKeyDown = (e, isNumber) => {
  if (isNumber) {
    if (e.target.value.length <= 10) {
      if (e.which === 38 || e.which === 40) e.preventDefault();
    }
  }
};
// Function to check wheather the 'e' is text key event or not.
export const IsTextKeyDown = (event, isOnlyText) => {
  const inputValue = event.which;

  if (isOnlyText) {
    if (
      !(
        (inputValue >= 65 && inputValue <= 90) ||
        (inputValue >= 97 && inputValue <= 122)
      ) &&
      inputValue !== 32 &&
      inputValue !== 0
    ) {
      event.preventDefault();
    }
  }
};

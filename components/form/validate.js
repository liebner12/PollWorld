const validateField = (validators, value, valueBefore) => {
  let error = "";
  validators.forEach((validator) => {
    const validationError = validator(value, valueBefore);
    if (validationError) {
      error = validationError;
    }
  });
  return error;
};

export const validateFields = (fields, values) => {
  const errors = {};
  const fieldKeys = Object.keys(fields);
  fieldKeys.forEach((key) => {
    const field = fields[key];
    const validators = field.validate;
    const value = values[key];
    let registerVal = "";
    if (key == "secondPassword") {
      registerVal = values.password;
    }
    if (validators && validators.length > 0) {
      const error = validateField(validators, value, registerVal);
      if (error) {
        errors[key] = error;
      }
    }
  });

  return errors;
};

export const hasValidationError = (errors) => {
  return Object.values(errors).find((error) => error.length > 0);
};

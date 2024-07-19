const validateReferral = (data) => {
  const errors = {};

  // Check for required fields
  if (!data.name) {
    errors.name = "Name is required";
  }

  if (!data.email) {
    errors.email = "Email is required";
  } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(data.email)) {
    errors.email = "Invalid email format";
  }

  if (!data.referralCode) {
    errors.referralCode = "Referral code is required";
  }

  if (!data.message) {
    errors.message = "Message is required";
  }

  // Check if there are any errors
  const isValid = Object.keys(errors).length === 0;

  return { isValid, errors };
};

module.exports = {
  validateReferral,
};

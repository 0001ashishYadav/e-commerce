export const discountedPrice = (price, discount) => {
  return price - (price * discount) / 100;
};

export const paiseToRupee = (paise) => {
  return paise / 100;
};

export const maskLastFourDigits = (cardNumber: string) => {
  if (typeof cardNumber !== 'string') {
    return 'Invalid card number';
  }

  const lastFourDigits = cardNumber.slice(-4);
  const maskedNumber = '*'.repeat(4) + lastFourDigits;

  return maskedNumber;
};

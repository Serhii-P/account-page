export const maskCreditCard = (cardNumber: string): string => {
  if (typeof cardNumber !== "string") {
    return "Invalid card number";
  }

  const visibleDigits = 4;
  const maskedSection = cardNumber
    .slice(visibleDigits, -visibleDigits)
    .replace(/\d/g, "•");
  const maskedSectionGroups = maskedSection.match(/.{1,4}/g);
  const formattedMaskedSection = maskedSectionGroups
    ? maskedSectionGroups.join(" ")
    : maskedSection;
  const formattedCardNumber =
    cardNumber.slice(0, visibleDigits) +
    " " +
    formattedMaskedSection +
    " " +
    cardNumber.slice(-visibleDigits);
  return formattedCardNumber;
};

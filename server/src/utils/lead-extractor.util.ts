export const extractLeadFromMessage = (message: string) => {

  const phoneRegex = /(\+?\d{10,13})/;

  const phoneMatch = message.match(phoneRegex);

  if (!phoneMatch) return null;

  const phone = phoneMatch[0];

  return {
    phone
  };

};
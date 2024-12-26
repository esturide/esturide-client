import { isNumeric } from '@libs/numeric';

export const validateCard = (
  number: string,
  property: string,
  exp: string,
  cvc: string,
) => {
  return (
    number.length == 16 &&
    isNumeric(number) &&
    property.length >= 5 &&
    cvc.length == 3
  );
};

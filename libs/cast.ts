export function stringToInteger(str: string): number {
  const parsed = parseInt(str, 10);

  if (isNaN(parsed)) {
    throw new Error(`Cannot convert to "${str}" an integer.`);
  }

  return parsed;
}
export function stringToNumber(str: string): [boolean, number] {
  const number = parseInt(str, 10);

  if (isNaN(number)) {
    return [false, 0];
  }

  return [true, number];
}

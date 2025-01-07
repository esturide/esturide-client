export function timing(milliseconds: number) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

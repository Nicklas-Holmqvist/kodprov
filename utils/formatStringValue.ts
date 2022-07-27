/**
 * Format a string with string.replace
 * @param value Value to format
 * @param lookUp Value to look for
 * @param replace Value that will replace lookUp
 * @returns formated value
 */
export const formatStringValue = (
  value: string,
  lookUp: string,
  replace: string
) => {
  return value.replace(lookUp, replace);
};

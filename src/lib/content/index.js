import { indiaContent } from './india';
import { saudiContent } from './saudi';

export { indiaContent, saudiContent };

export const defaultCountryContent = {
  IN: indiaContent,
  SA: saudiContent,
};

export function getDefaultContentForCountry(countryCode = 'IN') {
  const code = (countryCode || 'IN').toUpperCase();
  return defaultCountryContent[code] || indiaContent;
}

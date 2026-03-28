import { clientLogger } from '../logger';

type FormatParams = {
  date: Date | null;
  options: Intl.DateTimeFormatOptions;
};

export const formatDate = ({ date, options }: FormatParams): string => {
  if (date === null) {
    clientLogger.error('formatDate: date is null');
    return '';
  }
  return date.toLocaleDateString('en-US', options);
};

export const formatTime = ({ date, options }: FormatParams): string => {
  if (date === null) {
    clientLogger.error('formatTime: date is null');
    return '';
  }
  return date.toLocaleTimeString('en-US', options);
};

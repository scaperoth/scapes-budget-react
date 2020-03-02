const moment = require('moment');

export const getCurrentDate = (format = 'YYYY-MM-DD') =>
  moment().format(format);

'use strict';

const countTypesInArray = arr => {
  const res = {};

  for (const e of arr) {
    const type = typeof e;
    res[type] = res[type] ? res[type] + 1 : 1;
  }

  return res;
};

module.exports = { countTypesInArray };

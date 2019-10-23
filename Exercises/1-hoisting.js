'use strict';

const fn = obj => {
  inc(obj);

  function inc(o) {
    o.x++;
  }
};

module.exports = { fn };

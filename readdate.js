'use strict';

let units = { years: 31536000000, months: 2628000000, days: 86400000, hours: 3600000, minutes: 60000, seconds: 1000, milliseconds: 1 };
let ks = 'years,months,days,hours,minutes,seconds,milliseconds'.split(',');
let sanitize = (u,x) => `${x} ${x < 2 ? u.slice(0, -1) : u}`;

module.exports = convert;

function convert(x, u='years', buf=[]) {
  if (u in units) {
    let n = x/units[u];
    let left = ~~n;
    let right = (x - (units[u]*left));
    left && buf.push(sanitize(u, left));
    if(right)
      return convert(right, ks[ks.indexOf(u)+1], buf);
  }
  return buf.join(', ');
}

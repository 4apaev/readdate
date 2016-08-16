'use strict';

const Units = { year: 31536000000, month: 2628000000, day: 86400000, hour: 3600000, minute: 60000, second: 1000, millisecond: 1 }
const keys = Object.keys(Units).sort((a,b) => Units[b] - Units[a]);

const sanitize = (unit, value) => `${ value } ${ unit }${ value > 1 ? 's' : '' }`;
const round = (unit, time) => {
  let head = ~~(time/unit);
  let tail = time - (unit * head);
  return { head, tail }
}

module.exports = (x, ...units) => convert(x, [], ...(units.length ? units : keys));

function convert(time, buf, ...units) {
    let [ unit, ...rest ] = units;
    let { head, tail } = round(Units[unit], time);
    head && buf.push(sanitize(unit, head));
    return tail ? convert(tail, buf, ...rest) : buf.join(', ');
  }


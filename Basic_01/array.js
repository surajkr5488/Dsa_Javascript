const num = [
  152,
  122,
  12,
  122,
  111,
  111,
  111,
  11125,
  [22, 22, 2],
  [22322, 11, 2228, 225],
  3,
];
const data = num.map((datats) => {
  if (Array.isArray(datats)) {
    return datats.map((related) => {
      if (Array.isArray(related)) {
        return related.map((mapsss) => mapsss * 2);
      } else {
        return related * 2;
      }
    });
  } else {
    return datats;
  }
});

console.log(data.toString());
console.log(data.length);

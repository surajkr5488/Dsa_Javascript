// const num = [
//   152,
//   122,
//   12,
//   122,
//   111,
//   111,
//   111,
//   11125,
//   [22, 22, 2],
//   [22322, 11, 2228, 225],
// ];
// const data = num.map((datats) => {
//   if (Array.isArray(datats)) {
//     return datats.map((related) => {
//       if (Array.isArray(related)) {
//         return related.map((mapsss) => mapsss * 2);
//       } else {
//         return related * 2;
//       }
//     });
//   } else {
//     return datats;
//   }
// });

// console.log(data.toString());
// console.log(data.length);

// const data =  [12, 1, 2, 12, 12, [{ a: 23, b: 34, c: 43, d: 3 }]];
// const value = data.map((item) => {
//     if(Array.isArray(item)){
//         return item.map(subItem => {
//             if (typeof subItem === 'object') {
//                 const doubledObject = {};
//                 for (const key in subItem) {
//                     if (typeof subItem[key] === 'number') {
//                         doubledObject[key] = subItem[key] * 2;
//                     }
//                 }
//                 return doubledObject;
//             } else {
//                 return subItem * 2;
//             }
//         });
//     } else {
//         return item * 2;
//     }
// });

// console.log(value);

// const data = [
//   12,
//   1,
//   2,
//   12,
//   12,
//   [{ a: 23, b: 34, c: 43, d: 3 }],
//   21,
//   112,
//   12,
//   [{ a: 25, b: 12, c: 43, d: 3 }],
// ];
// const value = data.map((item) => {
//   if (Array.isArray(item)) {
//     return item.map((subItem) => {
//       if (typeof subItem === "object") {
//         const doubledObject = {};
//         for (const key in subItem) {
//           if (typeof subItem[key] === "number") {
//             doubledObject[key] = subItem[key] * 2;
//           }
//         }
//         return doubledObject;
//       } else {
//         return subItem * 2;
//       }
//     });
//   } else {
//     return item * 2;
//   }
// });

// console.log(value);

var people = [
  {
    name: "James",
    occupation: "programmer",
    height: {
      feet: 6,
      inches: 1,
    },
  },
  {
    name: "Peter",
    occupation: "designer",
    height: {
      feet: 4,
      inches: 10,
    },
  },
  {
    name: "Joshua",
    occupation: "CEO",
    height: {
      feet: 5,
      inches: 11,
    },
  },
  {
    name: "James",
    occupation: "CEO",
    height: {
      feet: 5,
      inches: 11,
    },
  },
];
const data = people.filter((item) => {
  return (
    (item.name === "James" && item.occupation === "CEO") ||
    item.occupation === "programmer"
  );
});
console.log(data);

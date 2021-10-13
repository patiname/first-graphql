// const patiname = {
//   name: "patiname",
//   age: 23,
// };

// export const resolvers = {
//   Query: {
//     parson: () => patiname,
//   },
// };

import { addFood, allFood, getById, removeFood } from "./db";

export const resolvers = {
  Query: {
    menu: () => allFood(),
    getMenu: (_, { id }) => getById(id),
  },

  Mutation: {
    rmFood: (_, { id }) => removeFood(id),
    addFood: (_, { name, side }) => addFood(name, side),
  },
};

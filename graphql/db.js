let foods = [
  {
    id: 0,
    name: "커피",
    side: "도넛",
  },
  {
    id: 1,
    name: "피자",
    side: "콜라",
  },
  {
    id: 2,
    name: "샐러드",
    side: "소스",
  },
  {
    id: 3,
    name: "떡볶이",
    side: "튀김",
  },
  {
    id: 4,
    name: "비빔밥",
    side: "청주",
  },
];

export const allFood = () => foods;

export const getById = (id) => {
  const filterFood = foods.filter((food) => food.id === id);
  return filterFood[0];
};

export const removeFood = (id) => {
  const deleteFood = foods.filter((food) => food.id !== id);
  if (foods.length > deleteFood.length) {
    foods = deleteFood;
    return true;
  } else {
    return false;
  }
};

export const addFood = (name, side) => {
  const plusFood = {
    id: `${foods.length + 1}`,
    name,
    side,
  };
  foods.push(plusFood);
  return true;
};

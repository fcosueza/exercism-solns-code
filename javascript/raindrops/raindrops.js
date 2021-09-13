const dropSound = {
  3: "Pling",
  5: "Plang",
  7: "Plong"
};

const convert = number => {
  let soundsArray = Object.keys(dropSound);
  let result = "";

  result = soundsArray.reduce((acc, curr) => {
    if (number % curr === 0) return acc + dropSound[curr];

    return acc;
  }, result);

  return result || number.toString();
};

export { convert };

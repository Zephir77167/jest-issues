let name;

export const setName = (newName) => {
  name = newName;
};

export const getName = () => name || '';

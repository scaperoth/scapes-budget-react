export const itemExistsInArray = (array, itemToFind, key) => {
  let itemExists = false;
  const filter = array.filter(item => item[key] === itemToFind[key]);
  if (filter.length > 0) {
    itemExists = true;
  }
  return itemExists;
};

export const addItemToArray = (array, itemToAdd) => [...array, itemToAdd];
export const addItemToArrayUniqueKey = (array, itemToAdd, key) => {
  if (itemExistsInArray(array, itemToAdd, key)) {
    throw new Error(`Item with ${key} of "${itemToAdd[key]}" already exists`);
  } else if (!itemToAdd[key]) {
    throw new Error(`Item with empty or missing value for ${key} not allowed`);
  }
  return addItemToArray(array, itemToAdd);
};

export const deleteItemFromArrayByKey = (array, itemToDelete, key) =>
  array.filter(item => item[key] !== itemToDelete[key]);

export const updateItemInArrayByKey = (array, itemToUpdate, key) => {
  if (!itemExistsInArray(array, itemToUpdate, key)) {
    throw new Error(`Item ${itemToUpdate[key]} does not exist`);
  }
  return array.map(item => {
    let newItem = { ...item };
    if (item[key] === itemToUpdate[key]) {
      newItem = { ...itemToUpdate };
    }
    return newItem;
  });
};

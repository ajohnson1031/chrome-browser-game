const getCustomProperty = (elem, prop) => {
  return parseFloat(getComputedStyle(elem).getPropertyValue(prop)) || 0;
};

const setCustomProperty = (elem, prop, value) => {
  elem.style.setProperty(prop, value);
};

const incrementCustomProperty = (elem, prop, inc) => {
  setCustomProperty(elem, prop, getCustomProperty(elem, prop) + inc);
};

export { getCustomProperty, incrementCustomProperty, setCustomProperty };

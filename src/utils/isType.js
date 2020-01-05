const isType = (type, data) =>
  !!(
    data.constructor &&
    data.constructor.name.toLowerCase() === type.toLowerCase()
  );

module.exports = isType;

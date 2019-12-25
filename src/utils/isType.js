export default (type, data) =>
  !!(
    data.constructor &&
    data.constructor.name.toLowerCase() === type.toLowerCase()
  );

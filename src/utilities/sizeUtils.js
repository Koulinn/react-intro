const checkIsSmall = (string) => {
  return string.match(/small|sl/i);
};
const checkIsMedium = (string) => {
  return string.match(/medium|md/i);
};
const checkIsLarge = (string) => {
  return string.match(/large|lg/i);
};

const sizeUtils = {
  checkIsSmall,
  checkIsMedium,
  checkIsLarge,
};

export default sizeUtils;

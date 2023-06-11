const parseAddress = (address: string) => {
  if (address) return [];
  // 429 S Abbey Hill Ln, Palatine, IL, 60067

  return address.split(",");
};

export default parseAddress;

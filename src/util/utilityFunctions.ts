export const createID = (prefix: string, strLength: number = 25): string => {
  let id: string = "";
  const characterArr: string[] = [...Array(94)].map((_, i) =>
    String.fromCharCode(i + 33)
  );
  for (let i = 0; i < strLength; i++) {
    id += characterArr[Math.floor(Math.random() * characterArr.length)];
  }
  return `${prefix}-${id}`;
};

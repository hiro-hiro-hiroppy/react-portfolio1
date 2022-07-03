// 擬似Guidをランダム生成
export const createGuid = (myStrong?: number): string => {
    let strong = 1000;
  if (myStrong) strong = myStrong;
  return (
    new Date().getTime().toString(16) +
    Math.floor(strong * Math.random()).toString(16)
  );
}

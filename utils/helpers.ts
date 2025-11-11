export const parseViews = (views: string): number => {
  const num = parseFloat(views);
  if (views.toLowerCase().includes('b')) {
    return num * 1_000_000_000;
  }
  if (views.toLowerCase().includes('m')) {
    return num * 1_000_000;
  }
  if (views.toLowerCase().includes('k')) {
    return num * 1_000;
  }
  return num;
};
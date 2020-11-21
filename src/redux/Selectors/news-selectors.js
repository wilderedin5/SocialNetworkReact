export const getMarks = (state) => {
  return state.newsPage.news.filter((item) => item.isMarked);
};

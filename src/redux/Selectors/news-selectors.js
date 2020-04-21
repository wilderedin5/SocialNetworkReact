export const getBookmarks = (state) => {
    return state.newsPage.news.filter(item => state.newsPage.bookMarks.some(key => key == item.id));
}
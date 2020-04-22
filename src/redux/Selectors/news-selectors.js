export const getBookmarks = (state) => {
    return state.newsPage.news.filter(item => item.inBookmarks);
}
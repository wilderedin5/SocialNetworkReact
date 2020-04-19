const DELETE_NEWS = 'news-reducer/DELETE_NEWS';
const ADD_NEW_NEWS = 'news-reducer/ADD_NEW_NEWS';

let initialState = {
    news: [
        { id: 1, newsText: "React изначально был спроектирован так, чтобы его можно было внедрять постепенно. Другими словами, вы можете начать с малого и использовать только ту функциональность React, которая необходима вам в данный момент. Информация в этом разделе будет полезна в любой ситуации: при первом знакомстве с React, при создании простой динамической HTML-страницы и даже при проектировании сложного React-приложения",
         author: "React document", date: "19.04.2020", category: "react" },
        { id: 2, newsText: "HTML — стандартизированный язык разметки документов во Всемирной паутине. Большинство веб-страниц содержат описание разметки на языке HTML. Язык HTML интерпретируется браузерами; полученный в результате интерпретации форматированный текст отображается на экране монитора компьютера или мобильного устройства",
         author: "Wikipedia", date: "12.04.2020", category: "HTML" },
        { id: 3, newsText: "CSS — формальный язык описания внешнего вида документа, написанного с использованием языка разметки. Преимущественно используется как средство описания, оформления внешнего вида веб-страниц, написанных с помощью языков разметки HTML и XHTML, но может также применяться к любым XML-документам, например, к SVG или XUL.",
         author: "Wikipedia", date: "11.04.2020", category: "CSS" },
        { id: 4, newsText: "Redux — библиотека для JavaScript с открытым исходным кодом, предназначенная для управления состоянием приложения. Чаще всего используется в связке с React или Angular для разработки клиентской части. Содержит ряд инструментов, позволяющих значительно упростить передачу данных хранилища через контекст.",
         author: "Wikipedia", date: "18.04.2020", category: "REDUX" },
        { id: 5, newsText: "По-простому компонента высшего порядка это функция которая принимает компоненту и возвращает новую компоненту. ",
         author: "fantomas", date: "17.04.2020", category: "HOC" }
    ]
};

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_NEWS:
            return {
                ...state,
                news: state.news.filter(news => news.id !== action.newsId)
            }
        case ADD_NEW_NEWS:
            return {
                ...state,
                news: [...state.news, action.newNews]
            }
        default:
            return state;
    }
}

export const deleteNews = (newsId) => ({
    type: DELETE_NEWS,
    newsId
});

export const addNewNews = (newsText, author, category) => ({
    type: ADD_NEW_NEWS,
    newNews: {newsText, author, category}
});

export default newsReducer;
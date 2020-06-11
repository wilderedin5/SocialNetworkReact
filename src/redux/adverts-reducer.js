const DELETE_COMMENT_FROM_ADVERT = "adverts-reducer/DELETE_COMMENT_FROM_ADVERT";
const TOGGLE_LIKE_COMMENT_FROM_ADVERT = "adverts-reducer/TOGGLE_LIKE_COMMENT_FROM_ADVERT";
const ADD_COMMENT_TO_ADVERT = "adverts-reducer/ADD_COMMENT_TO_ADVERT";
const TOGGLE_LIKE_ADVERT = "advert-reducer/TOGGLE_LIKE_ADVERT";
const ADD_ADVERT = "advert-reducer/ADD_ADVERT";

let initialState = {
    advertising: [
        { id: 1, liked: false, likeCount: 11, title: "Реклама World of Warcraft: Shadowlands", text: "World of Warcraft: Shadowlands — восьмое дополнение к компьютерной игре World of Warcraft, анонсированное 1 ноября 2019 года на BlizzCon и готовящееся к выходу в 2020 году. Действия сюжета Shadowlands происходят в Тёмных землях, куда попадают души мертвецов", image: "https://i.ytimg.com/vi/5bYZyjHhrtU/maxresdefault.jpg", comment: [
            {id: 1, name: "Елена", text: "Вау это уже восьмой аддон", avatar: "", liked: false, likeCount: 12},
            {id: 2, name: "Виктор", text: "Второй коммент", avatar: "", liked: false, likeCount: 22},
            {id: 3, name: "Илья", text: "Ну тип тож коммент", avatar: "", liked: false, likeCount: 32},
            {id: 4, name: "Иван", text: "Сплющивание лвл до 60", avatar: "", liked: false, likeCount: 42}
        ] },
        { id: 2, liked: false, likeCount: 81, title: "Реклама ryzen", text: "Ryzen (/ˈraɪzən/, рус. ра́йзен)[3] — торговая марка[4] микропроцессоров транснациональной корпорации AMD второй половины 2010-х годов. Данное семейство процессоров относится к архитектуре x86_64, применяется в настольных, мобильных и встроенных вычислительных системах и на данный момент использует процессорные микроархитектуры Zen, Zen+ и Zen 2.", image: "https://www.ixbt.com/img/n1/news/2020/4/4/434234_large.jpg", comment: [
            {id: 1, name: "Григорий", text: "Райзен тащщщет", avatar: "", liked: false, likeCount: 21},
            {id: 2, name: "Станислав", text: "Нет райзен не тащщщит", avatar: "", liked: false, likeCount: 22}
        ] },
        { id: 3, liked: false, likeCount: 211, title: "Реклама intel", text: "«И́нтел» — транснациональная корпорация, производитель электронных устройств и компьютерных компонентов, включая полноцикловое производство микропроцессоров и наборов системной логики. Штаб-квартира расположена в Санта-Кларе, штат Калифорния, США", image: "https://hsto.org/getpro/habr/post_images/5ba/fd7/ada/5bafd7ada71e48b1567c19e6b3770d15.jpg", comment: [
            {id: 1, name: "Евгений", text: "Интел тащщщит", avatar: "", liked: false, likeCount: 42},
            {id: 2, name: "Виктор", text: "Интел Не тащщит", avatar: "", liked: false, likeCount: 0},
            {id: 3, name: "Илья", text: "Третий комментс", avatar: "", liked: false, likeCount: 76}
        ] }
    ]
}

const advertsReducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_COMMENT_FROM_ADVERT:
            return {
                ...state,
                advertising: state.advertising.map(advert => {
                    if(advert.id === action.advertId){
                        let comment = advert.comment.filter(comment => comment.id !== action.commentId)
                        return {...advert, comment}
                    }
                    return advert;
                })
            }
        case TOGGLE_LIKE_COMMENT_FROM_ADVERT:
            return {
                ...state,
                advertising: state.advertising.map(advert => {
                    if(advert.id === action.advertId){
                        advert.comment.map(comment => {
                            if(comment.id === action.commentId){ 
                                if(comment.liked === true){
                                    comment.liked = false;
                                    return { ...comment, likeCount: --comment.likeCount }
                                } else if(comment.liked === false) {
                                    comment.liked = true;
                                    return { ...comment, likeCount: ++comment.likeCount }
                                }
                            }
                            return comment
                        })
                    }
                    return advert
                })
            }
        case ADD_COMMENT_TO_ADVERT: 
            return {
                ...state,
                advertising: state.advertising.map(advert => {
                    if(advert.id === action.advertId){
                        return {...advert, comment: [...advert.comment, action.comment]}
                    }
                    return advert;
                })
            }
        case TOGGLE_LIKE_ADVERT:
            return {
                ...state,
                advertising: state.advertising.map(advert => {
                    if(advert.id === action.advertId){
                        return {...advert, liked: !advert.liked, likeCount: advert.liked ? ++advert.likeCount : --advert.likeCount}
                    }
                    return advert;
                })
            }
        case ADD_ADVERT:
            return {
                ...state,
                advertising: [...state.advertising, action.advert]
            }
        default:
            return state;
    }
}

export const deleteCommentFromAdvert = (advertId, commentId) => ({
    type: DELETE_COMMENT_FROM_ADVERT,
    advertId,
    commentId
});

export const toggleLikeCommentFromAdvert = (advertId, commentId) => ({
    type: TOGGLE_LIKE_COMMENT_FROM_ADVERT,
    advertId,
    commentId
});

export const addCommentToAdvert = (advertId, id, text, name,liked,likeCount) => ({
    type: ADD_COMMENT_TO_ADVERT,
    advertId,
    comment: {id,text,name,liked,likeCount}
});

export const toggleLikeAdvert = (advertId) => ({
    type: TOGGLE_LIKE_ADVERT,
    advertId
});

export const addAdvert = (id, liked, likeCount, title, text, image) => ({
    type: ADD_ADVERT,
    advert: {id, liked, likeCount, title, text, image, comment: []}
})

export default advertsReducer;
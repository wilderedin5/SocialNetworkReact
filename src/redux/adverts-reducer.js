const DELETE_COMMENT_FROM_ADVERT = "adverts-reducer/DELETE_COMMENT_FROM_ADVERT";
const TOGGLE_LIKE_COMMENT_FROM_ADVERT = "adverts-reducer/TOGGLE_LIKE_COMMENT_FROM_ADVERT";

let initialState = {
    advertising: [
        { id: 1, title: "Реклама World of Warcraft: Shadowlands", text: "World of Warcraft: Shadowlands — восьмое дополнение к компьютерной игре World of Warcraft, анонсированное 1 ноября 2019 года на BlizzCon и готовящееся к выходу в 2020 году. Действия сюжета Shadowlands происходят в Тёмных землях, куда попадают души мертвецов", image: "https://i.ytimg.com/vi/5bYZyjHhrtU/maxresdefault.jpg", comment: [
            {id: 1, name: "Елена", text: "", avatar: "", liked: false, likeCount: 12},
            {id: 2, name: "Виктор", text: "", avatar: "", liked: false, likeCount: 22},
            {id: 3, name: "Илья", text: "", avatar: "", liked: false, likeCount: 32},
            {id: 4, name: "Иван", text: "", avatar: "", liked: false, likeCount: 42}
        ] },
        { id: 2, title: "Реклама ryzen", text: "Ryzen (/ˈraɪzən/, рус. ра́йзен)[3] — торговая марка[4] микропроцессоров транснациональной корпорации AMD второй половины 2010-х годов. Данное семейство процессоров относится к архитектуре x86_64, применяется в настольных, мобильных и встроенных вычислительных системах и на данный момент использует процессорные микроархитектуры Zen, Zen+ и Zen 2.", image: "https://www.ixbt.com/img/n1/news/2020/4/4/434234_large.jpg", comment: [
            {id: 1, name: "Григорий", text: "", avatar: "", liked: false, likeCount: 21},
            {id: 2, name: "Станислав", text: "", avatar: "", liked: false, likeCount: 22}
        ] },
        { id: 3, title: "Реклама intel", text: "«И́нтел» — транснациональная корпорация, производитель электронных устройств и компьютерных компонентов, включая полноцикловое производство микропроцессоров и наборов системной логики. Штаб-квартира расположена в Санта-Кларе, штат Калифорния, США", image: "https://hsto.org/getpro/habr/post_images/5ba/fd7/ada/5bafd7ada71e48b1567c19e6b3770d15.jpg", comment: [
            {id: 1, name: "Евгений", text: "", avatar: "", liked: false, likeCount: 42},
            {id: 2, name: "Виктор", text: "", avatar: "", liked: false, likeCount: 0},
            {id: 3, name: "Илья", text: "", avatar: "", liked: false, likeCount: 76}
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
})

export default advertsReducer;
const DELETE_COMMENT_FROM_ADVERT = "adverts-reducer/DELETE_COMMENT_FROM_ADVERT";
const TOGGLE_LIKE_COMMENT_FROM_ADVERT =
  "adverts-reducer/TOGGLE_LIKE_COMMENT_FROM_ADVERT";
const ADD_COMMENT_TO_ADVERT = "adverts-reducer/ADD_COMMENT_TO_ADVERT";
const TOGGLE_LIKE_ADVERT = "advert-reducer/TOGGLE_LIKE_ADVERT";
const ADD_ADVERT = "advert-reducer/ADD_ADVERT";
const DELETE_ADVERT = "advert-reducer/DELETE_ADVERT";

let initialState = {
  advertising: [
    {
      id: 1,
      liked: false,
      likeCount: 11,
      title: "World of Warcraft: Shadowlands Ads",
      text:
        "World of Warcraft: Shadowlands — восьмое дополнение к компьютерной игре World of Warcraft, анонсированное 1 ноября 2019 года на BlizzCon и готовящееся к выходу в 2020 году. Действия сюжета Shadowlands происходят в Тёмных землях, куда попадают души мертвецов",
      image: "https://i.ytimg.com/vi/5bYZyjHhrtU/maxresdefault.jpg",
      comment: [
        {
          id: 1,
          name: "Elena",
          text: "Wow! this is the eighth addon",
          avatar: "",
          liked: false,
          likeCount: 12,
        },
        {
          id: 2,
          name: "Viktor",
          text: "Second comment",
          avatar: "",
          liked: false,
          likeCount: 22,
        },
        {
          id: 3,
          name: "Ilya",
          text: "fake comments",
          avatar: "",
          liked: false,
          likeCount: 32,
        },
        {
          id: 4,
          name: "Ivan",
          text: "tips and tricks",
          avatar: "",
          liked: false,
          likeCount: 42,
        },
      ],
    },
    {
      id: 2,
      liked: false,
      likeCount: 81,
      title: "Ads ryzen",
      text:
        "Ryzen (/ˈraɪzən/, рус. ра́йзен)[3] — торговая марка[4] микропроцессоров транснациональной корпорации AMD второй половины 2010-х годов. Данное семейство процессоров относится к архитектуре x86_64, применяется в настольных, мобильных и встроенных вычислительных системах и на данный момент использует процессорные микроархитектуры Zen, Zen+ и Zen 2.",
      image: "https://www.ixbt.com/img/n1/news/2020/4/4/434234_large.jpg",
      comment: [
        {
          id: 1,
          name: "Grigory",
          text: "Ryzen top!",
          avatar: "",
          liked: false,
          likeCount: 21,
        },
        {
          id: 2,
          name: "Stas",
          text: "No! Intel top!",
          avatar: "",
          liked: false,
          likeCount: 22,
        },
      ],
    },
    {
      id: 3,
      liked: false,
      likeCount: 211,
      title: "Ads intel",
      text:
        "«И́нтел» — транснациональная корпорация, производитель электронных устройств и компьютерных компонентов, включая полноцикловое производство микропроцессоров и наборов системной логики. Штаб-квартира расположена в Санта-Кларе, штат Калифорния, США",
      image:
        "https://hsto.org/getpro/habr/post_images/5ba/fd7/ada/5bafd7ada71e48b1567c19e6b3770d15.jpg",
      comment: [
        {
          id: 1,
          name: "Eugene",
          text: "Intel top",
          avatar: "",
          liked: false,
          likeCount: 42,
        },
        {
          id: 2,
          name: "Viktor",
          text: "No! Intel is not top!",
          avatar: "",
          liked: false,
          likeCount: 0,
        },
        {
          id: 3,
          name: "Ilya",
          text: "Third comments",
          avatar: "",
          liked: false,
          likeCount: 76,
        },
      ],
    },
  ],
};

const advertsReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_COMMENT_FROM_ADVERT:
      return {
        ...state,
        advertising: state.advertising.map((advert) => {
          if (advert.id === action.advertId) {
            let comment = advert.comment.filter(
              (comment) => comment.id !== action.commentId
            );
            return { ...advert, comment };
          }
          return advert;
        }),
      };
    case TOGGLE_LIKE_COMMENT_FROM_ADVERT:
      return {
        ...state,
        advertising: state.advertising.map((advert) => {
          if (advert.id === action.advertId) {
            advert.comment.map((comment) => {
              if (comment.id === action.commentId) {
                if (comment.liked === true) {
                  comment.liked = false;
                  return { ...comment, likeCount: --comment.likeCount };
                } else if (comment.liked === false) {
                  comment.liked = true;
                  return { ...comment, likeCount: ++comment.likeCount };
                }
              }
              return comment;
            });
          }
          return advert;
        }),
      };
    case ADD_COMMENT_TO_ADVERT:
      return {
        ...state,
        advertising: state.advertising.map((advert) => {
          if (advert.id === action.advertId) {
            return { ...advert, comment: [...advert.comment, action.comment] };
          }
          return advert;
        }),
      };
    case TOGGLE_LIKE_ADVERT:
      return {
        ...state,
        advertising: state.advertising.map((advert) => {
          if (advert.id === action.advertId) {
            return {
              ...advert,
              liked: !advert.liked,
              likeCount: advert.liked ? ++advert.likeCount : --advert.likeCount,
            };
          }
          return advert;
        }),
      };
    case ADD_ADVERT:
      return {
        ...state,
        advertising: [...state.advertising, action.advert],
      };
    case DELETE_ADVERT:
      return {
        ...state,
        advertising: state.advertising.filter(
          (advert) => advert.id !== action.advertId
        ),
      };
    default:
      return state;
  }
};

export const deleteComment = (advertId, commentId) => ({
  type: DELETE_COMMENT_FROM_ADVERT,
  advertId,
  commentId,
});

export const likeComment = (advertId, commentId) => ({
  type: TOGGLE_LIKE_COMMENT_FROM_ADVERT,
  advertId,
  commentId,
});

export const addComment = (advertId, id, text, name, liked, likeCount) => ({
  type: ADD_COMMENT_TO_ADVERT,
  advertId,
  comment: { id, text, name, liked, likeCount },
});

export const toggleLike = (advertId) => ({
  type: TOGGLE_LIKE_ADVERT,
  advertId,
});

export const addAdvert = (id, liked, likeCount, title, text, image) => ({
  type: ADD_ADVERT,
  advert: { id, liked, likeCount, title, text, image, comment: [] },
});

export const deleteAdvert = (advertId) => ({
  type: DELETE_ADVERT,
  advertId,
});

export default advertsReducer;

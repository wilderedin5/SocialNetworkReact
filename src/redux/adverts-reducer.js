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
        "World of Warcraft: Shadowlands is the eighth expansion to the computer game World of Warcraft, announced on November 1, 2019 at BlizzCon and is set for release in 2020. The story of Shadowlands takes place in the Dark lands, where the souls of the dead fall",
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
        "Ryzen (/ˈraɪzən/ Rus. Riesen)[3] - trademark[4] microprocessors of the AMD multinational Corporation in the second half of the 2010s. This family of processors belongs to the x86_64 architecture, is used in desktop, mobile, and embedded computing systems, and currently uses the Zen, Zen+, and Zen 2 processor microarchitectures.",
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
        "Intel is a multinational Corporation that produces electronic devices and computer components, including full-cycle production of microprocessors and system logic kits. It is headquartered in Santa Clara, California, USA",
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

export const advertsReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_COMMENT_FROM_ADVERT:
      return {
        ...state,
        advertising: state.advertising.map((advert) => {
          if (advert.id === action.advertId) {
            const comment = advert.comment.filter(
              ({ id }) => id !== action.commentId
            )
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
              return comment.id === action.commentId ?
                { ...comment, likeCount: comment.liked ? --comment.likeCount : ++comment.likeCount, liked: !comment.liked }
                :
                comment
            });
          }
          return advert;
        }),
      };
    case ADD_COMMENT_TO_ADVERT:
      return {
        ...state,
        advertising: state.advertising.map((advert) => {
          return advert.id === action.advertId ?
            { ...advert, comment: [...advert.comment, action.comment] }
            :
            advert
        }),
      };
    case TOGGLE_LIKE_ADVERT:
      return {
        ...state,
        advertising: state.advertising.map((advert) => {
          return advert.id === action.advertId ?
            {
              ...advert,
              liked: !advert.liked,
              likeCount: advert.liked ? ++advert.likeCount : --advert.likeCount,
            }
            :
            advert
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
          ({ id }) => id !== action.advertId
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

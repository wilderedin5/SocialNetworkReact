const MANAGE_COMMENT = "adverts-reducer/MANAGE_COMMENT";
const TOGGLE_LIKE = "adverts-reducer/TOGGLE_LIKE";
const MANAGE_ADVERT = "advert-reducer/MANAGE_ADVERT";

let initialState = {
  adverts: [
    {
      id: 1,
      title: "World of Warcraft: Shadowlands Ads",
      text:
        "World of Warcraft: Shadowlands is the eighth expansion to the computer game World of Warcraft, announced on November 1, 2019 at BlizzCon and is set for release in 2020. The story of Shadowlands takes place in the Dark lands, where the souls of the dead fall",
      img: "https://i.ytimg.com/vi/5bYZyjHhrtU/maxresdefault.jpg",
      comments: [
        {
          id: 1,
          author: "Elena",
          text: "Wow! this is the eighth addon",
          avatar: "",
          likeCount: 12,
        },
        {
          id: 2,
          author: "Viktor",
          text: "Second comment",
          avatar: "",
          likeCount: 22,
        },
        {
          id: 3,
          author: "Ilya",
          text: "fake comments",
          avatar: "",
          likeCount: 32,
        },
        {
          id: 4,
          author: "Ivan",
          text: "tips and tricks",
          avatar: "",
          likeCount: 42,
        },
      ],
    },
    {
      id: 2,
      title: "Ads ryzen",
      text:
        "Ryzen (/ˈraɪzən/ Rus. Riesen)[3] - trademark[4] microprocessors of the AMD multinational Corporation in the second half of the 2010s. This family of processors belongs to the x86_64 architecture, is used in desktop, mobile, and embedded computing systems, and currently uses the Zen, Zen+, and Zen 2 processor microarchitectures.",
      img: "https://www.ixbt.com/img/n1/news/2020/4/4/434234_large.jpg",
      comments: [
        {
          id: 1,
          author: "Grigory",
          text: "Ryzen top!",
          avatar: "",
          likeCount: 21,
        },
        {
          id: 2,
          author: "Stas",
          text: "No! Intel top!",
          avatar: "",
          likeCount: 22,
        },
      ],
    },
    {
      id: 3,
      title: "Ads intel",
      text:
        "Intel is a multinational Corporation that produces electronic devices and computer components, including full-cycle production of microprocessors and system logic kits. It is headquartered in Santa Clara, California, USA",
      img:
        "https://hsto.org/getpro/habr/post_images/5ba/fd7/ada/5bafd7ada71e48b1567c19e6b3770d15.jpg",
      comments: [
        {
          id: 1,
          author: "Eugene",
          text: "Intel top",
          avatar: "",
          likeCount: 42,
        },
        {
          id: 2,
          author: "Viktor",
          text: "No! Intel is not top!",
          avatar: "",
          likeCount: 0,
        },
        {
          id: 3,
          author: "Ilya",
          text: "Third comments",
          avatar: "",
          likeCount: 76,
        },
      ],
    },
  ],
};

export const advertsReducer = (state = initialState, action) => {
  switch (action.type) {
    case MANAGE_COMMENT:
      return {
        ...state,
        adverts: state.adverts.map((advert) => {
          return advert.id === action.advertId
            ? {
                ...advert,
                comments: advert.comments.some(
                  ({ id }) => id === action.commentId
                )
                  ? advert.comments.filter(
                      (comment) => comment.id !== action.commentId
                    )
                  : [...advert.comments, action.comment],
              }
            : advert;
        }),
      };
    case TOGGLE_LIKE:
      return {
        ...state,
        adverts: state.adverts.map((advert) => {
          if (advert.id === action.advertId) {
            advert.comments.map((comment) => {
              return comment.id === action.commentId
                ? {
                    ...comment,
                    likeCount: action.hasLike
                      ? --comment.likeCount
                      : ++comment.likeCount,
                  }
                : comment;
            });
          }
          return advert;
        }),
      };
    case MANAGE_ADVERT:
      return {
        ...state,
        adverts: state.adverts.some(({ id }) => id === action.id)
          ? state.adverts.filter(({ id }) => id !== action.id)
          : [...state.adverts, action.advert],
      };
    default:
      return state;
  }
};

export const changeLikeCount = (advertId, commentId, hasLike) => ({
  type: TOGGLE_LIKE,
  advertId,
  commentId,
  hasLike,
});

export const manageComment = (advertId, commentId, comment) => ({
  type: MANAGE_COMMENT,
  advertId,
  commentId,
  comment,
});

export const manageAdvert = (id, advert) => ({
  type: MANAGE_ADVERT,
  advert,
  id,
});

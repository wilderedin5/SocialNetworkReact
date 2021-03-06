const MANAGE_NEWS = "news-reducer/ADD_NEW_NEWS";
const TOGGLE_SET_TO_MARKS = "news-reducer/TOGGLE_SET_TO_MARKS";

let initialState = {
  news: [
    {
      id: 1,
      theme: "What is REACT",
      text:
        "React was originally designed to be implemented gradually. In other words, you can start small and use only the React functionality that you currently need. The information in this section will be useful in any situation: when first introduced to React, when creating a simple dynamic HTML page, and even when designing a complex React application, react was initially designed so that it could be implemented gradually. In other words, you can start small and use only the React functionality that you currently need. The information in this section will be useful in any situation: when first introduced to React, when creating a simple dynamic HTML page, and even when designing a complex React application, react was initially designed so that it could be implemented gradually. In other words, you can start small and use only the React functionality that you currently need. The information in this section will be useful in any situation: when first introduced to React, when creating a simple dynamic HTML page, and even when designing a complex React application, react was initially designed so that it could be implemented gradually. In other words, you can start small and use only the React functionality that you currently need. The information in this section will be useful in any situation: when first introduced to React, when creating a simple dynamic HTML page, and even when designing a complex React application, react was initially designed so that it could be implemented gradually. In other words, you can start small and use only the React functionality that you currently need. The information in this section will be useful in any situation: when you first get acquainted with React, when creating a simple dynamic HTML page, and even when designing a complex React application",
      author: "React document",
      date: "19.04.2020",
      category: "react",
      isMarked: false,
    },
    {
      id: 2,
      theme: "What is HTML",
      text:
        "HTML is a standardized document markup language on the world wide web. Most web pages contain a description of the markup language HTML. The HTML language is interpreted by browsers; the resulting formatted text is displayed on the screen of a computer or mobile device. HTML is a standardized document markup language on the world wide web. Most web pages contain a description of the markup language HTML. The HTML language is interpreted by browsers; the resulting formatted text is displayed on the screen of a computer or mobile device. HTML is a standardized document markup language on the world wide web. Most web pages contain a description of the markup language HTML. The HTML language is interpreted by browsers; the resulting formatted text is displayed on the screen of a computer or mobile device. HTML is a standardized document markup language on the world wide web. Most web pages contain a description of the markup language HTML. The HTML language is interpreted by browsers; the resulting formatted text is displayed on the screen of a computer or mobile device. HTML is a standardized document markup language on the world wide web. Most web pages contain a description of the markup language HTML. The HTML language is interpreted by browsers; the resulting formatted text is displayed on the screen of a computer or mobile device. HTML is a standardized document markup language on the world wide web. Most web pages contain a description of the markup language HTML. The HTML language is interpreted by browsers; the resulting formatted text is displayed on the screen of a computer or mobile device. HTML is a standardized document markup language on the world wide web. Most web pages contain a description of the markup language HTML. The HTML language is interpreted by browsers; the resulting formatted text is displayed on the screen of a computer or mobile device",
      author: "Wikipedia",
      date: "12.04.2020",
      category: "HTML",
      isMarked: false,
    },
    {
      id: 3,
      theme: "What is CSS",
      text:
        "CSS is a formal language for describing the appearance of a document written using the markup language. It is mainly used as a tool for describing and formatting the appearance of web pages written using the HTML and XHTML markup languages, but it can also be applied to any XML documents, such as SVG or XUL.CSS is a formal language for describing the appearance of a document written using the markup language. It is primarily used as a tool for describing and formatting the appearance of web pages written using the HTML and XHTML markup languages, but it can also be applied to any XML documents, such as SVG or XUL.CSS is a formal language for describing the appearance of a document written using the markup language. It is primarily used as a tool for describing and formatting the appearance of web pages written using the HTML and XHTML markup languages, but it can also be applied to any XML documents, such as SVG or XUL.CSS is a formal language for describing the appearance of a document written using the markup language. It is primarily used as a tool for describing and formatting the appearance of web pages written using the HTML and XHTML markup languages, but it can also be applied to any XML documents, such as SVG or XUL.CSS is a formal language for describing the appearance of a document written using the markup language. It is primarily used as a tool for describing and formatting the appearance of web pages written using the HTML and XHTML markup languages, but it can also be applied to any XML documents, such as SVG or XUL.CSS is a formal language for describing the appearance of a document written using the markup language. It is primarily used as a tool for describing and formatting the appearance of web pages written using the HTML and XHTML markup languages, but it can also be applied to any XML documents, such as SVG or XUL.CSS is a formal language for describing the appearance of a document written using the markup language. It is mainly used as a tool for describing and formatting the appearance of web pages written using the HTML and XHTML markup languages, but it can also be applied to any XML documents, such as SVG or XUL.",
      author: "Wikipedia",
      date: "11.04.2020",
      category: "CSS",
      isMarked: false,
    },
    {
      id: 4,
      theme: "What is redux",
      text:
        "Redux is an open source JavaScript library for managing the state of an application. It is most often used in conjunction with React or Angular for developing the client part. It contains a number of tools that make it much easier to transfer storage data through the context.Redux is an open source JavaScript library for managing the state of an application. It is most often used in conjunction with React or Angular for developing the client part. It contains a number of tools that make it much easier to transfer storage data through the context.Redux is an open source JavaScript library for managing the state of an application. It is most often used in conjunction with React or Angular for developing the client part. It contains a number of tools that make it much easier to transfer storage data through the context.Redux is an open source JavaScript library for managing the state of an application. It is most often used in conjunction with React or Angular for developing the client part. It contains a number of tools that make it much easier to transfer storage data through the context.Redux is an open source JavaScript library for managing the state of an application. It is most often used in conjunction with React or Angular for developing the client part. It contains a number of tools that make it much easier to transfer storage data through the context.Redux is an open source JavaScript library for managing the state of an application. It is most often used in conjunction with React or Angular for developing the client part. It contains a number of tools that make it much easier to transfer storage data through the context.Redux is an open source JavaScript library for managing the state of an application. It is most often used in conjunction with React or Angular for developing the client part. It contains a number of tools that make it much easier to transfer storage data through the context.",
      author: "Wikipedia",
      date: "18.04.2020",
      category: "REDUX",
      isMarked: false,
    },
    {
      id: 5,
      theme: "What is HOC",
      text:
        "In simple terms, a higher-order component is a function that accepts a component and returns a new component. In simple terms, a higher-order component is a function that accepts a component and returns a new component. In simple terms, a higher-order component is a function that accepts a component and returns a new component. In simple terms, a higher-order component is a function that accepts a component and returns a new component. In simple terms, a higher-order component is a function that accepts a component and returns a new component. In simple terms, a higher-order component is a function that accepts a component and returns a new component. In simple terms, a higher-order component is a function that accepts a component and returns a new component. In simple terms, a higher-order component is a function that accepts a component and returns a new component. In simple terms, a higher-order component is a function that accepts a component and returns a new component. In simple terms, a higher-order component is a function that accepts a component and returns a new component. In simple terms, a higher-order component is a function that accepts a component and returns a new component. In simple terms, a higher-order component is a function that accepts a component and returns a new component. In simple terms, a higher-order component is a function that accepts a component and returns a new component. In simple terms, a higher-order component is a function that accepts a component and returns a new component. In simple terms, a higher-order component is a function that accepts a component and returns a new component. In simple terms, a higher-order component is a function that accepts a component and returns a new component. In simple terms, a higher-order component is a function that accepts a component and returns a new component. In simple terms, a higher-order component is a function that accepts a component and returns a new component.",
      author: "Vesemir",
      date: "17.04.2020",
      category: "HOC",
      isMarked: false,
    },
  ],
};

export const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case MANAGE_NEWS:
      return {
        ...state,
        news: state.news.some(({ id }) => id === action.id)
          ? state.news.filter(({ id }) => id !== action.id)
          : [...state.news, action.news],
      };
    case TOGGLE_SET_TO_MARKS:
      return {
        ...state,
        news: state.news.map((news) => {
          return news.id === action.newsId
            ? { ...news, isMarked: action.marked }
            : news;
        }),
      };
    default:
      return state;
  }
};

export const manageNews = (id, news) => ({
  type: MANAGE_NEWS,
  news,
  id,
});

export const setMark = (newsId, marked) => ({
  type: TOGGLE_SET_TO_MARKS,
  newsId,
  marked,
});

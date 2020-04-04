const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
    dialogsData: [
        {name: "Андрей", id: 1},
        {name: "Виктор", id: 2},
        {name: "Ваня", id: 3},
        {name: "Света", id: 4},
        {name: "Илюша", id: 5},
        {name: "Сеня", id: 6},
        {name: "Ибрагим", id: 7},
        {name: "Кондратий", id: 8},
        {name: "Евгений", id: 9},
        {name: "Сандр", id: 10},
        {name: "Елена", id: 11}
    ],
    messageData: [
        {id: 1, message: "Привет"},
        {id: 2, message: "Как делай"},
        {id: 3, message: "How are you?"},
        {id: 4, message: "Where you"},
        {id: 5, message: "big"},
        {id: 6, message: "science"},
        {id: 7, message: "science"},
        {id: 8, message: "pop"},
        {id: 9, message: "rock"},
        {id: 10, message: "jazz"}
    ],
    newMessageText: "",
};

const dialogsReducer = (state = initialState,action) => {
    switch(action.type){
        case ADD_MESSAGE:
            let newMessage = {
                id: 11,
                message: state.newMessageText
            };
            return {
                ...state,
                messageData: [...state.messageData, newMessage],
                newMessageText: ""
            }; 
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newText
            };
        default: 
            return state;
    }
}

export const addMessageActionCreator = () => {
    return({
        type: ADD_MESSAGE
    });
};

export const updateNewMessageTextActionCreator = (text) => {
    return({
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: text
    });
};

export default dialogsReducer;
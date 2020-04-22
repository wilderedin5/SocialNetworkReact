import {v4} from 'uuid';
const ADD_MESSAGE = "dialogs-reducer/ADD-MESSAGE";
const DELETE_MESSAGE = "dialogs-reducer/DELETE_MESSAGE";

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
};

const dialogsReducer = (state = initialState,action) => {
    switch(action.type){
        case ADD_MESSAGE:
            let newMessage = {
                id: v4(),
                message: action.newMessageText
            };
            return {
                ...state,
                messageData: [...state.messageData, newMessage]
            };
        case DELETE_MESSAGE:
            return {
                ...state,
                messageData: state.messageData.filter(message => message.id !== action.messageId)
            }
        default: 
            return state;
    }
}

export const addMessage = (newMessageText) => {
    return({
        type: ADD_MESSAGE,
        newMessageText
    });
};

export const deleteMessage = (messageId) => {
    return({
        type: DELETE_MESSAGE,
        messageId
    })
}

export default dialogsReducer;
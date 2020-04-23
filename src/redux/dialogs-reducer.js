import {v4} from 'uuid';
const ADD_MESSAGE = "dialogs-reducer/ADD-MESSAGE";
const DELETE_MESSAGE = "dialogs-reducer/DELETE_MESSAGE";

let initialState = {
    dialogsData: [
        {name: "Андрей", id: 1, messages: [
            {id:1,message: "Сообщение от Андрея"},
            {id:2,message: "Переписка с Андреем ё"},
            {id:3,message: "МОжно чтот pltcm написать"}
        ]},
        {name: "Виктор", id: 2, messages: [
            {id:1,message: "Сообщение от Виктора"},
            {id:3,message: "МОжно чтот написать"}
        ]},
        {name: "Иван", id: 3, messages: [
            {id:1,message: "Сообщение от Ивана"},
            {id:3,message: "МОжно чтот тута написать"}
        ]},
        {name: "Светлана", id: 4, messages: [
            {id:1,message: "Сообщение от Светланы"},
            {id:3,message: "24.04.20 1:52"}
        ]},
        {name: "Илья", id: 5, messages: [
            {id:1,message: "Сообщение от Ильи"},
            {id:2,message: "Переписка с 24.04.20 1:53"}
        ]}
    ]
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
                dialogsData: state.dialogsData.map(dialog => {
                    if (dialog.id === action.userId) {
                        return { ...dialog, messages: [...dialog.messages, newMessage] }
                    }
                    return dialog;
                })
            };
        case DELETE_MESSAGE:
            return {
                ...state,
                dialogsData: state.dialogsData.map(dialog => {
                    if (dialog.id === action.userId) {
                        let messages = dialog.messages.filter(message => message.id !== action.messageId);
                        return {...dialog, messages}
                    }
                    return dialog;
                })
            }
        default: 
            return state;
    }
}

export const addMessage = (newMessageText, userId) => {
    return({
        type: ADD_MESSAGE,
        newMessageText,
        userId
    });
};

export const deleteMessage = (messageId,userId) => {
    return({
        type: DELETE_MESSAGE,
        messageId,
        userId
    })
}

export default dialogsReducer;
import {v4} from 'uuid';
const ADD_MESSAGE = "dialogs-reducer/ADD-MESSAGE";
const DELETE_MESSAGE = "dialogs-reducer/DELETE_MESSAGE";

let initialState = {
    dialogsData: [
        {name: "Андрей", id: 1, photoUrl: "https://www.meme-arsenal.com/memes/7bdea6754f999b50e9577596f09197fb.jpg", messages: [
            {id:1,message: "Сообщение от Андрея", outMe: false},
            {id:2,message: "Второе сообщение от Андрея ё", outMe: false},
            {id:3,message: "Чужие сообщения удалять нельзя", outMe: false},
            {id:4,message: "Мое сообщение не подсвечивается", outMe: true},
            {id:5,message: "Мое сообщение можно удалить", outMe: true}
        ]},
        {name: "Виктор", id: 2, photoUrl: "https://avatars.mds.yandex.net/get-zen_doc/1874839/pub_5cca08b4ac1ad900b3c67e5f_5cca0aaad31aa100b344e8bf/scale_1200", messages: [
            {id:1,message: "Сообщение от Виктора", outMe: false},
            {id:2,message: "Мое смс не подсвечивается", outMe: true}
        ]},
        {name: "Иван", id: 3, photoUrl: "https://www.meme-arsenal.com/memes/ae1d44253a861f53d95864dd37c55a78.jpg", messages: [
            {id:1,message: "Сообщение от Ивана", outMe: false},
            {id:2,message: "МОжно чтот тута написать, Но мое смс не подсвечивается", outMe: true}
        ]},
        {name: "Светлана", id: 4, photoUrl: "https://whatsism.com/uploads/posts/2018-07/1530545833_il2zmvzx9py.jpg", messages: [
            {id:1,message: "Сообщение от Светланы", outMe: false},
            {id:2,message: "24.04.20 1:52 свои сообщения не подсвечиваются", outMe: true}
        ]},
        {name: "Илья", id: 5, photoUrl: "https://sun9-65.userapi.com/c845418/v845418867/a090a/5dIarTfS9B8.jpg", messages: [
            {id:1,message: "Сообщение от Ильи", outMe: false},
            {id:2,message: "Переписка с 24.04.20 1:53, сообщение от Ильи", outMe: false}
        ]}
    ]
};

const dialogsReducer = (state = initialState,action) => {
    switch(action.type){
        case ADD_MESSAGE:
            let newMessage = {
                id: v4(),
                message: action.newMessageText,
                outMe: true
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
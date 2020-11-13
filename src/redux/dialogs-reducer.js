import { v4 } from "uuid";
const ADD_MESSAGE = "dialogs-reducer/ADD-MESSAGE";
const DELETE_MESSAGE = "dialogs-reducer/DELETE_MESSAGE";
const DELETE_ALL_MESSAGES_FROM_DIALOG =
  "dialogs-reducer/DELETE_ALL_MESSAGES_FROM_DIALOG";

let initialState = {
  dialogsData: [
    {
      name: "Andrey",
      id: 1,
      photoUrl:
        "https://www.meme-arsenal.com/memes/7bdea6754f999b50e9577596f09197fb.jpg",
      messages: [
        { id: 1, message: "Message from Andrey", outMe: false },
        { id: 2, message: "Second message from Andrey yo", outMe: false },
        {
          id: 3,
          message: "You cannot delete someone else's messages",
          outMe: false,
        },
        { id: 4, message: "My message is not highlighted", outMe: true },
        { id: 5, message: "My message can be deleted", outMe: true },
      ],
    },
    {
      name: "Viktor",
      id: 2,
      photoUrl:
        "https://avatars.mds.yandex.net/get-zen_doc/1874839/pub_5cca08b4ac1ad900b3c67e5f_5cca0aaad31aa100b344e8bf/scale_1200",
      messages: [
        { id: 1, message: "Message from Victor", outMe: false },
        { id: 2, message: "My message is not highlighted", outMe: true },
      ],
    },
    {
      name: "Ivan",
      id: 3,
      photoUrl:
        "https://www.meme-arsenal.com/memes/ae1d44253a861f53d95864dd37c55a78.jpg",
      messages: [
        { id: 1, message: "Message from Ivan", outMe: false },
        {
          id: 2,
          message: "My message is not highlighted",
          outMe: true,
        },
      ],
    },
    {
      name: "Svetlana",
      id: 4,
      photoUrl:
        "https://whatsism.com/uploads/posts/2018-07/1530545833_il2zmvzx9py.jpg",
      messages: [
        { id: 1, message: "Message from Svetlana", outMe: false },
        {
          id: 2,
          message: "24.04.20 1:52 My message is not highlighted",
          outMe: true,
        },
      ],
    },
    {
      name: "Ilya",
      id: 5,
      photoUrl:
        "https://sun9-65.userapi.com/c845418/v845418867/a090a/5dIarTfS9B8.jpg",
      messages: [
        { id: 1, message: "Message from Ilya", outMe: false },
        {
          id: 2,
          message: "Dialog с 24.04.20 1:53, Message from Ilya",
          outMe: false,
        },
      ],
    },
  ],
};

export const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: v4(),
        message: action.newMessageText,
        outMe: true,
      };
      return {
        ...state,
        dialogsData: state.dialogsData.map((dialog) => {
          return dialog.id === action.userId ?
            { ...dialog, messages: [...dialog.messages, newMessage] }
            :
            dialog
        }),
      };
    case DELETE_MESSAGE:
      return {
        ...state,
        dialogsData: state.dialogsData.map((dialog) => {
          if (dialog.id === action.userId) {
            let messages = dialog.messages.filter(
              ({ id }) => id !== action.messageId
            );
            return { ...dialog, messages };
          }
          return dialog;
        }),
      };
    case DELETE_ALL_MESSAGES_FROM_DIALOG:
      return {
        ...state,
        dialogsData: state.dialogsData.map((dialog) => {
          return dialog.id === action.userId ?
            { ...dialog, messages: [] }
            :
            dialog
        }),
      };
    default:
      return state;
  }
};

export const addMessage = (newMessageText, userId) => ({
  type: ADD_MESSAGE,
  newMessageText,
  userId,
})

export const deleteMessage = (messageId, userId) => ({
  type: DELETE_MESSAGE,
  messageId,
  userId,
})

export const deleteAllMessages = (userId) => ({
  type: DELETE_ALL_MESSAGES_FROM_DIALOG,
  userId,
});
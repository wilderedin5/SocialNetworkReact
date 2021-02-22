import { v4 } from "uuid";
const ADD_MESSAGE = "dialogs-reducer/ADD-MESSAGE";
const DELETE_MESSAGE = "dialogs-reducer/DELETE_MESSAGE";
const ERASE_DIALOG = "dialogs-reducer/ERASE_DIALOG";

let initialState = {
  dialogs: [
    {
      name: "Andrey",
      id: 1,
      photoUrl:
        "https://www.meme-arsenal.com/memes/7bdea6754f999b50e9577596f09197fb.jpg",
      messages: [
        { id: 1, message: "Message from Andrey", isMy: false },
        { id: 2, message: "Second message from Andrey yo", isMy: false },
        {
          id: 3,
          message: "You cannot delete someone else's messages",
          isMy: false,
        },
        { id: 4, message: "My message is not highlighted", isMy: true },
        { id: 5, message: "My message can be deleted", isMy: true },
      ],
    },
    {
      name: "Viktor",
      id: 2,
      photoUrl:
        "https://avatars.mds.yandex.net/get-zen_doc/1874839/pub_5cca08b4ac1ad900b3c67e5f_5cca0aaad31aa100b344e8bf/scale_1200",
      messages: [
        { id: 1, message: "Message from Victor", isMy: false },
        { id: 2, message: "My message is not highlighted", isMy: true },
      ],
    },
    {
      name: "Ivan",
      id: 3,
      photoUrl:
        "https://www.meme-arsenal.com/memes/ae1d44253a861f53d95864dd37c55a78.jpg",
      messages: [
        { id: 1, message: "Message from Ivan", isMy: false },
        {
          id: 2,
          message: "My message is not highlighted",
          isMy: true,
        },
      ],
    },
    {
      name: "Svetlana",
      id: 4,
      photoUrl:
        "https://whatsism.com/uploads/posts/2018-07/1530545833_il2zmvzx9py.jpg",
      messages: [
        { id: 1, message: "Message from Svetlana", isMy: false },
        {
          id: 2,
          message: "24.04.20 1:52 My message is not highlighted",
          isMy: true,
        },
      ],
    },
    {
      name: "Ilya",
      id: 5,
      photoUrl:
        "https://sun9-65.userapi.com/c845418/v845418867/a090a/5dIarTfS9B8.jpg",
      messages: [
        { id: 1, message: "Message from Ilya", isMy: false },
        {
          id: 2,
          message: "Dialog с 24.04.20 1:53, Message from Ilya",
          isMy: false,
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
        message: action.text,
        isMy: true,
      };
      return {
        ...state,
        dialogs: state.dialogs.map((dialog) => {
          return dialog.id === action.userId
            ? { ...dialog, messages: [...dialog.messages, newMessage] }
            : dialog;
        }),
      };
    case DELETE_MESSAGE:
      return {
        ...state,
        dialogs: state.dialogs.map((dialog) => {
          if (dialog.id === action.userId) {
            let messages = dialog.messages.filter(
              ({ id }) => id !== action.messageId
            );
            return { ...dialog, messages };
          }
          return dialog;
        }),
      };
    case ERASE_DIALOG:
      return {
        ...state,
        dialogs: state.dialogs.map((dialog) => {
          return dialog.id === action.userId
            ? { ...dialog, messages: [] }
            : dialog;
        }),
      };
    default:
      return state;
  }
};

export const addMessage = (text, userId) => ({
  type: ADD_MESSAGE,
  text,
  userId,
});

export const deleteMessage = (messageId, userId) => ({
  type: DELETE_MESSAGE,
  messageId,
  userId,
});

export const eraseDialog = (userId) => ({
  type: ERASE_DIALOG,
  userId,
});

export default { addMessage, deleteMessage, eraseDialog };

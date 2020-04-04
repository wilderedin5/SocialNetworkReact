import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';

let store = {
    _state: {
        profilePage: {
            posts : [
                {id: 1, message: "Привет, как дела?", likeCount: 144},
                {id: 2, message: "Привет, сейчас на паре.", likeCount: 24},
                {id: 3, message: "Автобус в 8-15", likeCount: 31},
                {id: 4, message: "Обратно хз когда", likeCount: 2},
                {id: 5, message: "GHost division", likeCount: 7},
                {id: 6, message: "Below", likeCount: 17},
                {id: 7, message: "Above", likeCount: 31},
                {id: 8, message: "Below", likeCount: 19}
            ],
            newPostText: "",
        },
        dialogsPage: {
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
        },
        sidebar: {
            friends: [
                {id: 1, name: "Андрей"},
                {id: 2, name: "Виктор"},
                {id: 3, name: "Ваня"},
                {id: 4, name: "Света"},
                {id: 5, name: "Илюша"},
                {id: 6, name: "Сеня"},
                {id: 7, name: "Ибрагим"},
                {id: 8, name: "Кондратий"},
                {id: 9, name: "Евгений"},
                {id: 10, name: "Сандр"}
            ]
        }
    },
    getState(){
        return this._state;
    },
    _callSubscriber() {
        console.log("change");
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action){
        this._state.profilePage = profileReducer(this._state.profilePage,action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage,action);
        this._state.sidebar = sidebarReducer(this._state.sidebar,action);
        this._callSubscriber(this._state);
    }
}






export default store;
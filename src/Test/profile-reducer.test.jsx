import profileReducer, { addPostActionCreator } from "../redux/profile-reducer";

let state = {
    posts: [
        { id: 1, message: "Привет, как дела?", likeCount: 144 },
        { id: 2, message: "Привет, сейчас на паре.", likeCount: 24 },
        { id: 3, message: "Автобус в 8-15", likeCount: 31 },
        { id: 4, message: "Обратно хз когда", likeCount: 2 },
        { id: 5, message: "GHost division", likeCount: 7 },
        { id: 6, message: "Below", likeCount: 17 },
        { id: 7, message: "Above", likeCount: 31 },
        { id: 8, message: "Below", likeCount: 19 }
    ]
};

it("TEST ON ADD POSnpmT", () => {
    let action = addPostActionCreator("Это тестовый пост");
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(9);
});

it("test for the correct value of a new post", () => {
    let action = addPostActionCreator("Проверка на правильное значение нового поста");
    let newState = profileReducer(state,action);
    expect(newState.posts[8].message).toBe("Проверка на правильное значение нового поста");
});
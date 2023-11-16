const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  postsList: [
    { id: 1, message: "First post", likesCount: 12 },
    { id: 2, message: "Second post", likesCount: 152 },
    { id: 3, message: "Third post", likesCount: 412 },
  ],
  newPostText: "it-kamasutra.com",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 4,
        message: state.newPostText,
        likesCount: 1030,
      };
      state.postsList.push(newPost);
      state.newPostText = "";
      return state;

    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newtext;
      return state;

    default:
      return state;
  }
};

export const addPostActionCreator = () => ({
  type: ADD_POST,
});

export const updateNewPostTextActionCreator = (textareaValue) => ({
  type: UPDATE_NEW_POST_TEXT,
  newtext: textareaValue,
});

export default profileReducer;

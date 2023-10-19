let rerenderEntireTree;

let state = {
  profilePage: {
    postsList: [
      { id: 1, message: "First post", likesCount: 12 },
      { id: 2, message: "Second post", likesCount: 152 },
      { id: 3, message: "Third post", likesCount: 412 },
    ],
    newPostText: "it-kamasutra.com",
  },

  dialogsPage: {
    messagesList: [
      { id: 1, message: "Hi" },
      { id: 2, message: "How is you kokok" },
      { id: 3, message: "Heyayay" },
    ],

    dialogsList: [
      { id: 1, name: "Dimych" },
      { id: 2, name: "Andrey" },
      { id: 3, name: "Sveta" },
      { id: 4, name: "Sasha" },
      { id: 5, name: "Viktor" },
      { id: 6, name: "Valera" },
    ],
  },

  sidebar: {
    friends: [
      { id: 1, name: "Nastya" },
      { id: 2, name: "Stasya" },
      { id: 2, name: "Dave" },
    ],
  },
};

window.state = state;

export const updateNewPostText = (newValue) => {
  state.profilePage.newPostText = newValue;
  rerenderEntireTree();
};

export const addPost = () => {
  let newPost = {
    id: 4,
    message: state.profilePage.newPostText,
    likesCount: 1030,
  };
  state.profilePage.postsList.push(newPost);
  state.profilePage.newPostText = "";
  rerenderEntireTree();
};

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
};

export default state;

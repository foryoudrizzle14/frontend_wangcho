// Initial State
const initialState = {
  comments: [
    {
      id: "1",
      title: "Ripe",
      body: "Freshly dressed body",
      isDone: false,
    },
  ],
  comment: {
    id: "0",
    title: "",
    body: "",
    isDone: false,
  },
};


// Action value
const ADD_COMMENT = "ADD_COMMENT";
const GET_COMMENT_BY_ID = "GET_COMMENT_BY_ID";
const TOGGLE_STATUS_COMMENT = "TOGGLE_STATUS_COMMENT";

// Action Creators
export const addComment = (payload) => {
  return {
    type: ADD_COMMENT,
    payload,
  };
};

export const toggleStatusComment = (payload) => {
  return {
    type: TOGGLE_STATUS_COMMENT,
    payload,
  };
};

export const getCommentByID = (payload) => {
  return {
    type: GET_COMMENT_BY_ID,
    payload,
  };
};


const comments = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      // Adding a new comment to the list of comments
      return {
        ...state,
        comments: [...state.comments, action.payload],
      };

    case TOGGLE_STATUS_COMMENT:
      // Toggling the isDone status of a comment
      return {
        ...state,
        comments: state.comments.map((comment) => {
          if (comment.id === action.payload) {
            return {
              ...comment,
              isDone: !comment.isDone,
            };
          } else {
            return comment;
          }
        }),
      };

    case GET_COMMENT_BY_ID:
      // Getting a comment by ID
      return {
        ...state,
        comment: state.comments.find((comment) => comment.id === action.payload),
      };

    default:
      return state;
  }
};

export default comments;

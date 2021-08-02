export const reducer = (state, action) => {
  switch (action.type) {
    // case "SETLOGIN":
    //   return { ...state, isLogin: action.isLogin };
    case "SETAUTH":
      return { ...state, isLogin: action.isLogin };
    case "SETUSERID":
      return { ...state, userId: action.userId };
    case "SETTOKEN":
      return { ...state, token: action.token };
    case "SETRESULT":
      return { ...state, token: action.result };

    default:
      return state;
  }
};

export const initialState = {
  isLogin: false,
  token: null,
  userId: "",
  result: {},
};

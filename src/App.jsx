import { useReducer } from "react";
const reducer = (state, action) => {
  switch (action) {
    case "UP":
      return state + 1;
    case "DOWN":
      return state - 1;
    case "DELETE ALL":
      return 0;
    default:
      return state;
  }
};

const reducer2 = (state, action) => {
  switch (action.type) {
    case "SET_VALUE":
      return action.value;
    default:
      return state;
  }
};

// init state User
const initStateUser = {
  loading: false,
  data: [],
  error: null,
};
const caseGetUser = (state, action) => {
  switch (action.type) {
    case "GET_USER_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_USER_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.data,
      };
    case "GET_USER_ERROR":
      return {
        ...state,
        data: [],
        error: action.data,
      };
    default:
  }
};
function App() {
  const [count, dispatch] = useReducer(reducer, 0);
  const [count2, dispatch2] = useReducer(reducer2, 0);
  // get User API
  const [user, userDisPatch] = useReducer(caseGetUser, initStateUser);

  const getUser = () => {
    userDisPatch({ type: "GET_USER_REQUEST" });

    setTimeout(() => {
      fetch("https://reqres.in/api/users")
        .then((res) => res.json())
        .then((res) => {
          userDisPatch({ type: "GET_USER_SUCCESS", data: res });
        })
        .catch((err) => {
          userDisPatch({
            type: "GET_USER_ERROR",
            data: err,
          });
        });
    }, 3000);
  };
  return (
    <>
      <h2 className="text-center py-4 text-xl font-bold text-blue-400 bg-slate-200 rounded-full">
        Learn useReducer Hotex
      </h2>
      <div className="bg-orange-300">
        <h1 className=" text-center">Count: {count}</h1>
        <div className="flex flex-col gap-4">
          <button onClick={() => dispatch("UP")}>UP</button>
          <button onClick={() => dispatch("DOWN")}>DOWN</button>
          <button onClick={() => dispatch("DELETE ALL")}>DELETE ALL</button>
        </div>
      </div>

      <div className="bg-sky-300">
        <h1 className=" text-center pt-5">Count 2: {count2} </h1>
        <div className="flex flex-col gap-4">
          <button
            onClick={() =>
              dispatch2({
                type: "SET_VALUE",
                value: 10,
              })
            }
          >
            SET_VALUE
          </button>
        </div>
      </div>

      {/* API */}
      <div className="flex flex-col gap-4">
        <button onClick={getUser}>GET USER</button>
        {user.loading ? "Loading...." : <p>{JSON.stringify(user)}</p>}
      </div>
    </>
  );
}

export default App;

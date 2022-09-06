import React from "react";
import "./style.css";
import { deleteData, postData } from "../../context/getData";
import { useReducer } from "react";

function reducer(state, action) {
  if (action.type === "delete") {
    return [...state.filter((obj) => obj.id !== action.payload.id)];
  }
}

const CreateCard = ({ data }) => {
  const [state, dispatch] = useReducer(reducer, data);
  console.log(state)
  return (
    <div className="cardWrapper">
      {state &&
        state.map((value, index) => (
          <div className="card">
            <div className="imageWrapper">
              <img src={value.avatar} alt="photo" className="brandPic" />
            </div>
            <div className="info">
              <h3>{value.title}</h3>
            </div>
            <div className="buttons">
              <button
                className="deleteButton"
                onClick={() => {
                  postData();
                  dispatch({
                    type: "delete",
                    payload: {
                      id: data.id,
                    },
                  });
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CreateCard;

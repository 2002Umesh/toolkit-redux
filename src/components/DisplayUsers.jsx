import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { MdDeleteForever } from "react-icons/md";
import { removeUser } from "../store/slices/UserSlice";
function DisplayUsers() {
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.users;
  });
  // console.log(data)
  const deleteUser = (id) => {
    dispatch(removeUser(id));
  };
  return (
    <Wrapper>
      {data.map((user, id) => {
        return (
          <li key={id}>
            <div>{user}</div>
            <button className="btn-delete" onClick={() => deleteUser(id)}>
              <MdDeleteForever className="delete-icon" />
            </button>
          </li>
        );
      })}
    </Wrapper>
  );
}
const Wrapper = styled.section`
  li {
    border-bottom: 1px solid gray;
    display: flex;
    justify-content: space-between;
    padding: 0px 20px;
    align-items:center;
  }
  button {
    background-color: #000;
    border-radius:4px;
    border: none;
    padding: 5px 10px;
    
  }
`;

export default DisplayUsers;

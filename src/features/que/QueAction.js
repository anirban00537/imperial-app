import { addQue } from "./QueSlice";

export const setQueAction = (payload) => async (dispatch) => {
  try {
    dispatch(addQue(payload));
  } catch (error) {
    console.error(error.message);
  }
};

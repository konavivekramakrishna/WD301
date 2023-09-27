import { API_ENDPOINT } from "../../config/constants";

export const fetchAllMembers = async (dispatch: any) => {
  const secretToken = localStorage.getItem("authToken") ?? "";

  try {
    dispatch({
      type: "FETCH_ALL_MEMBERS_REQUEST",
    });

    const res = await fetch(`${API_ENDPOINT}/users`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${secretToken}`,
      },
    });
    const resdata = await res.json();
    dispatch({
      type: "FETCH_ALL_MEMBERS_SUCCESS",
      payload: resdata,
    });
  } catch (error) {
    console.log("Error fetching members:", error);
    dispatch({
      type: "FETCH_ALL_MEMBERS_FAILURE",
      payload: "Unable to load members",
    });
  }
};

export const AddMember = async (dispatch: any, dataToPost: any) => {
  try {
    const secretToken = localStorage.getItem("authToken") ?? "";
    const res = await fetch(`${API_ENDPOINT}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${secretToken}`,
      },
      body: JSON.stringify(dataToPost),
    });
    if (!res.ok) {
      throw new Error("Failed to Check Again create member");
    }

    const resdata = await res.json();
    if (resdata.errors && resdata.errors.length > 0) {
      return { ok: false, error: resdata.errors[0].message };
    }
    dispatch({ type: "ADD_MEMBER_SUCCESS", payload: resdata });
    return { ok: true };
  } catch (error) {
    console.log("Failed Operation");
    return { ok: false, error };
  }
};

export const deleteMemberWithId = async (dispatch: any, memberId: number) => {
  try {
    const secretToken = localStorage.getItem("authToken") ?? "";
    const res = await fetch(`${API_ENDPOINT}/users/${memberId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${secretToken}`,
      },
    });
    if (!res.ok) {
      throw new Error("Failure while delete member");
    }
    const resdata = await res.json();
    if (resdata.errors && resdata.errors.length > 0) {
      return { ok: false, error: resdata.errors[0].message };
    }
    dispatch({ type: "DELETE_MEMBER_SUCCESS", payload: memberId });
    return { ok: true };
  } catch (error) {
    console.log("Failed Operation");
    return { ok: false, error };
  }
};

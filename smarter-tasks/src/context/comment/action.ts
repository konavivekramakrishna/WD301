import { API_ENDPOINT } from "../../config/constants";

export const fetchAllCommentsRequest = async (
  dispatch: any,

  project_id: string,
  task_id: string,
) => {
  const secretToken = localStorage.getItem("authToken") ?? "";

  try {
    dispatch({
      type: "FETCH_ALL_COMMENTS_REQUEST",
    });
    const res = await fetch(
      `${API_ENDPOINT}/projects/${project_id}/tasks/${task_id}/comments`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${secretToken}`,
        },
      },
    );
    const data = await res.json();
    dispatch({
      type: "FETCH_ALL_COMMENTS_SUCCESS",
      payload: {
        comments: data,
      },
    });
  } catch (error) {}
  console.log("Error while getting comments");
  dispatch({
    type: "FETCH_ALL_COMMENTS_FAILURE",
    payload: "Error while getting comments",
  });
};

export const addComment = async (
  dispatch: any,
  task_id: string,
  project_id: string,
  comment: string,
) => {
  try {
    const secretToken = localStorage.getItem("authToken") ?? "";

    const res = await fetch(
      `${API_ENDPOINT}/projects/${project_id}/tasks/${task_id}/comments`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${secretToken}`,
        },
        body: JSON.stringify({
          description: comment,
        }),
      },
    );

    if (!res.ok) {
      throw new Error("Error while adding comment");
    }

    const data = await res.json();
    if (data.errors && data.errors.length > 0) {
      return { ok: false, error: data.errors[0].message };
    }

    dispatch({
      type: "ADD_COMMENT_SUCCESS",
      payload: data,
    });
    fetchAllCommentsRequest(dispatch, project_id, task_id);
  } catch (error) {}
};

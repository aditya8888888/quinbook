export const FETCH_UTIL = async (
  url,
  payload,
  method,
  successCallback,
  failCallback
) => {
  // debugger
  console.log(payload.value)
  const options = {
    method: method,
    headers: {
      "Content-Type": "application/json",
      // "Authorization": "Bearer " + token,
    },

    body: JSON.stringify(payload.value),
  };

  try {
    const response = await fetch(url, options);
    const jsonResponse = await response.json();
    successCallback(jsonResponse);
  } catch (error) {
    failCallback();
  }
};

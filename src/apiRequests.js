async function apiRequest(
  url = "",
  optionalData = null,
  errorData = null,
  resultData = null
) {
  try {
    const response = await fetch(url, optionalData);
    if (!response.ok) throw Error("Please reload");
    console.log(response);
    const result = await response.json();
    resultData = result;
    //console.log(result);
  } catch (error) {
    errorData = error.message;
    console.log(error.message);
  } finally {
    return { errorData, resultData };
  }
}

export default apiRequest;

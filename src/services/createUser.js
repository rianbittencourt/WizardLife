
const createUser = async (accessToken) => {
  try {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
      "X-Custom-Data": JSON.stringify({
        provider: "google",
        source: "mobile",
      }),
    };

    const response = await fetch("https://wizard-life.vercel.app/user/create", {
      method: "POST",
      headers: headers,
    });

    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error(error);
  }
};
export default createUser;

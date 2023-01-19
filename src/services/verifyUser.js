import createUser from "./createUser";

const verifyUser = async (accessToken) => {
  try {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
      "X-Custom-Data": JSON.stringify({
        provider: "google",
        source: "mobile",
      }),
    };

    const response = await fetch("https://wizard-life.vercel.app/user", {
      method: "GET",
      headers: headers,
    });

    const json = await response.json();
    console.log(json.result);
    if (Object.keys(json.result).length === 0) {
      console.log("Usuário não criado");
      createUser(accessToken);
      console.log("Função createUser foi efetuada")
      
      
    } else {
      console.log("Usuário existe");
      
    }
  } catch (error) {
    console.error(error);
  }
};
export default verifyUser;

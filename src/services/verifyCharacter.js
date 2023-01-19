const verifyCharacter = async (accessToken, navigation) => {
  try {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
      "X-Custom-Data": JSON.stringify({
        provider: "google",
        source: "mobile",
      }),
    };

    const response = await fetch("https://wizard-life.vercel.app/character", {
      method: "GET",
      headers: headers,
    });

    const characterjson = await response.json();

    console.log(characterjson.result);
    if (Object.keys(characterjson.result).length === 0) {
      console.log("Character não criado");
      navigation.navigate("CharacterCreate", { accessToken });
    } else {
      console.log("Character existe");
      navigation.navigate("Play", { accessToken, characterjson });
    }
  } catch (error) {
    console.error(error);
  }
};
export default verifyCharacter;

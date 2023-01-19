const createCharacter = async (accessToken, nickname, navigation) => {
    try {
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
        "X-Custom-Data": JSON.stringify({
          provider: "google",
          source: "mobile",
        }),
      };
      const body = JSON.stringify({
        name: (nickname)
      });
  
      const response = await fetch("https://wizard-life.vercel.app/character/create", {
        method: "POST",
        headers: headers,
        body: body
      });
  
      const json = await response.json();
      const characterjson = json
      console.log(json);
      
      navigation.navigate("Play", { accessToken, characterjson });
      
      
    } catch (error) {
      console.error(error);
    }
  };
  export default createCharacter;
  
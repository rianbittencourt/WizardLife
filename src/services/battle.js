const battle = async (accessToken) => {
    try {
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
        "X-Custom-Data": JSON.stringify({
          provider: "google",
          source: "mobile",
        }),
      };
   
  
      const response = await fetch("https://wizard-life.vercel.app/battle/hunt", {
        method: "POST",
        headers: headers,
      });
  
      const json = await response.json();
    
      const battleResult = json
    
      
    
      
      
    } catch (error) {
      console.error(error);
    }
  };
  export default battle;
  
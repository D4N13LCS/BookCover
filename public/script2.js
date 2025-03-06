window.addEventListener("load", async () => {
    if(sessionStorage.getItem("Key")){
        try {
            const result = await fetch(`http://localhost:3000/login/decode`, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({"jwt": sessionStorage.getItem("Key")})
            })

            const data = await result.json();

            const currentTime = Date.now();
            const expirationTime = data.exp * 1000;
            if (currentTime > expirationTime) {
                sessionStorage.removeItem("User1");
                sessionStorage.removeItem("Key");
                sessionStorage.removeItem("user_id");
                alert("Sua sessão expirou. Faça login novamente!");
            }

        } catch (error) {
            console.error(error);
            alert("Ocorreu um erro. Tente novamente mais tarde.");
        }
    }
});

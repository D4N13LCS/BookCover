const formlog = document.querySelector('form#log');
const url_log = "http://localhost:3000/login";

formlog.addEventListener('submit', async (evt)=>{
    evt.preventDefault();

    try {
        const response = await fetch(url_log, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({username: document.querySelector("#iuser").value, key: document.querySelector('#ikey').value})
        })

        const data = await response.json();
        if(data.token){
            sessionStorage.setItem("Key", data.token);
            sessionStorage.setItem("User1", document.querySelector("#iuser").value)
            sessionStorage.setItem("user_id", data.result[0].id)
            console.log('ok')
            window.alert('Seja Bem Vindo ' + document.getElementById("iuser").value)
            window.location.href = "index.html";
        }else{
            console.log('sem ok')
            window.alert('Usuário ou senha inválido')
        }
    } catch (error) {
        console.log(error)
        window.alert('algo deu errado!')
    }

})

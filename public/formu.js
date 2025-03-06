const campo_senha = document.getElementById('ikey')
const form = document.querySelector('#cad');

form.addEventListener('submit', async (evt)=>{
	evt.preventDefault();
    
    try {
        const res = await fetch("http://localhost:3000/cadastro", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                username: document.getElementById('iuser').value,
                key: document.getElementById('ikey').value
            })
        })

        if(res.ok){
            console.log('ok')
            window.alert('Cadastro realizado com sucesso!');
            window.location.href = "logIn.html";
        }else{
            console.log(res);
            window.alert('Usuário indisponível');
        }

    } catch (error) {
        console.log(error);
        window.alert('Algo deu errado');
    }
})

const campo_senha = document.getElementById('ikey')
const form = document.querySelector('#cad');
let letraMaiuscula = 0;
let cont_num = 0;

console.log(form)
form.addEventListener('submit', (evt)=>{
	evt.preventDefault();
	console.log(document.getElementById('iuser').value, document.getElementById('ikey').value)
        fetch("http://localhost:3000/cadastro", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                username: document.getElementById('iuser').value,
                key: document.getElementById('ikey').value
            })
            }).then((res)=>{
                if(res.ok){
                    console.log('ok')
                    window.alert('Cadastro realizado com sucesso!');
                    window.location.href = "logIn.html";
                }else{
		    console.log(res);
                    console.log('noão ok');
                    window.alert('Algo deu errado');
                }
            }).catch((erro)=>{
		console.log(erro);
                console.log('ALgo deu errado, paizão!');
                window.alert('Algo deu errado');
        })
})

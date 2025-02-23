# BOOKCOVER - Biblioteca virtual 
<p> Uma biblioteca virtual na qual permite a

compra de livros, bem como pode

adicioná-los ao carrinho. Além do mais,

conta com o cadastro e o login de

usuários.</p>

Tecnologias: ![HTML5](https://img.shields.io/badge/-HTML5-orange) ![CSS3](https://img.shields.io/badge/-CSS3-skyblue) ![JS](https://img.shields.io/badge/-JavaScript-yellow) ![Node.js](https://img.shields.io/badge/-Node.js-green) ![MySQL](https://img.shields.io/badge/-MySQL-darkblue)

# Passos iniciais:

Para testar a aplicação, clone esse repositório na sua máquina local e, no terminal, rode o seguinte código: npm start. Após isso, abra o arquivo index.html no browser. Agora é só testar.

# Modo de usar:

Para utilizar as funções de comprar, adicionar ao carrinho e remover do carrinho, é necessário fazer Login, senão você receberá uma mensagem de erro. Caso não tenha uma conta, basta clicar em Sign up no menu superior.

## comprar: 

Após logado, ao clicar no botão de compra de um dos livros da tela, o usuário escolherá a quantidade e terá acesso ao preço, bem como outros detalhes do mesmo. Depois de selecionar a quantidade, basta clicar no botão de confirmação. 

## adicionar ao carrinho:

Após logado, ao clicar no botão de adicionar ao carrinho contido nos livros do site, o usuário escolherá a quantidade e terá acesso ao preço, bem como outros detalhes do mesmo. Depois o usuário receberá uma mensagem de sucesso da operação. Para ver os itens do seu carrinho, clique em "carrinho" no menu superior.

## remover do carrinho:

Uma vez o carrinho aberto, você poderá visualizar todos os itens contidos nele. Cada item terá um botão para remover o livro adicionado ao carrinho. Após remover o item do carrinho, o usuário receberá um aviso de sucesso da operação e a aba de carrinho automaticamente será fechada. Quando for aberta em seguida, o item não estará mais lá.

# Página principal:

## -Menu da página-



![menuBook](https://github.com/user-attachments/assets/5a252962-8dc9-4881-9dad-14c5ee7ffc9a)



## seção recentes



![recentesBook](https://github.com/user-attachments/assets/b5b7c579-cc7c-44dc-a01c-640567ecd833)



## -seção recomendados-



![bookRecomendado](https://github.com/user-attachments/assets/d98e4215-4fed-456d-8ce7-6992e986c79f)



## -seção de promoções-



![promoBook](https://github.com/user-attachments/assets/1f8fa025-c962-4b7c-9140-ac4921a1b1b5)



## -seção sobre nós-



![sobreBook](https://github.com/user-attachments/assets/a68a89e2-758e-457c-94e7-02636c4fd7f8)



### funcionalidades da página principal:

#### comprar:






![bookcompra](https://github.com/user-attachments/assets/054ac2d6-29c0-46d7-8773-9624b5505582)







#### adicionar ao carrinho:




![bookAddCart](https://github.com/user-attachments/assets/a2a6c796-12ed-4978-9f63-f9b9f68bedba)






# Página de Login:

![loginbook](https://github.com/user-attachments/assets/4b3cca04-74fb-4eec-a3df-1c409e8544cc)



# Página de Cadastro:

![cadastroBook](https://github.com/user-attachments/assets/42e353eb-6029-440d-946d-3e83d713a101)


# Teste você mesmo

<img src="https://1000logos.net/wp-content/uploads/2021/11/Docker-Logo.png" height="120"/>

Para testar essa aplicação, é necessário possuir o docker instalado e as seguintes portas disponíveis: 3000 e 3306.

Após o docker instalado, faça o seguinte: 

- clone esse repositório na sua máquina local por meio do seguinte comando: <code> git clone https://github.com/D4N13LCS/BookCover </code>
- dentro do diretório onde os arquivos foram clonados, entre no diretório BookCover e utilize o comando: <code> docker compose up --build </code>
- Por último, acesse http://localhost:3000 no seu navegador.

## Banco de dados

Caso deseje averiguar o comportamento das ações no banco de dados ou consultar os dados inseridos e/ou atualizados, faça o seguinte:

- Execute o comando <code> docker ps </code> para obter o ID do container do banco de dados
- Execute o comando <code> docker exec -it ID-do-container-do-banco-de-dados mysql -u manager -p</code> para acessar o banco de dados
- Coloque manager quando for pedida a senha
- após isso execute <code> USE library; </code>

Agora basta testar o banco!

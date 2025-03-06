const express = require('express');
const rotaCarrinho = express.Router();
const db = require('../db').pool;
const autenticar = require('./login').autenticar;
const mysql = require('mysql2');

rotaCarrinho.get('/:tit', autenticar, (req, res, next)=>{
    let tit = req.params.tit;
    console.log(tit)
    db.getConnection((error, conex)=>{
        if(error){
		conex.release(); 
		return res.status(500).send({msg: 'erro na conexão'})
	}
        conex.query(`select * from livros where titulo_livro= ?`, [tit], (error, result)=>{
	    conex.release();
            if (error){return res.status(404).send({text: 'livro não encontrado'})}
            return res.status(201).send({
                preco: result[0].preco,
                quantidade: result[0].quantidade,
                link: result[0].item_link,
                titulo: tit
            })
        })
    })
})
 
rotaCarrinho.get('/itens/:user_id', autenticar, (req, res, next)=>{
    let user_id = req.params.user_id
    db.getConnection((error, conex)=>{
        if(error){
		conex.release(); 
		return res.status(500).send({msg: 'erro na conexão'})
}
        conex.query(`select * from cart_items where user_id = ?`, [user_id], (error, result)=>{
            conex.release();
            if (error){return res.status(404).send({text: 'livro não encontrado'})}

            return res.status(200).send(result)
        })
    })
})

rotaCarrinho.post('/', autenticar, (req, res, next)=>{
    db.getConnection((error, conex)=>{
        if(error){return res.status(500).send({mens: 'conexão de bosta'})}

        conex.query(`SELECT * FROM cart_items where item = ? AND user_id = ?`, [req.body.item, req.body.user_id], (error, result)=>{
            if(error){
		conex.release();
		res.status(500).send({txt: "erro no select"})
		}
            if(result.length > 0){
		conex.release();
                return res.status(302).send({msg: "item já está adicionado"})
            }else{
                let qr = `INSERT INTO cart_items(user_id,item, qtd_item, preco, link) VALUES(?, ?, ?, ?, ?)`
                conex.query(qr, [req.body.user_id, req.body.item, req.body.qtd_item, req.body.preco, req.body.link], (error, result)=>{
		conex.release();
                if(error){ return res.status(500).send({msg: 'erro na query'})}
                return res.status(200).send({msg: 'produto adicionado ao carrinho com sucesso!'})
                })        
            }
        })

        
    })
})

rotaCarrinho.delete('/', autenticar, (req, res, next)=>{
    db.getConnection((err, conex)=>{
        if(err){
		conex.release(); 
		return res.status(500).send({error: err.message})
		}
        conex.query(`SELECT * FROM cart_items where user_id = ?`, [req.body.user_id], (error, result)=>{
            if(error){ 
		conex.release();
		return res.status(404).send({msg: "registro não encontrado"})
		}
            conex.query(`DELETE FROM cart_items WHERE item = ? AND user_id = ?`, [req.body.titulo_livro, req.body.user_id], (err, result)=>{
		conex.release();
                if(err){ return res.status(500).send({msg: "erro no delete"})}
                return res.status(200).send({msg: "registro deletado com sucesso"})
            })
        })
    })
});

module.exports = {rotaCarrinho};

const db = require('../db').pool;
const express = require('express');
const rotaCad = express.Router();

rotaCad.post("/", (req, res, next) => {
    console.log(req.body.username, req.body.key);
    db.getConnection((error, conex) => {
        if (error) {
	    console.log('Primeiro if falhou');
            return res.status(500).send({ "Message error": error.message });
        }

        conex.query('SELECT * FROM users WHERE username = ?', [req.body.username], (error, result) => {
            if (error) {
		    console.log('Primeira query falhou');
                conex.release();
                return res.status(501).send({ msg: error });
            }

            if (result.length > 0) {
                conex.release();
                return res.status(401).send({ mensagem: "Usuário indisponível" });
            }

            conex.query('INSERT INTO users (username, user_key) VALUES (?, ?)', [req.body.username, req.body.key], (error, result) => {
                if (error) {
		            console.log('segunda query falhou');
                    conex.release();
                    return res.status(500).send({ erro: error, response: null });
                }

                return res.status(200).send({message: "Cadastro realizado com sucesso"})

            });
        });
    });
});

module.exports = rotaCad;


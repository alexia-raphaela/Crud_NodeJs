import { banco } from '../data/index.js';

export const getUsuarios = (_, res) => {
  const comando = "SELECT * FROM usuarios";

  banco.query(comando, (err, data) => {
    if(err) return res.json(err);
    return res.status(200).json(data);
  })
}

export const insertUsuarios = (req, res) => {
  const comando = "INSERT INTO usuarios(`nome`, `email`, `telefone`, `data_nascimento`)VALUES(?)";

  const values = [
    req.body.nome,
    req.body.email,
    req.body.telefone,
    req.body.data_nascimento,
  ];

  banco.query(comando, [values], (err) => {
    if (values ==""){
      return res.json(err);
    }
    return res.status(200).json("Recebido com sucesso");
  })
}

export const deleteUsuarios = (req, res) => {
  const comando = "DELETE FROM usuarios WHERE `id` = ?";

  banco.query(comando, [req.params.id], (err) => {
    if (err) return res.json(err);
    return res.status(200).json("Deletado com sucesso");
  })  
};

export const updateUsuarios = (req, res) => {
  const comando = "UPDATE usuarios SET `nome` = ?, `email` = ?, `telefone` = ?, `data_nascimento` = ? WHERE `id` = ?";
 
  const values = [
    req.body.nome,
    req.body.email,
    req.body.telefone,
    req.body.data_nascimento,
  ];
 
  banco.query(comando, [...values, req.params.id], (err) => {
    if (err) return res.json(err);
 
    return res.status(200).json("Usuário atualizado com sucesso.");
  });
};
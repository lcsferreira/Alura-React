import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';

export default function DadosEntrega({ aoEnviar }) {
  const [cep, setCep] = useState(0);
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState(0);
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");


  return (
    <form
      onSubmit={
        (event) => {
          event.preventDefault();
          aoEnviar({ cep, endereco, numero, estado, cidade });
        }
      }>
      <TextField
        value={cep}
        onChange={(event) => {
          setCep(event.target.value);
        }}
        id="cep"
        label="CEP"
        type="number"
        margin="normal"
        variant="outlined"
      />
      <TextField
        value={endereco}
        onChange={(event) => {
          setEndereco(event.target.value);
        }}
        id="endereco"
        label="Endereço"
        type="text"
        margin="normal"
        variant="outlined"
        fullWidth
      />
      <TextField
        value={numero}
        onChange={(event) => {
          setNumero(event.target.value)
        }}
        id="numero"
        label="Número"
        type="number"
        margin="normal"
        variant="outlined"
      />
      <TextField
        value={estado}
        onChange={(event) => {
          setEstado(event.target.value)
        }}
        id="estado"
        label="Estado"
        type="text"
        margin="normal"
        variant="outlined"
      />
      <TextField
        value={cidade}
        onChange={(event) => {
          setCidade(event.target.value)
        }}
        id="cidade"
        label="Cidade"
        type="text"
        margin="normal"
        variant="outlined"
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
      >
        Finalizar cadastro
      </Button>
    </form>
  );
}
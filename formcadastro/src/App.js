import { Container, Typography } from '@material-ui/core';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import ValidacoesCadastro from './contexts/validacoesCadastro';
import { validarCpf, validarSenha } from "./models/cadastro"

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">
        Formulário de cadastro
      </Typography>
      <ValidacoesCadastro.Provider
        value={{ cpf: validarCpf, senha: validarSenha }}
      >
        <FormularioCadastro aoEnviar={enviarForm} />
      </ValidacoesCadastro.Provider>
    </Container>
  );
}

function enviarForm(dados) {
  console.log(dados);
}

export default App;

import "./App.css";
import { useState } from "react";
import GlobalStyle from "./styles";
import { Quadrado, Button } from "./styles";

// Tarefas:
// TODO: - O botão de login deve disparar a função login() e simular o login.
// TODO: - Desabilite o botão de Login caso o e-mail esteja em branco OU a senha for menor que 6 dígitos.
// TODO: - Desabilite o botão de Login equanto você está executando o login.

/* OPCIONAL */

// TODO: - Mostre um alerta caso o login seja efetuado com sucesso (javascript alert)
// TODO: - Mostre uma mensagem de erro de login() caso o Login falhe. A mensagem deve ser limpa a cada nova tentativa de Login.

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mensagem, setMensagem] = useState("Entrar");
  function Login() {
    setMensagem("Carregando");
    setTimeout(() => alert("Bem vindo ao site"), 3000);
    setTimeout(() => location.reload(), 3001);
  }

  function handleSubmit(event: any) {
    event.preventDefault();
    setEmail("");
    setPassword("");
  }

  return (
    <>
      <GlobalStyle />

      <Quadrado>
        <img src="public/exp.png" alt="" style={{ marginTop: "30px" }} />
        <h2 style={{ color: "#003C5E", display: "flex" }}>Bem vindo</h2>
        <p style={{ color: "#B0B0B0" }}>entre com suas credenciais embaixo</p>

        <form onSubmit={handleSubmit} style={{ display: "flex" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label
              style={{
                color: "#003C5E",
                display: "flex",
                flexDirection: "column",
              }}>
              Login
            </label>

            <input
              autoFocus
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label
              style={{
                color: "#003C5E",
                display: "flex",
                flexDirection: "column",
              }}>
              Password
            </label>

            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {email.length > 0 && password.length >= 6 ? (
              <Button
                onClick={Login}
                type="submit"
                style={{ background: "#003c5e" }}>
                {mensagem}
              </Button>
            ) : (
              <Button
                type="submit"
                disabled={true}
                style={{ background: "#d5d5d5d5" }}>
                {mensagem}
              </Button>
            )}
          </div>
        </form>
      </Quadrado>
    </>
  );
}

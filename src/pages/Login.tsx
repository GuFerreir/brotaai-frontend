import React, {
  useState,
} from "react";
import {
  useNavigate,
} from 'react-router-dom';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Input,
  Link,
} from "@nextui-org/react";
import authStore from '../stores/auth';

function Login() {
  const navigate = useNavigate();
  const { login } = authStore(); 

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email || !password) return;

    try {
      login({ email, password });
      setEmail('');
      setPassword('');
      navigate('/kit-list');
    } catch {
      window.alert('Credenciais Inválidas');
    }
  }

  return (
    <div className="flex w-full justify-center items-center">
      <Card className="my-20 p-2 w-64">
        <CardBody>
          <Input
            variant="bordered"
            color="primary"
            type="email"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            className="mt-4"
            isClearable
            variant="bordered"
            color="primary"
            type="password"
            label="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </CardBody>
        <CardFooter className="flex-col justify-center items-center">
          <Button
            color="primary"
            fullWidth
            onPress={() => handleLogin()}
          >
            Entrar
          </Button>
          <Link
            className="mt-3 cursor-pointer"
            onClick={() => navigate('/register')}
          >
            Não tem conta? Cadastre-se!
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Login;

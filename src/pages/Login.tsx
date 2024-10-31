import React from "react";
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
import {
  FaRegEyeSlash,
  FaRegEye,
} from "react-icons/fa6";
import { Formik } from 'formik';
import * as yup from 'yup';
import authStore from '../stores/auth';

const validationSchema = yup.object().shape({
  email: yup.string()
    .email('Email inválido')
    .required('Campo obrigatório'),
  password: yup.string()
    .required('Campo obrigatório'),
});

type FormData = yup.InferType<typeof validationSchema>;

function Login() {
  const navigate = useNavigate();
  const { login } = authStore(); 

  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleLogin = ({ email, password }: FormData) => {
    if (!email || !password) return;

    try {
      login({ email, password });
      navigate('/kit-list');
    } catch {
      window.alert('Credenciais Inválidas');
    }
  }

  return (
    <div className="flex w-full justify-center items-center">
      <Card className="my-20 p-2 w-64">
        <Formik
          validationSchema={validationSchema}
          initialValues={{
            email: '',
            password: '',
          }}
          onSubmit={handleLogin}
        >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <>
            <CardBody>
              <Input
                variant="bordered"
                color="primary"
                type="email"
                label="Email"
                isInvalid={errors.email && touched.email ? true : false}
                errorMessage={touched.email ? errors.email : null}
                value={values.email}
                onChange={(e) => handleChange('email')(e.target.value)}
                onBlur={handleBlur('email')}
              />
              <Input
                className="mt-4"
                isClearable
                variant="bordered"
                color="primary"
                type={isVisible ? "text" : "password"}
                label="Senha"
                endContent={
                  <button
                    className="focus:outline-none"
                    type="button"
                    onClick={toggleVisibility}
                    aria-label="toggle password visibility"
                  >
                  {isVisible ? (
                      <FaRegEyeSlash className="text-2xl text-primary pointer-events-none" />
                      ) : (
                        <FaRegEye className="text-2xl text-primary pointer-events-none" />
                        )}
                  </button>
                }
                isInvalid={errors.password && touched.password ? true : false}
                errorMessage={touched.password ? errors.password : null}
                value={values.password}
                onChange={(e) => handleChange('password')(e.target.value)}
                onBlur={handleBlur('password')}
              />
            </CardBody>
            <CardFooter className="flex-col justify-center items-center">
              <Button
                color="primary"
                fullWidth
                onPress={() => handleSubmit()}
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
          </>
        )}
        </Formik>
      </Card>
    </div>
  );
}

export default Login;

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
} from "@nextui-org/react";
import {
  FaRegEyeSlash,
  FaRegEye,
} from "react-icons/fa6";
import { Formik } from 'formik';
import * as yup from 'yup';
import authStore from '../stores/auth';

const validationSchema = yup.object().shape({
  name: yup.string()
    .required('Campo obrigatório'),
  email: yup.string()
    .email('Email inválido')
    .required('Campo obrigatório'),
  address: yup.string()
    .required('Campo obrigatório'),
  password: yup.string()
    .min(8, 'Senha precisa ter no mínimo 8 caracteres')
    .required('Campo obrigatório'),
  confirmPassword: yup.string()
    .oneOf(
      [yup.ref('password'), ''],
      'Senhas não coincidem',
    )
    .required('Campo obrigatório'),
});

type FormData = yup.InferType<typeof validationSchema>;

function Register() {
  const navigate = useNavigate();
  const { register } = authStore(); 

  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleRegister = ({
    name,
    email,
    address,
    password,
  }: FormData) => {
    try {
      register({
        name,
        email,
        address,
        password,
      });
      navigate('/kit-list');
    } catch {
      window.alert('Email já cadastrado');
    }
  }

  return (
    <div className="w-full justify-center items-center">
      <Card className="my-20 p-2 max-w-[400px] mx-auto items-center">
        <h1 className="text-2xl font-bold text-primary drop-shadow-md my-2">
          Cadastre-se
        </h1>
        <Formik
          validationSchema={validationSchema}
          initialValues={{
            name: '',
            email: '',
            address: '',
            password: '',
            confirmPassword: '',
          }}
          onSubmit={handleRegister}
        >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <>
            <CardBody>
              <Input
                variant="bordered"
                color="primary"
                label="Nome"
                isInvalid={errors.name && touched.name ? true : false}
                errorMessage={touched.name ? errors.name : null}
                value={values.name}
                onChange={(e) => handleChange('name')(e.target.value)}
                onBlur={handleBlur('name')}
              />
              <Input
                className="mt-4"
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
                variant="bordered"
                color="primary"
                label="Endereço"
                isInvalid={errors.address && touched.address ? true : false}
                errorMessage={touched.address ? errors.address : null}
                value={values.address}
                onChange={(e) => handleChange('address')(e.target.value)}
                onBlur={handleBlur('address')}
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
              <Input
                className="mt-4"
                isClearable
                variant="bordered"
                color="primary"
                type={isVisible ? "text" : "password"}
                label="Confirme a Senha"
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
                isInvalid={errors.confirmPassword && touched.confirmPassword ? true : false}
                errorMessage={touched.confirmPassword ? errors.confirmPassword : null}
                value={values.confirmPassword}
                onChange={(e) => handleChange('confirmPassword')(e.target.value)}
                onBlur={handleBlur('confirmPassword')}
              />
            </CardBody>
            <CardFooter className="flex-col justify-center items-center">
              <Button
                className="font-bold tracking-wide"
                color="primary"
                fullWidth
                onPress={() => handleSubmit()}
              >
                Cadastrar
              </Button>
            </CardFooter>
          </>
        )}
        </Formik>
      </Card>
    </div>
  );
}

export default Register;

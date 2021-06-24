import {Flex, Button, Stack } from '@chakra-ui/react';
import { Input } from '../components/Form/Input';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

type SignInFormData = {
  email: string
  password: string
}

const SignInValidationSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatorio!').email('E-mail invalido!'),
  password: yup.string().required('Senha obrigatoria!')
})

export default function Home() {
  const { register, handleSubmit, formState: { errors, isSubmitting} } = useForm({
    resolver: yupResolver(SignInValidationSchema)
  })

  async function sleep(timeMs: number) {
    return new Promise(resolve => setTimeout(resolve, timeMs))
  }

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await sleep(2000)
    console.log(values)
  }

  return (
   <Flex 
      w="100vw" 
      h="100vh" 
      align="center" 
      justify="center">
     <Flex
      as="form"
      w="100%"
      maxW="360px"
      bg="gray.800"
      p="8"
      borderRadius="8"
      flexDir="column"
      onSubmit={handleSubmit(handleSignIn)}
     >
       <Stack spacing="4">
         <Input 
          type="email" 
          name="email" 
          label="E-mail"
          error={errors.email}
          {...register('email')}/>
         <Input 
          type="password" 
          name="password" 
          label="Password"
          error={errors.password}
          {...register('password')}/>
         
        
        
      </Stack>
      <Button 
        type="submit" 
        mt="6"
        colorScheme="pink"
        size="lg"
        isLoading={isSubmitting}
        >Entrar</Button>
     </Flex>
   </Flex>
  )
}

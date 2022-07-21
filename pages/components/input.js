import { 
    FormControl,
    FormLabel,
    Input,
    FormErrorMessage
  } from '@chakra-ui/react'

export const InputForm = ({ label, name, error = null, ...rest}) => {
    return (
        <FormControl marginY="2rem"  isInvalid={!!error}>
          <FormLabel>{label}</FormLabel>
          <Input name={name} id={name} {...rest}/>

          {!!error && <FormErrorMessage>{error}</FormErrorMessage>}
        </FormControl>
    )
}
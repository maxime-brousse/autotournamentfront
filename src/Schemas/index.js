import * as Yup from 'yup'

/**
 * Schema for validating user sign-up data.
 * @type {import('yup').ObjectSchema}
 */
const SignupSchema = Yup.object().shape({
  pseudonyme: Yup.string()
    .required('un pseudonyme est nécessaire')
    .matches(/[^[\p{L}|\p{N}|\s]/, 'Votre pseudo ne doit pas avor de caractère spéciaux')
    .max(50, 'Votre pseudo doit faire moins de 50 charactère'),
  mail: Yup.string().email('email invalide').required('Un émail est nécessaire'),
  password: Yup.string()
    .required('Un mot de passe est nécessaire')
    .min(6, 'Mot de passe doit faire plus que 6 charactère')
    .max(20, 'Mot de passe doit faire moins de 20 charactère'),
})

/**
 * Schema for validating user sign-in data.
 * @type {import('yup').ObjectSchema}
 */
const SignInSchema = Yup.object().shape({
  mail: Yup.string().email('email invalide').required('Un émail est nécessaire'),
  password: Yup.string()
    .required('Un mot de passe est nécessaire')
    .min(6, 'Mot de passe doit faire plus que 6 charactère')
    .max(20, 'Mot de passe doit faire moins de 20 charactère'),
})

export { SignInSchema, SignupSchema }

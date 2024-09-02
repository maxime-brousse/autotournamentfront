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

/**
 * Schema for validating user create data.
 * @type {import('yup').ObjectSchema}
 */
const CreateUserSchema = Yup.object().shape({
  pseudonyme: Yup.string()
    .required('un pseudonyme est nécessaire')
    .matches(/[^[\p{L}|\p{N}|\s]/, 'Votre pseudo ne doit pas avor de caractère spéciaux')
    .max(50, 'Votre pseudo doit faire moins de 50 charactère'),
  mail: Yup.string().email('email invalide').required('Un émail est nécessaire'),
  password: Yup.string()
    .required('Un mot de passe est nécessaire')
    .min(6, 'Mot de passe doit faire plus que 6 charactère')
    .max(20, 'Mot de passe doit faire moins de 20 charactère'),
  isAdmin: Yup.boolean().required("point est nécessaire"),
  point: Yup.number().required("point est nécessaire").positive("point doit être positif").integer("point doit être un integer")
})

/**
 * Schema for validating user create data.
 * @type {import('yup').ObjectSchema}
 */
const CreateTournamentSchema = Yup.object().shape({
  jeux: Yup.string()
    .required('un jeux est nécessaire')
    .matches(/[^[\p{L}|\p{N}|\s]/, 'le jeux ne doit pas avor de caractère spéciaux')
    .max(50, 'le jeux ne doit pas dépasser 50 charactères'),
  titreTournoi : Yup.string().required('Un titre est nécessaire')
    .max(150, 'le titre ne doit pas dépasser 150 charactères'),
  dateTournoi : Yup.date().required('une date est nécessaire'),
  descriptionTournoi: Yup.string()
    .max(250, 'Mot de passe doit faire moins de 250 charactères'),
  isSolo: Yup.boolean().required("isSolo est nécessaire"),
  récompensePoint: Yup.number().required("Une récompense est nécessaire").positive("récompense doit être positif").integer("récompense doit être un integer")
})

export { SignInSchema, SignupSchema, CreateUserSchema, CreateTournamentSchema }

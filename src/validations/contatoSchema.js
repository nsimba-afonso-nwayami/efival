import * as yup from "yup";

export const contatoSchema = yup.object().shape({
  nome: yup
    .string()
    .required("O nome é obrigatório")
    .min(3, "O nome deve ter pelo menos 3 caracteres"),

  email: yup
    .string()
    .required("O email é obrigatório")
    .email("Email inválido"),

  telefone: yup
    .string()
    .required("O telefone é obrigatório")
    .matches(
      /^(\+244)?\s?9\d{2}\s?\d{3}\s?\d{3}$/,
      "Telefone inválido (ex: +244 923 000 000)"
    ),

  assunto: yup
    .string()
    .required("O assunto é obrigatório")
    .min(5, "O assunto deve ser mais descritivo"),

  mensagem: yup
    .string()
    .required("A mensagem é obrigatória")
    .min(10, "A mensagem deve ter pelo menos 10 caracteres"),
});

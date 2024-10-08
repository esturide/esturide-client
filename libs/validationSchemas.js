import Joi from 'joi';

export const loginSchema = Joi.object({
  username: Joi.string().required().messages({
    'string.empty': 'El nombre de usuario es obligatorio',
    'any.required': 'El nombre de usuario es obligatorio',
  }),
  password: Joi.string().min(6).required().messages({
    'string.min': 'La contraseña debe tener al menos 6 caracteres',
    'string.empty': 'La contraseña es obligatoria', // Personalizamos el mensaje cuando está vacío
    'any.required': 'La contraseña es obligatoria',
  }),
});

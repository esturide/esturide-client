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

export const registrationValidationSchema = Joi.object({
  name: Joi.string().required().messages({
    'string.empty': 'El nombre no puede estar vacío.',
    'any.required': 'El nombre es obligatorio.',
  }),
  firstLastName: Joi.string().required().messages({
    'string.empty': 'El primer apellido no puede estar vacío.',
    'any.required': 'El primer apellido es obligatorio.',
  }),
  secondLastName: Joi.string().allow('').optional(),
  code: Joi.string().length(9).required().messages({
    'string.empty': 'El código no puede estar vacío.',
    'string.length': 'El código debe tener 9 caracteres.',
    'any.required': 'El código es obligatorio.',
  }),
  birthDate: Joi.date().max('now').required().messages({
    'date.base': 'La fecha de nacimiento debe ser una fecha válida.',
    'date.max': 'La fecha de nacimiento no puede ser en el futuro.',
    'any.required': 'La fecha de nacimiento es obligatoria.',
  }),
})

export const addressValidationSchema = Joi.object({
  address: Joi.string().required().messages({
    'string.empty': 'La dirección no puede estar vacía.',
    'any.required': 'La dirección es obligatoria.',
  }),
  phoneNumber: Joi.string().pattern(/^[0-9]{10}$/).required().messages({
      'string.empty': 'El número de teléfono no puede estar vacío.',
      'string.pattern.base': 'El número de teléfono debe tener 10 dígitos.',
      'any.required': 'El número de teléfono es obligatorio.',
    }),
  email: Joi.string().email({ tlds: { allow: false } }).required().messages({
    'string.empty': 'El correo electrónico no puede estar vacío.',
    'string.email': 'El correo electrónico debe ser válido.',
    'any.required': 'El correo electrónico es obligatorio.',
  }),
  password: Joi.string()
    .min(6)
    .pattern(new RegExp('(?=.*[A-Z])')) // Requerimos al menos una mayúscula
    .required()
    .messages({
      'string.min': 'La contraseña debe tener al menos 6 caracteres.',
      'string.pattern.base': 'La contraseña debe contener al menos una letra mayúscula.',
      'string.empty': 'La contraseña no puede estar vacía.',
      'any.required': 'La contraseña es obligatoria.',
    }),
  confirmPassword: Joi.string().valid(Joi.ref('password')).required().messages({
    'any.only': 'Las contraseñas no coinciden.',
    'string.empty': 'Debe confirmar la contraseña.',
    'any.required': 'Confirmar contraseña es obligatorio.',
  }),
});


import joi from 'joi';

export const userSchema = joi.object({
    username: joi
        .string()
        .regex(/^(?=[a-zA-Z0-9._]{4,25}$)(?!.*[_.]{2})[^_.].*[^_.]$/)
        .required()
        .label('Username'),
    password: joi
        .string()
        .regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,40}$/)
        .required()
        .label('Password'),
    email: joi
        .string()
        .regex(/^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/)
        .required()
        .label('E-mail'),
    nationality: joi.string().required(),
    birthdate: joi.string().required(),
});

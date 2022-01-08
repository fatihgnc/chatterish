import joi from 'joi';

export const userSchema = joi.object({
    username: joi
        .string()
        .regex(/^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/)
        .required(),
    password: joi
        .string()
        .regex(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,40}$/
        )
        .required(),
    confirmPassword: joi.ref('password'),
    email: joi
        .string()
        .regex(/^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/)
        .required(),
    nationality: joi.string().required(),
    birthdate: joi.string().required(),
});

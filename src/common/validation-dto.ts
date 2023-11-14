import { ValidationOptions } from "class-validator";


export function minLengthValidationOption(
    validationOption?: ValidationOptions,
) {
return {
    message:
    "El atributo $property debe ser mayor o igual a $constraint1 caracteres",
};
}
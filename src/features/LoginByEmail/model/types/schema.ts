import * as Yup from "yup";
export const schema = Yup.object({
  identifier: Yup.string().email().required(),
  password: Yup.string()
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters.")
    .required(),
});

export type FormData = Yup.InferType<typeof schema>;

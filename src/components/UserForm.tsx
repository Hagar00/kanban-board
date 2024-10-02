import { Controller, useForm } from "react-hook-form";
import InputText from "./InputText";

type UserFormData = {
  name: string;
  title: string;
  age: string;
  email: string;
  mobileNumber: string;
};
const defaultValues: UserFormData = {
  name: "",
  title: "",
  age: "",
  email: "",
  mobileNumber: "",
};
const UserForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormData>({ defaultValues });
  const onSubmit = handleSubmit((data) => console.log(data));

  const getFormErrorMessage = (name: keyof UserFormData) => {
    const error = errors[name];
    return error ? (
      <small className="text-red-500">{error.message}</small>
    ) : null;
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <Controller
          name="title"
          rules={{
            required: "Title is required",
            minLength: {
              value: 3,
              message: "title can not be less than 3 char",
            },
          }}
          control={control}
          render={({ field }) => (
            <InputText label="Title" required {...field} />
          )}
        />

        {getFormErrorMessage("title")}
      </div>

      <div>
        <Controller
          name="name"
          control={control}
          rules={{
            required: "name is required",
            minLength: {
              value: 3,
              message: "name can not be less than 3 char",
            },
          }}
          render={({ field }) => <InputText label="Name" required {...field} />}
        />
        {getFormErrorMessage("name")}
      </div>

      <div>
        <Controller
          name="age"
          control={control}
          rules={{
            required: "age is required",
            min: { value: 1, message: "age must be greater than one year" },
            max: { value: 100, message: "age must be smaller than 100 year" },
            pattern: {
              value: /^(100|[1-9][0-9]?)$/,
              message: "age must contain only numbers",
            },
          }}
          render={({ field }) => (
            <InputText
              {...field}
              label="Age"
              placeholder="enter your age"
              required
            />
          )}
        />
        {getFormErrorMessage("age")}
      </div>

      <div>
        <Controller
          name="email"
          control={control}
          rules={{
            required: "email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/i,
              message: "invalid email ",
            },
          }}
          render={({ field }) => (
            <InputText label="Email" {...field} required />
          )}
        />
        {getFormErrorMessage("email")}
      </div>

      <div>
        <Controller
          name="mobileNumber"
          control={control}
          rules={{
            required: "phone is required",
            pattern: {
              value: /^\d{11}$/,
              message: "Phone number must contain exactly 11 digits",
            },
          }}
          render={({ field }) => (
            <InputText label="Phone" {...field} required />
          )}
        />
        {getFormErrorMessage("mobileNumber")}
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Submit
      </button>
    </form>
  );
};

export default UserForm;

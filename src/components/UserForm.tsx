import { Controller, useForm } from "react-hook-form";

import { CardData, UserFormData } from "../types";
import InputText from "./InputText";
import { userService } from "../services/userService";

const defaultValues: UserFormData = {
  colKey: "unclaimed",
  name: "",
  title: "",
  age: "",
  email: "",
  mobileNumber: "",
};

const UserForm = ({
  onHide,
  selectedCard,
}: {
  onHide: () => void;
  selectedCard: (CardData & { index: number }) | null;
}) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserFormData>({
    mode: "onChange",
    defaultValues: selectedCard ? selectedCard : defaultValues,
  });

  const onSubmit = handleSubmit((data) => {
    if (selectedCard) {
      userService.editUser(selectedCard.index, data);
    } else {
      userService.addUser(data);
    }

    reset();
    onHide();
  });

  const getFormErrorMessage = (name: keyof UserFormData) => {
    const error = errors[name];
    return error ? (
      <small className="text-red-400 capitalize text-sm">{error.message}</small>
    ) : null;
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="mb-2 pt-5">
        <Controller
          name="title"
          rules={{
            required: "Please enter a title. This field cannot be empty.",
            minLength: {
              value: 3,
              message: "The title must be at least 3 characters long.",
            },
          }}
          control={control}
          render={({ field }) => (
            <InputText label="Title" required {...field} placeholder="Title" />
          )}
        />
        {getFormErrorMessage("title")}
      </div>

      <div className="mb-2">
        <Controller
          name="name"
          control={control}
          rules={{
            required: "Please provide your name. It cannot be left blank.",
            minLength: {
              value: 3,
              message: "The name must be at least 3 characters long.",
            },
            pattern: {
              value: /^[A-Za-z\s]+$/,
              message: "Name can only contain letters and spaces.",
            },
          }}
          render={({ field }) => (
            <InputText label="Name" required {...field} placeholder="Name" />
          )}
        />
        {getFormErrorMessage("name")}
      </div>

      <div className="mb-2">
        <Controller
          name="age"
          control={control}
          rules={{
            required: "Please enter your age. This field is mandatory.",
            min: {
              value: 1,
              message: "Age must be greater than 1 year.",
            },
            max: {
              value: 100,
              message: "Age must be less than or equal to 100 years.",
            },
            pattern: {
              value: /^(100|[1-9][0-9]?)$/,
              message: "Age must be a valid number between 1 and 100.",
            },
          }}
          render={({ field }) => (
            <InputText {...field} label="Age" placeholder="Age" required />
          )}
        />
        {getFormErrorMessage("age")}
      </div>

      <div className="mb-2">
        <Controller
          name="email"
          control={control}
          rules={{
            required: "Please enter your email address.",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Please enter a valid email address.",
            },
          }}
          render={({ field }) => (
            <InputText label="Email" {...field} required placeholder="Email" />
          )}
        />
        {getFormErrorMessage("email")}
      </div>

      <div className="mb-2">
        <Controller
          name="mobileNumber"
          control={control}
          rules={{
            required: "Please enter your mobile phone number.",
            pattern: {
              value: /^\d{11}$/,
              message: "The phone number must contain exactly 11 digits.",
            },
          }}
          render={({ field }) => (
            <InputText
              label="Phone"
              {...field}
              required
              placeholder="Mobile Phone"
            />
          )}
        />
        {getFormErrorMessage("mobileNumber")}
      </div>

      <div className="flex justify-end mt-4">
        <button
          type="submit"
          className="p-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
        >
          {selectedCard ? "Update Member" : "Add Member"}
        </button>
      </div>
    </form>
  );
};

export default UserForm;

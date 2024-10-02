import { forwardRef, InputHTMLAttributes } from "react";

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  className?: string;
}

const InputText = forwardRef<HTMLInputElement, InputTextProps>(
  ({ label, className = "", required, ...props }, ref) => {
    return (
      <div>
        <label htmlFor={props.name} className="font-medium">
          {label}
        </label>
        {required && <span className="text-red-500">*</span>}
        <input
          type="text"
          id={props.name}
          ref={ref}
          className={`ml-2 p-1 border rounded-md w-full px-4 py-2 border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none ${className}`}
          {...props}
        />
      </div>
    );
  }
);

export default InputText;

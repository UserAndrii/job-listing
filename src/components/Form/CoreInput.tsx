import { Field } from "formik";

interface CoreInputProps {
  name: string;
  label: string;
  type?: "text" | "email" | "password" | "number" | "textarea";
  placeholder?: string;
  className?: string;
  errors?: Record<string, string>;
  touched?: Record<string, boolean>;
}

export const CoreInput: React.FC<CoreInputProps> = ({
  name,
  label,
  type = "text",
  placeholder = "",
  className = "",
  errors = {},
  touched = {},
}) => {
  const hasError = errors[name] && touched[name];

  return (
    <div className="w-full">
      <label htmlFor={name} className="block font-medium">
        {label}
      </label>
      <Field
        id={name}
        name={name}
        as={type === "textarea" ? "textarea" : "input"}
        placeholder={placeholder}
        className={`border ${
          hasError ? "border-red-500" : "border-gray-300"
        } rounded w-full p-2 ${className}`}
      />
      {hasError && (
        <div className="text-red-500 text-sm mt-1">{errors[name]}</div>
      )}
    </div>
  );
};

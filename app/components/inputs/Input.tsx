import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { BiDollar } from "react-icons/bi";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  formatPrice?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  validate?: any;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type = "text",
  disabled,
  formatPrice,
  register,
  required,
  errors,
  validate,
}) => {
  return (
    <div className="w-full relative">
      {formatPrice && (
        <BiDollar
          size={24}
          className="
            text-neutral-700
            absolute
            top-[17px]
            left-2
          "
        />
      )}
      <input
        id={id}
        disabled={disabled}
        {...register(id, {
          required: {
            value: required,
            message: "This field is required",
          },
          ...validate,
        })}
        placeholder=" "
        autoComplete="off"
        type={type}
        className={`
          peer
          w-full
          p-4
          font-light 
          bg-white 
          border-2
          rounded-md
          outline-none
          transition
          disabled:opacity-70
          disabled:cursor-not-allowed
          ${formatPrice ? "pl-9" : "pl-4"}
          ${errors[id] ? "border-rose-500" : "border-neutral-300"}
          ${errors[id] ? "focus:border-rose-500" : "focus:border-black"}
          appearance-none
        `}
      />
      <label
        htmlFor={id}
        className={`
          bg-white
          px-1
          absolute 
          text-md
          duration-150 
          transform 
          -translate-y-7
          top-[18px] 
          z-10 
          origin-[0] 
          ${formatPrice ? "left-9" : "left-4"}
          peer-placeholder-shown:scale-100 
          peer-placeholder-shown:translate-y-0 
          peer-focus:-translate-y-7
          ${errors[id] ? "text-rose-500" : "text-zinc-400"}
          cursor-text
        `}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;

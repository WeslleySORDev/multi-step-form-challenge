type FormInputProps = {
  label: string;
  placeholder: string;
};

export function FormInput({label, placeholder}: FormInputProps) {
  return (
    <div className="flex flex-col gap-1">
      <label
        className="text-sm text-primary-marine-blue font-medium"
        htmlFor=""
      >
        {label}
      </label>
      <input
        className="border border-neutral-light-gray px-4 py-3 rounded"
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
}

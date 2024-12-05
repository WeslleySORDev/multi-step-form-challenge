type FormInputProps = {
  label: string;
  placeholder: string;
};

function FormInput({ label, placeholder }: FormInputProps) {
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

export function StepOne() {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="font-bold text-2xl text-primary-marine-blue">
        Personal info
      </h1>
      <h2 className="text-xl text-neutral-cool-gray">
        Please provide your name, email address, and phone number.
      </h2>
      <form className="flex flex-col gap-4" action="">
        <FormInput label="Name" placeholder="e.g. Stephen King" />
        <FormInput
          label="Email Address"
          placeholder="e.g. stephenking@lorem.com"
        />
        <FormInput label="Phone Number" placeholder="e.g. +1 234 567 890" />
      </form>
    </div>
  );
}

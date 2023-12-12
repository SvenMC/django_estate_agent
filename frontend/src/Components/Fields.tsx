interface inputFiledProps {
  name?: string;
  label?: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  onChange?: (event: any) => void;
}

const inputStyles =
  "block w-full p-3 text-sm text-gray-700 border border-gray-400 rounded outline-2 focus:outline focus:outline-primary";

export function InputField({
  name = "",
  label = "",
  type,
  placeholder = "",
  required = false,
  onChange,
}: inputFiledProps) {
  // const debouncedOnChange = debounce(onChange, 500);
  // LOOK INTO A DEBOUNCE FUNCTION FOR THIS //

  return (
    <div className="w-full">
      <label
        htmlFor={name}
        className="block mb-1 text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        min={0}
        className={inputStyles}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
      ></input>
    </div>
  );
}

export function InputTextArea({
  name,
  label,
  placeholder,
  onChange,
}: {
  name?: string;
  label?: string;
  placeholder?: string;
  onChange?: (event: any) => void;
}) {
  return (
    <div className="w-full">
      <label className="block mb-1 text-sm font-medium text-gray-700">
        {label}
      </label>
      <textarea
        name={name}
        id={name}
        rows={8}
        className={`${inputStyles} resize-none`}
        placeholder={placeholder}
        onChange={onChange}
      ></textarea>
    </div>
  );
}

export function InputSelect({
  name,
  label = "",
  options,
  onChange,
}: {
  name?: string;
  label: string;
  options: string[];
  onChange?: (event: any) => void;
}) {
  return (
    <div className="w-full">
      {label.length !== 0 && (
        <label className="block mb-1 text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <select
        name={name}
        defaultValue={""}
        className={inputStyles}
        onChange={onChange}
      >
        <option value="" disabled hidden>
          Choose here
        </option>
        {options.map((item: string, index: number) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}

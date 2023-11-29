interface inputFiledProps {
  name?: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
}

const inputStyles =
  "block w-full p-3 text-sm text-gray-700 border border-gray-400 rounded outline-2 focus:outline focus:outline-primary";

export function InputField({
  name = "",
  label = "",
  placeholder = "",
  required = false,
}: inputFiledProps) {
  return (
    <div className="w-full">
      <label
        htmlFor={name}
        className="block mb-1 text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <input
        type="text"
        name={name}
        id={name}
        className={inputStyles}
        placeholder={placeholder}
        required={required}
      ></input>
    </div>
  );
}

export function InputTextArea({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) {
  return (
    <div className="w-full">
      <label className="block mb-1 text-sm font-medium text-gray-700">
        {label}
      </label>
      <textarea
        rows={8}
        className={inputStyles}
        placeholder={placeholder}
      ></textarea>
    </div>
  );
}

export function InputSelect({
  label = "",
  options,
}: {
  label: string;
  options: string[];
}) {
  return (
    <div className="w-full">
      {label.length !== 0 && (
        <label className="block mb-1 text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <select className={inputStyles}>
        {options.map((item: string, index: number) => (
          <option value={index + 1}>{item}</option>
        ))}
      </select>
    </div>
  );
}

interface Option {
  value: string;
  label: string;
}

interface FormInputProps {
  label: string;
  name: string;
  type: "text" | "date" | "time" | "select" | "textarea";
  value: string;
  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
  placeholder?: string;
  options?: Option[];
  min?: string;
}

export function FormInput({
  label,
  name,
  type,
  value,
  onChange,
  placeholder,
  options,
  min,
}: FormInputProps) {
  const baseClassName =
    "w-full rounded-lg border-sage-200 shadow-sm focus:border-sage-300 focus:ring focus:ring-sage-200 focus:ring-opacity-50";

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-white">{label}</label>

      {type === "textarea" ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`${baseClassName} h-24`}
          required
        />
      ) : type === "select" ? (
        <select
          name={name}
          value={value}
          onChange={onChange}
          className={baseClassName}
          required
        >
          <option value="">Select {label.toLowerCase()}...</option>
          {options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          min={min}
          className={baseClassName}
          required
        />
      )}
    </div>
  );
}

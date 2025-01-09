interface AuthInputProps {
  type: string;
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

export function AuthInput({
  type,
  name,
  label,
  value,
  onChange,
  required = true,
}: AuthInputProps) {
  return (
    <div className="relative mb-6">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full px-4 py-3 bg-white/5 border border-sage-200/20 rounded-lg text-white focus:border-sage-300 focus:outline-none transition-all"
        placeholder=" "
      />
      <label className="absolute left-4 -top-2.5 px-1 text-sm text-sage-200 bg-sage-800 transition-all">
        {label}
      </label>
    </div>
  );
}

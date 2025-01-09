interface AuthButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: "primary" | "secondary";
  disabled?: boolean; // Add the `disabled` prop
}

export function AuthButton({
  children,
  onClick,
  type = "button",
  variant = "primary",
  disabled = false, // Default value for `disabled`
}: AuthButtonProps) {
  const baseStyles =
    "w-full py-3 px-4 rounded-lg font-light transition-all duration-300 focus:outline-none";
  const variantStyles =
    variant === "primary"
      ? `bg-sage-500 text-white hover:bg-sage-600 ${
          disabled ? "opacity-50 cursor-not-allowed" : ""
        }`
      : `bg-transparent border border-sage-200/20 text-sage-200 hover:bg-sage-600/10 ${
          disabled ? "opacity-50 cursor-not-allowed" : ""
        }`;

  return (
    <button
      type={type}
      onClick={disabled ? undefined : onClick} // Disable onClick if `disabled` is true
      className={`${baseStyles} ${variantStyles}`}
      disabled={disabled} // Apply the `disabled` prop
    >
      {children}
    </button>
  );
}

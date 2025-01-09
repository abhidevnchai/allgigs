interface MenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export function MenuButton({ isOpen, onClick }: MenuButtonProps) {
  return (
    <button
      onClick={onClick}
      className="relative z-50 w-10 h-10 focus:outline-none"
      aria-label="Toggle Menu"
    >
      <div className="flex flex-col justify-center items-center w-6 h-6 relative">
        <span
          className={`w-full h-0.5 bg-current transform transition-all duration-300 ${
            isOpen ? "rotate-45 translate-y-1.5" : ""
          }`}
        />
        <span
          className={`w-full h-0.5 bg-current my-1 transition-all duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`w-full h-0.5 bg-current transform transition-all duration-300 ${
            isOpen ? "-rotate-45 -translate-y-1.5" : ""
          }`}
        />
      </div>
    </button>
  );
}

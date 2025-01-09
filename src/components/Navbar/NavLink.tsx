interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  delay: number;
  isOpen: boolean;
}

export function NavLink({ href, children, delay, isOpen }: NavLinkProps) {
  return (
    <a
      href={href}
      className={`text-4xl font-light text-white hover:text-sage-200 transition-all duration-300 transform ${
        isOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </a>
  );
}

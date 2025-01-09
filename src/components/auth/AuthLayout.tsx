interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}

export function AuthLayout({ children, title, subtitle }: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sage-800 to-earth-900 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="bg-sage-700/30 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/10">
          <h2 className="text-3xl font-light text-white mb-2 tracking-wide">
            {title}
          </h2>
          <p className="text-sage-200 mb-8">{subtitle}</p>
          {children}
        </div>
      </div>
    </div>
  );
}

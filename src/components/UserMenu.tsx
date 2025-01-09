import { useState } from "react";
import { LogOut, User } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export function UserMenu() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  if (!user) return null;

  const handleLogout = () => {
    logout();
    navigate("/");
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        className="flex items-center space-x-2 text-white hover:text-sage-200 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <User size={20} />
        <span className="text-sm hidden md:inline">{user.email}</span>
      </button>

      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-50"
          onMouseLeave={() => setIsOpen(false)}
        >
          <button
            onClick={handleLogout}
            className="w-full px-4 py-2 text-left text-gray-700 hover:bg-sage-50 flex items-center space-x-2"
          >
            <LogOut size={16} />
            <span>Sign Out</span>
          </button>
        </div>
      )}
    </div>
  );
}

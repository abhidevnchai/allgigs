import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar/Navbar';
import { bookings } from '../lib/bookings';
import { Calendar, Clock, MapPin, AlertCircle, CheckCircle, XCircle, Clock3 } from 'lucide-react';

interface Booking {
  _id: string;
  date: string;
  service: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  notes?: string;
  location?: string;
  time?: string;
  price?: number;
  serviceDetails?: string;
}

export function Dashboard() {
  const { user, isAuthenticated, loading } = useAuth();
  const [userBookings, setUserBookings] = useState<Booking[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const data = await bookings.getUserBookings();
        console.log('Bookings response:', data);
        setUserBookings(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error('Error fetching bookings:', error);
        setUserBookings([]);
      } finally {
        setIsLoading(false);
      }
    };

    if (isAuthenticated && user?._id) {
      fetchBookings();
    }
  }, [isAuthenticated, user?._id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'confirmed': return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'pending': return <Clock3 className="w-5 h-5 text-yellow-500" />;
      case 'cancelled': return <XCircle className="w-5 h-5 text-red-500" />;
      default: return <AlertCircle className="w-5 h-5 text-blue-500" />;
    }
  };

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-800 border-green-200';
      case 'pending': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'cancelled': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-blue-100 text-blue-800 border-blue-200';
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-sage-800 via-sage-700 to-sage-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* User Profile Card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl shadow-lg p-6 mb-8 border border-sage-600/20">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 bg-sage-600/30 rounded-full flex items-center justify-center border-2 border-earth-300">
                <span className="text-2xl font-bold text-sage-50">
                  {user?.name?.charAt(0).toUpperCase()}
                </span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-sage-50 mb-2">{user?.name}</h1>
                <p className="text-sage-200">{user?.email}</p>
              </div>
            </div>
          </div>

          {/* Booking Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-sage-600/20">
              <h3 className="text-sage-200 mb-2">Total Bookings</h3>
              <p className="text-3xl font-bold text-earth-300">{userBookings.length}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-sage-600/20">
              <h3 className="text-sage-200 mb-2">Upcoming</h3>
              <p className="text-3xl font-bold text-earth-300">
                {userBookings.filter(b => b.status === 'confirmed').length}
              </p>
            </div>
            {/* Add more stats as needed */}
          </div>

          {/* Bookings Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-sage-600/20">
            <div className="border-b border-sage-600/20">
              <div className="flex gap-4 p-4">
                <button
                  onClick={() => setActiveTab('upcoming')}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeTab === 'upcoming' 
                      ? 'bg-earth-300 text-sage-900' 
                      : 'text-sage-200 hover:bg-sage-700/50'
                  }`}
                >
                  Upcoming
                </button>
                <button
                  onClick={() => setActiveTab('past')}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeTab === 'past' 
                      ? 'bg-earth-300 text-sage-900' 
                      : 'text-sage-200 hover:bg-sage-700/50'
                  }`}
                >
                  Past Bookings
                </button>
              </div>
            </div>

            {isLoading ? (
              <div className="p-8 text-center text-sage-200">Loading...</div>
            ) : userBookings.length === 0 ? (
              <div className="p-8 text-center text-sage-200">
                No bookings found. Book your first service now!
              </div>
            ) : (
              <div className="overflow-x-auto">
                <div className="grid gap-4 p-4">
                  {userBookings.map((booking) => (
                    <div 
                      key={booking._id}
                      className="bg-white/5 backdrop-blur-sm border border-sage-600/20 rounded-lg p-4 hover:bg-white/10 transition-all"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-lg font-semibold text-sage-50 mb-1">
                            {booking.service}
                          </h3>
                          <p className="text-sage-300 text-sm">{booking.serviceDetails}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-sm border ${getStatusStyle(booking.status)}`}>
                          <div className="flex items-center gap-2">
                            {getStatusIcon(booking.status)}
                            {booking.status}
                          </div>
                        </span>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
                        <div className="flex items-center gap-2 text-sage-200">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(booking.date).toLocaleDateString()}</span>
                        </div>
                        {booking.time && (
                          <div className="flex items-center gap-2 text-sage-200">
                            <Clock className="w-4 h-4" />
                            <span>{booking.time}</span>
                          </div>
                        )}
                        {booking.location && (
                          <div className="flex items-center gap-2 text-sage-200">
                            <MapPin className="w-4 h-4" />
                            <span>{booking.location}</span>
                          </div>
                        )}
                      </div>

                      {booking.notes && (
                        <div className="mt-4 p-3 bg-sage-800/50 rounded-lg text-sm text-sage-200">
                          {booking.notes}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
} 
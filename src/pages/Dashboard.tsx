import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar/Navbar';
import { Footer } from '../components/Footer';
import { bookings } from '../lib/bookings';

interface Booking {
  _id: string;
  date: string;
  service: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  notes?: string;
}

export function Dashboard() {
  const { user, isAuthenticated, loading } = useAuth();
  const [userBookings, setUserBookings] = useState<Booking[]>([]);
  const [isLoading, setIsLoading] = useState(true);

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

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-sage-900 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Profile Section */}
          <div className="bg-sage-700 rounded-lg shadow p-6 mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Profile</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-sage-300">Name</p>
                <p className="font-medium text-white">{user?.name}</p>
              </div>
              <div>
                <p className="text-sm text-sage-300">Email</p>
                <p className="font-medium text-white">{user?.email}</p>
              </div>
            </div>
          </div>

          {/* Bookings Section */}
          <div className="bg-sage-700 rounded-lg shadow overflow-hidden">
            <div className="px-6 py-4 border-b border-sage-600">
              <h2 className="text-2xl font-semibold text-white">My Bookings</h2>
            </div>
            
            {isLoading ? (
              <div className="p-6 text-center">Loading...</div>
            ) : userBookings.length === 0 ? (
              <div className="p-6 text-center text-gray-500">
                No bookings found
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Service
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Notes
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {userBookings.map((booking) => (
                      <tr key={booking._id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {new Date(booking.date).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4">
                          {booking.service}
                        </td>
                        <td className="px-6 py-4">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                            ${booking.status === 'confirmed' ? 'bg-green-100 text-green-800' : 
                            booking.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                            booking.status === 'cancelled' ? 'bg-red-100 text-red-800' :
                            'bg-blue-100 text-blue-800'}`}>
                            {booking.status}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          {booking.notes || '-'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
} 

import { ArrowRight, Calendar, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { eventService } from "../../services/eventService";
import { Badge } from "../Layout/ui/badge";
import { Button } from "../Layout/ui/button";
import { Card, CardContent } from "../Layout/ui/card";

const gradients = [
  "from-blue-600 to-purple-600",
  "from-green-600 to-blue-600",
  "from-red-600 to-orange-600",
  "from-purple-600 to-pink-600",
  "from-indigo-600 to-blue-600",
  "from-yellow-600 to-red-600",
  "from-cyan-600 to-blue-600",
  "from-pink-600 to-red-600",
];

export default function RecommendedEventsSection() {
  const [recommendedEvents, setRecommendedEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Check if user is signed in
  const token = localStorage.getItem("auth_token");

  // 🚫 If not signed in, skip everything
  if (!token) {
    return null; // or render a message like: <p>Please sign in to see recommendations</p>
  }

  // Parse full OSM address into street and city
  const parseAddress = (fullAddress) => {
    if (!fullAddress) return { street: "Unknown", city: "Unknown" };

    const parts = fullAddress.split(",").map((s) => s.trim());
    const street = parts[0] || "Unknown";

    let city = "Unknown";
    for (let i = parts.length - 1; i >= 0; i--) {
      const part = parts[i];
      if (!part.match(/Province|Nepal|[0-9]{3,}/i)) {
        city = part;
        break;
      }
    }

    return { street, city };
  };

  useEffect(() => {
    const fetchRecommendedEvents = async () => {
      try {
        const filters = {
          category_id: "all",
          search: "",
          filter: "",
          limit: 3,
        };
        const events = await eventService.getRecommendedEvents(filters);
        setRecommendedEvents(events || []);
      } catch (error) {
        console.error("Error fetching recommended events:", error);
        setRecommendedEvents([]);
      } finally {
        setLoading(false);
      }
    };

    fetchRecommendedEvents();
  }, []);

  // Skeleton Loading State
  if (loading) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Recommended Events</h2>
              <p className="text-gray-600">
                Personalized picks based on your interests
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="w-full h-48 bg-gray-200" />
                <div className="p-6 space-y-4">
                  <div className="flex justify-between">
                    <div className="h-5 w-20 bg-gray-200 rounded"></div>
                    <div className="h-5 w-10 bg-gray-200 rounded"></div>
                  </div>
                  <div className="h-6 w-3/4 bg-gray-200 rounded"></div>
                  <div className="space-y-2">
                    <div className="h-4 w-full bg-gray-200 rounded"></div>
                    <div className="h-4 w-5/6 bg-gray-200 rounded"></div>
                    <div className="h-4 w-2/3 bg-gray-200 rounded"></div>
                  </div>
                  <div className="h-10 w-full bg-gray-200 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // No Recommended Events Fallback
  if (!loading && recommendedEvents.length === 0) {
    return (
      <section className="py-16 bg-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            No Recommendations Found
          </h2>
          <p className="text-gray-600">
            Explore upcoming events to get personalized recommendations.
          </p>
        </div>
      </section>
    );
  }

  // Main Recommended Events Content
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Recommended Events</h2>
            <p className="text-gray-600">
              Personalized picks based on your interests
            </p>
          </div>
          <Link to="/recommended-events">
            <Button variant="outline" className="flex items-center gap-2 bg-transparent">
              View All <ArrowRight size={16} />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommendedEvents.map((event, index) => {
            const { street, city } = parseAddress(event.location);
            const gradient = gradients[index % gradients.length];

            return (
              <Card key={event.id} className="hover:shadow-lg transition-shadow">
                {event.featured_image ? (
                  <img
                    src={event.featured_image}
                    alt={event.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                ) : (
                  <div className={`w-full h-48 bg-gradient-to-r ${gradient} rounded-t-lg flex items-center justify-center`}>
                    <span className="text-white text-lg font-semibold">Event Image</span>
                  </div>
                )}
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <Badge variant="secondary">{event.category?.name || "General"}</Badge>
                    <span className="text-lg font-bold text-green-600">
                      {event.is_free ? "Free" : event.price}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} />
                      {new Date(event.start_date).toLocaleDateString("en-US", {
                        weekday: "short",
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={14} />
                      {street}, {city}
                    </div>

                  </div>

                  <Link to={`/events/${event.id}`}>
                    <Button className="w-full">View Details</Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

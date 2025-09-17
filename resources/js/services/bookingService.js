import api from "./api";

export const bookingService = {
  createBooking: async (eventId, quantity) => {
    const response = await api.post("/bookings", { event_id: eventId, quantity });
    return response.data;
  },

  getUserBookings: async () => {
    const response = await api.get("/bookings");
    return response.data;
  },
};

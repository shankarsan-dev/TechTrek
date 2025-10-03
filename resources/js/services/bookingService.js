  import api from "./api";

  export const bookingService = {
     createBooking: async ({ event_id, ticket_id, user_id, quantity = 1 }) => {
    const response = await api.post("/bookings", {
      event_id,
      ticket_id,
      user_id,
      quantity,
    });
    return response.data;
  },
    getUserBookings: async () => {
      const response = await api.get("/bookings");
      return response.data;
    },

 cancelBooking: async (bookingId) => {
    const response = await api.put(`/bookings/${bookingId}/cancel`);
    return response.data;
  },
  };

import api from "./api";

export const userService = {
  getPublicProfile: async (userId) => {
    const response = await api.get(`/profile/${userId}`)
    return response.data // Contains {success, message, data}
  },
  getMyProfile: async () => {
    const response = await api.get("/user/profile")
    return response.data // Contains {success, message, data}
  },

  getUserStats: async () => {
    const response = await api.get("/user/stats");
    return response.data;
  },

  getUserUpcomingEvents: async () => {
    const response = await api.get("/user/upcoming-events");
    return response.data;
  },

  getUserFavorites: async () => {
    const response = await api.get("/user/favorites");
    return response.data;
  },

  addToFavorites: async (eventId) => {
    const response = await api.post("/user/favorites", { event_id: eventId });
    return response.data;
  },

  removeFromFavorites: async (eventId) => {
    const response = await api.delete(`/user/favorites/${eventId}`);
    return response.data;
  },

  getRecommendations: async () => {
    const response = await api.get("/recommendations");
    return response.data;
  },
};

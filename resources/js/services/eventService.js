import api from "./api";

export const eventService = {

  getUpcomingEvents: async (limit = 1) => {
    const { data } = await api.get(`/events/upcoming?limit=${limit}`);
    return Array.isArray(data.events) ? data.events : []; // always return an array
  },

   getNearestEvents: async (latitude, longitude, limit = 3) => {
    const response = await api.get("/events/nearest", {
      params: { lat: latitude, lng: longitude, limit },
    });
    return response.data.events; // adjust according to backend
  },
  // getEvents: async (params) => {
  //   const response = await api.get("/events", { params });
  //   return response.data;
  // },
 getEvent: async (id) => {
    try {
      const response = await api.get(`/events/${id}`);
      console.log("Fetched event details:", response.data);
      return response.data.data; // ✅ unwrap actual event object
    } catch (error) {
      throw new Error(
        error.response?.data?.message ||
        error.response?.data?.error ||
        error.message ||
        "Failed to fetch event details"
      );
    }
  },
  // getEvent: async (id) => {
  //   const response = await api.get(`/events/${id}`);
  //   return response.data;
  // },

  createEvent: async (formData) => {
    const response = await api.post("/events", formData);
    return response.data;
  },

  updateEvent: async (id, formData) => {
    const response = await api.put(`/events/${id}`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  },

  deleteEvent: async (id) => {
    const response = await api.delete(`/events/${id}`);
    return response.data;
  },

  getCategories: async () => {
    const response = await api.get("/categories");
    return response.data;
  },

  getOrganizerEvents: async ({ search, status, sort_by, sort_order, page = 1 }) => {
    const params = { page };
    if (search) params.search = search;
    if (status) params.status = status;
    if (sort_by) params.sort_by = sort_by;
    if (sort_order) params.sort_order = sort_order;

    const response = await api.get("/organizer/events", { params });

    return {
      data: response.data.data,
      meta: response.data.meta,
    };
  },
  getOrganizerEventDetails: async (id) => {
  try {
    const response = await api.get(`/organizer/events/${id}`);
    console.log("Fetched event details:", response.data);
    return response.data; // returns { success, data }
  } catch (error) {
    throw new Error(
      error.response?.data?.message ||
        error.response?.data?.error ||
        error.message ||
        "Failed to fetch event details"
    );
  }
},getUpcomingNearestEvents: async (limit = 3) => {
  const response = await api.get(`/events/upcoming-nearest?limit=${limit}`);
  return response.data.events; // adjust according to backend response
}

};

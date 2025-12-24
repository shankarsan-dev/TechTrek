import api from "./api";

export const eventService = {

  // getUpcomingEvents: async (limit = 1) => {
  //   const { data } = await api.get(`/events/upcoming?limit=${limit}`);
  //   return Array.isArray(data.events) ? data.events : []; // always return an array
  // },

  //  getNearestEvents: async (latitude, longitude, limit = 3) => {
  //   const response = await api.get("/events/nearest", {
  //     params: { lat: latitude, lng: longitude, limit },
  //   });
  //   return response.data.events; // adjust according to backend
  // },
//  getNearestEvents: async (latitude, longitude, maxDistance = 100, limit = 6, category = "all") => {
//   const response = await api.get("/events/nearest", {
//     params: {
//       lat: latitude,
//       lng: longitude,
//       max_distance: maxDistance,
//       limit,
//       category, // 👈 include category here
//     },
//   });
//   return response.data.events;
// },
getNearestEvents: async (latitude, longitude, maxDistance = 50, limit = 6, category = "all") => {
    const response = await api.get("/events/nearest", {
      params: {
        lat: latitude,
        lng: longitude,
        max_distance: maxDistance, // matches backend param
        limit,
        category, // category ID or 'all'
      },
    });
    return response.data.events; // directly return events array
  },

  //  getRecommendedEvents: async (category = "all") => {
  //   const res = await api.get(`recommended-events?category=${category}`);
  //   return res.data.data || [];
  // },
  getRecommendedEvents: async (filters = {}) => {
  const query = new URLSearchParams(filters).toString()
  const res = await api.get(`recommended-events?${query}`)
  return res.data.data||[];
},
  getTopTags: async () => {
    const res = await api.get("/top-tags");
    return res.data.data || [];
  },

  getEvents: async (filters = {}) => {
    const params = new URLSearchParams()

    if (filters.category_id && filters.category_id !== "all") {
      params.append("category", filters.category_id)
    }
    if (filters.search) {
      params.append("search", filters.search)
    }
    if (filters.filter && filters.filter !== "all") {
      params.append("filter", filters.filter)
    }
    if (filters.limit) {
      params.append("limit", filters.limit)
    }

    const res = await api.get(`/events`, { params })
    return res.data.events || res.data // adjust according to backend response
  },
   getAllEvents: async (filters = {}) => {
    const params = new URLSearchParams()

    if (filters.category_id && filters.category_id !== "all") {
      params.append("category", filters.category_id)
    }
    if (filters.search) {
      params.append("search", filters.search)
    }
    if (filters.filter && filters.filter !== "all") {
      params.append("filter", filters.filter)
    }
    if (filters.limit) {
      params.append("limit", filters.limit)
    }

    const res = await api.get(`/all-events`, { params })
    return res.data.events || res.data // adjust according to backend response
  },
 getEvent: async (id) => {
    try {
      const response = await api.get(`/events/${id}`);
      console.log("Fetched event details:", response.data);
      return response.data.data;
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
},getUpcomingEvents: async (filter="all",limit="10") => {
  const response = await api.get(`/events/upcoming?filter=${filter}&limit=${limit}`);
  return response.data.events; // adjust according to backend response
},
verifyQRCode: async (qrCode) => {
    return await api.post(`/verify-qr`, { qr_code: qrCode });
  },

  checkInAttendee: async (qrCode) => {
    return await api.post(`/check-in`, { qr_code: qrCode });
  }
,
  deleteEvent: async (eventId) => {
    try {
      const response = await api.delete(`/events/${eventId}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  // Optional: Soft delete (cancel instead of delete)
  cancelEvent: async (eventId, reason = '') => {
    try {
      const response = await api.put(`/events/${eventId}/cancel`, { reason });
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },
  // In your eventService.js file, add:

updateEvent: async (id, data) => {
  try {
    const response = await api.put(`/organizer/events/${id}`, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log("Updated event:", response.data);
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message ||
      error.response?.data?.error ||
      error.message ||
      "Failed to update event"
    );
  }
},
};

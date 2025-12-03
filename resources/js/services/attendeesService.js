import api from "./api"; // your axios instance
export const attendeesService = {
//   list: () => api.get("/attendees"),
  list: (params = {}) => {
    return api.get('/attendees', { 
      params: {
        page: params.page || 1,
        per_page: params.perPage || 20,
        status: params.status,
        event_id: params.event_id
      }
    });
  },
  checkIn: (id) => api.put(`/attendees/${id}/check-in`),
  export: (ids) => api.post("/attendees/export", { ids }),
};

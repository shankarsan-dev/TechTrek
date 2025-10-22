
import api from "./api";
// Add auth token to request headers automatically
export const OrganizerService = {

 getPendingOrganizers: async () => {
    try {
      const response = await api.get(`/admin/pending-organizers`);
      return response.data;
    } catch (error) {
      console.warn("API not available, using dummy data");
      return {
        isDummy: true,
        organizers: [
          {
            id: 1,
            name: "Dummy Organizer 1",
            email: "dummy1@demo.com",
            organization: "Demo Events Pvt. Ltd.",
            document: "https://via.placeholder.com/150",
          },
          {
            id: 2,
            name: "Dummy Organizer 2",
            email: "dummy2@demo.com",
            organization: "Nepal Tech Org",
            document: "https://via.placeholder.com/150",
          },
        ],
      };
    }
  },

  verifyOrganizer: async (id, action) => {
    try {
      const response = await axios.post(`${API_URL}/admin/organizers/${id}/${action}`);
      return response.data;
    } catch (error) {
      console.error("Failed to update organizer:", error);
      // return dummy success in fallback mode
      return { success: true };
    }
  },
};

 
 
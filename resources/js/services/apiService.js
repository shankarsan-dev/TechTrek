// import axios from "axios"
// const API_URL = import.meta.env.VITE_API_URL

// const API_BASE_URL = API_URL || "http://localhost:8000/api"

// const api = axios.create({
//   baseURL: API_BASE_URL,
//   headers: {
//     "Content-Type": "application/json",
//     Accept: "application/json",
//   },
//   withCredentials: true,
// })

// // Request interceptor to add auth token
// // api.interceptors.request.use(
// //   (config) => {
// //     const token = localStorage.getItem("auth_token")
// //     if (token) {
// //       config.headers.Authorization = `Bearer ${token}`
// //     }
// //     return config
// //   },
// //   (error) => {
// //     return Promise.reject(error)
// //   },
// // )

// // Response interceptor to handle errors
// // api.interceptors.response.use(
// //   (response) => response,
// //   (error) => {
// //     if (error.response?.status === 401) {
// //       localStorage.removeItem("auth_token")
// //       localStorage.removeItem("user")
// //       window.location.href = "/login"
// //     }
// //     return Promise.reject(error)
// //   },
// // )

// export const apiService = {
//   // Auth endpoints
//   login: async (email, password) => {
//     try {
//       const response = await api.post("/login", {
//         email,
//         password,
//       })

//       if (response.data.token) {
//         localStorage.setItem("auth_token", response.data.token)
//         localStorage.setItem("user", JSON.stringify(response.data.user))
//       }

//       return response.data
//     } catch (error) {
//       throw new Error(error.response?.data?.message || "Login failed")
//     }
//   },

//   // register: async (userData) => {
//   //   try {
//   //     const response = await api.post("/register", {
//   //       name: userData.name,
//   //       email: userData.email,
//   //       password: userData.password,
//   //       password_confirmation: userData.password_confirmation,
//   //       role: userData.role || "user",
//   //     })

//   //     if (response.data.token) {
//   //       localStorage.setItem("auth_token", response.data.token)
//   //       localStorage.setItem("user", JSON.stringify(response.data.user))
//   //     }

//   //     return response.data
//   //   } catch (error) {
//   //     throw new Error(error.response?.data?.message || "Registration failed")
//   //   }
//   // },
// register: async (formData) => {
//   try {
//     const response = await api.post("/register", formData, 
//     //{
//     //   headers: {
//     //     "Content-Type": "multipart/form-data",
//     //   },
//     // }
//   )

//     if (response.data.token) {
//       localStorage.setItem("auth_token", response.data.token)
//       localStorage.setItem("user", JSON.stringify(response.data.user))
//     }

//     return response.data
//   } catch (error) {
//     throw new Error(error.response?.data?.message || "Registration failed")
//   }
// },

//   logout: async () => {
//     try {
//       await api.post("/logout")
//     } catch (error) {
//       console.error("Logout error:", error)
//     } finally {
//       localStorage.removeItem("auth_token")
//       localStorage.removeItem("user")
//     }
//   },

//   getCurrentUser: async () => {
//     try {
//       const response = await api.get("/user")
//       return response.data
//     } catch (error) {
//       throw new Error(error.response?.data?.message || "Failed to get user")
//     }
//   },

//   forgotPassword: async (email) => {
//     try {
//       const response = await api.post("/forgot-password", { email })
//       return response.data
//     } catch (error) {
//       throw new Error(error.response?.data?.message || "Failed to send reset email")
//     }
//   },

//   resetPassword: async (token, email, password, password_confirmation) => {
//     try {
//       const response = await api.post("/reset-password", {
//         token,
//         email,
//         password,
//         password_confirmation,
//       })
//       return response.data
//     } catch (error) {
//       throw new Error(error.response?.data?.message || "Password reset failed")
//     }
//   },

//   // Events endpoints
//   getEvents: async (params) => {
//     const response = await api.get("/events", { params })
//     return response.data
//   },

//   getEvent: async (id) => {
//     const response = await api.get(`/events/${id}`)
//     return response.data
//   },

//   getCategories: async () => {
//     const response = await api.get("/categories")
//     return response.data
//   },

//   // Bookings endpoints
//   createBooking: async (eventId, quantity) => {
//     const response = await api.post("/bookings", { event_id: eventId, quantity })
//     return response.data
//   },

//   getUserBookings: async () => {
//     const response = await api.get("/bookings")
//     return response.data
//   },

//   // Recommendations
//   getRecommendations: async () => {
//     const response = await api.get("/recommendations")
//     return response.data
//   },

//   // User dashboard endpoints
//   getUserStats: async () => {
//     const response = await api.get("/user/stats")
//     return response.data
//   },

//   getUserUpcomingEvents: async () => {
//     const response = await api.get("/user/upcoming-events")
//     return response.data
//   },

//   getUserFavorites: async () => {
//     const response = await api.get("/user/favorites")
//     return response.data
//   },

//   addToFavorites: async (eventId) => {
//     const response = await api.post("/user/favorites", { event_id: eventId })
//     return response.data
//   },

//   removeFromFavorites: async (eventId) => {
//     const response = await api.delete(`/user/favorites/${eventId}`)
//     return response.data
//   },
// }


import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000/api";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    
  },
  // withCredentials: true, 
  // needed if using cookies/session with Laravel Sanctum
});

// Add auth token to request headers automatically
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("auth_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
     if (config.data instanceof FormData) {
      config.headers["Content-Type"] = "multipart/form-data";
    }
    return config;
  },
  (error) => Promise.reject(error)
);


// Optional: handle unauthorized globally (e.g., logout user)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("auth_token");
      localStorage.removeItem("user");
      window.location.href = "/login"; // redirect to login page
    }
    return Promise.reject(error);
  }
);

export const apiService = {

login: async (payload) => {
    try {
      //console.log("Login payload:", payload); 
      const response = await api.post("/login", payload);

      if (response.data.token) {
        localStorage.setItem("auth_token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
      }

      return response.data;
    } catch (error) {
      //console.log("Login error response:", error.response?.data);
      throw new Error(error.response?.data?.message || "Login failed");
    }
  }
,
// Register new user
register: async (formData) => {
  try {
    // Determine if we're sending FormData (for file upload) or JSON
    const isFormData = formData instanceof FormData;
    
    const config = {
      headers: {
        'Content-Type': isFormData ? 'multipart/form-data' : 'application/json'
      }
    };

    const response = await api.post("/register", formData, config);

    if (response.data.token) {
      localStorage.setItem("auth_token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
    }

    return response.data;
  } catch (error) {
    // Improved error handling
    const errorMessage = error.response?.data?.message ||error.response?.data?.error ||  error.message || "Registration failed";
    throw new Error(errorMessage);
  }
},
createEvent: async (formData) => {
  try {
    const isFormData = formData instanceof FormData;

    const config = {
      headers: {
        "Content-Type": isFormData ? "multipart/form-data" : "application/json",
      },
    };

    const response = await api.post("/events", formData, config);

    return response.data;
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.response?.data?.error ||
      error.message ||
      "Event creation failed";
    throw new Error(errorMessage);
  }
}
,

  // Logout user
  logout: async () => {
    try {
      await api.post("/logout");
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      localStorage.removeItem("auth_token");
      localStorage.removeItem("user");
    }
  },

  // Get current logged-in user info
  getCurrentUser: async () => {
    try {
      const response = await api.get("/user");
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || "Failed to get user");
    }
  },  
//  getOrganizerEvents: async ({ search, status, sort_by, sort_order, page }) => {
//     try {
//       const token = localStorage.getItem("token"); // JWT token

//       const params = {};
//       if (search) params.search = search;
//       if (status) params.status = status;
//       if (sort_by) params.sort_by = sort_by;
//       if (sort_order) params.sort_order = sort_order;
//       if (page) params.page = page;

//       const response = await api.get("/organizer/events", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//         params,
//       });

//       return response.data; // return JSON directly
//     } catch (error) {
//       const errorMessage =
//         error.response?.data?.message ||
//         error.response?.data?.error ||
//         error.message ||
//         "Failed to fetch organizer events";
//       throw new Error(errorMessage);
//     }
//   },

 getOrganizerEvents: async ({ search, status, sort_by, sort_order, page = 1 }) => {
    try {
      const token = localStorage.getItem("token"); // JWT token

      const params = {
        page,
      };
      if (search) params.search = search;
      if (status) params.status = status;
      if (sort_by) params.sort_by = sort_by;
      if (sort_order) params.sort_order = sort_order;

      const response = await api.get("/organizer/events", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params,
      });

      // Returning both data and pagination info
      return {
        data: response.data.data, // actual events
        meta: response.data.meta, // pagination info
      };
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        error.response?.data?.error ||
        error.message ||
        "Failed to fetch organizer events";
      throw new Error(errorMessage);
    }
  },
  // Password reset flow
  forgotPassword: async (email) => {
    try {
      const response = await api.post("/forgot-password", { email });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || "Failed to send reset email");
    }
  },

  resetPassword: async (token, email, password, password_confirmation) => {
    try {
      const response = await api.post("/reset-password", {
        token,
        email,
        password,
        password_confirmation,
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || "Password reset failed");
    }
  },

  // Event-related API calls
  getEvents: async (params) => {
    const response = await api.get("/events", { params });
    return response.data;
  },

  getEvent: async (id) => {
    const response = await api.get(`/events/${id}`);
    return response.data;
  },

  getCategories: async () => {
        const response = await api.get("/categories");
        // alert(response.data);
        return response.data;
        
      },

  // Bookings
  createBooking: async (eventId, quantity) => {
    const response = await api.post("/bookings", { event_id: eventId, quantity });
    return response.data;
  },

  getUserBookings: async () => {
    const response = await api.get("/bookings");
    return response.data;
  },

  // Recommendations
  getRecommendations: async () => {
    const response = await api.get("/recommendations");
    return response.data;
  },

  // User dashboard
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


// },
  updateEvent: async (id, formData) => {
    try {
      const response = await api.put(`/events/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  deleteEvent: async (id) => {
    try {
      const response = await api.delete(`/events/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};


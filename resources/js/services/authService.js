// import api from "./api";

// export const authService = {
//   login: async (payload) => {
//     const response = await api.post("/login", payload);
//     if (response.data.token) {
//       localStorage.setItem("auth_token", response.data.token);
//       localStorage.setItem("user", JSON.stringify(response.data.user));
//     }
//     return response.data;
//   },

//   register: async (formData) => {
//     const isFormData = formData instanceof FormData;
//     const config = {
//       headers: {
//         "Content-Type": isFormData ? "multipart/form-data" : "application/json",
//       },
//     };
//     const response = await api.post("/register", formData, config);
//     if (response.data.token) {
//       localStorage.setItem("auth_token", response.data.token);
//       localStorage.setItem("user", JSON.stringify(response.data.user));
//     }
//     return response.data;
//   },

//   logout: async () => {
//     try {
//       await api.post("/logout");
//     } finally {
//       localStorage.removeItem("auth_token");
//       localStorage.removeItem("user");
//     }
//   },

//   getCurrentUser: async () => {
//     const response = await api.get("/user");
//     return response.data;
//   },

//   forgotPassword: async (email) => {
//     const response = await api.post("/forgot-password", { email });
//     return response.data;
//   },

//   resetPassword: async (token, email, password, password_confirmation) => {
//     const response = await api.post("/reset-password", {
//       token,
//       email,
//       password,
//       password_confirmation,
//     });
//     return response.data;
//   },
// };

import api from "./api";

export const authService = {
  login: async (payload) => {
    const response = await api.post("/login", payload);

    if (response.data.token) {
      localStorage.setItem("auth_token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));

      // Set default Authorization header for all future requests
      api.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
    }

    return response.data;
  },

  register: async (formData) => {
    const isFormData = formData instanceof FormData;
    const config = {
      headers: {
        "Content-Type": isFormData ? "multipart/form-data" : "application/json",
      },
    };

    const response = await api.post("/register", formData, config);

    if (response.data.token) {
      localStorage.setItem("auth_token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));

      // Set default Authorization header
      api.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
    }

    return response.data;
  },

  logout: async () => {
    try {
      await api.post("/logout");
    } finally {
      localStorage.removeItem("auth_token");
      localStorage.removeItem("user");

      delete api.defaults.headers.common['Authorization']; // remove header
    }
  },

  getCurrentUser: async () => {
    // Axios should already have token set in default headers
    const response = await api.get("/user");
    return response.data;
  },

  forgotPassword: async (email) => {
    const response = await api.post("/forgot-password", { email });
    return response.data;
  },

  resetPassword: async (token, email, password, password_confirmation) => {
    const response = await api.post("/reset-password", {
      token,
      email,
      password,
      password_confirmation,
    });
    return response.data;
  },
};

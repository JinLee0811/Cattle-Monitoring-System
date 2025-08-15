import { useState, useEffect } from "react";

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In real implementation, token validation logic would go here
    const checkAuth = () => {
      const token = localStorage.getItem("authToken");
      if (token) {
        setIsAuthenticated(true);
        setUser({
          id: 1,
          username: "admin",
          role: "admin",
          name: "Administrator",
        });
      }
      setLoading(false);
    };

    checkAuth();
  }, []);

  const login = async (credentials) => {
    // In real implementation, API call would go here
    try {
      // Simulated login - accept "0000" as password
      if (credentials.password === "0000") {
        const userData = {
          id: 1,
          username: "admin",
          role: "admin",
          name: "Administrator",
        };

        localStorage.setItem("authToken", "dummy-token");
        setUser(userData);
        setIsAuthenticated(true);
        return { success: true };
      } else {
        return { success: false, error: "Invalid password." };
      }
    } catch (error) {
      console.log(error);
      return { success: false, error: "An error occurred during login." };
    }
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    setIsAuthenticated(false);
    setUser(null);
  };

  return {
    isAuthenticated,
    user,
    loading,
    login,
    logout,
  };
};

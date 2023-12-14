"use client";
import { useRouter } from "next/navigation";
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [signupDetails, setSignupDetails] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });
  const [user, setUser] = useState(null);
  // sign up user
  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const isValidEmail = /\S+@\S+\.\S+/.test(signupDetails.email);
      if (!isValidEmail) {
        toast.error("Please enter a valid email address", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
        return;
      }
      if (signupDetails.password.length < 6) {
        toast.error("Password must be at least 6 characters long", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
        return;
      }

      const res = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: signupDetails.name,
          email: signupDetails.email,
          password: signupDetails.password,
        }),
      });
      const data = await res.json();
      setIsLoading(false);
      if (data.message === "User created successfully") {
        toast.success("User created successfully", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
        router.push("/login");
        setSignupDetails({
          name: "",
          email: "",
          password: "",
        });
      } else {
        toast.error("User already exists");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // login user
  const checkUserExists = async (email) => {
    try {
      const res = await fetch("/api/check-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (data.message === "User already exists") {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error(error);
      return false;
    }
  };
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const isValidEmail = /\S+@\S+\.\S+/.test(loginDetails.email);
      if (!isValidEmail) {
        toast.error("Please enter a valid email address", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
        return;
      }
      if (loginDetails.password.length < 6) {
        toast.error("Password must be at least 6 characters long", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
        return;
      }
      const userExists = await checkUserExists(loginDetails.email);
      if (!userExists) {
        toast.error("User does not exist. Please sign up first.", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
        return;
      }
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: loginDetails.email,
          password: loginDetails.password,
        }),
      });
      const data = await res.json();
      setIsLoading(false);
      if (data.message === "user login successfully") {
        toast.success(data.message, {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
        router.push("/");
        setLoginDetails({
          email: "",
          password: "",
        });
      } else {
        toast.error(data.message, {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      }
    } catch (error) {
      console.error(error);
      toast.error("An unexpected error occurred. Please try again later.", {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    }
  };

  // check user login or not
  useEffect(() => {
    const currentUser = async () => {
      const res = await fetch("/api/login-user", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      if (data.detail) {
        setUser(data.detail);
      } else {
        setUser(null);
      }
    };
    currentUser();
  }, [loginDetails]);

  // Logout User Function
  const handleLogoutUser = async () => {
    try {
      const res = await fetch("/api/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      if (data.message === "User logged out successfully") {
        setUser(null);
        toast.success("Logout Successfully", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      }
    } catch (error) {
      toast.error("Logout Failed");
    }
  };
  return (
    <Context.Provider
      value={{
        signupDetails,
        setSignupDetails,
        handleSignupSubmit,
        loginDetails,
        setLoginDetails,
        handleLoginSubmit,
        user,
        handleLogoutUser,
        isLoading,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;

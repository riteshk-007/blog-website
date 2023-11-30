"use client";
import { useRouter } from "next/navigation";
import { createContext, useState } from "react";
import toast from "react-hot-toast";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const router = useRouter();
  const [signupDetails, setSignupDetails] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  // sign up user
  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    try {
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
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
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
      if (data.message === "user login successfully") {
        toast.success("user login successfully", {
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
        toast.error("Invalid credentials");
      }
    } catch (error) {
      console.log(error);
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
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
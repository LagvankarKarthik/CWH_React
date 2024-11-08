import React from "react";
import { useState } from "react";
import "./App.css";
import About from "./componens/About";
import Navbar from "./componens/Navbar";
import Alert from "./componens/Alert";
import TextForm from "./componens/TextForm";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //This is to check wheather the dark mode is enbled or not
  const [alert, setAlert] = useState(null);
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#0e031c";
      document.body.style.color = "white";
      showAlert("Dark mode has been enabled", "success ");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Dark mode has been disabled", "warning ");
    }
  };
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar
            title="TextUtils"
            aboutText="About us"
            mode={mode}
            toggleMode={toggleMode}
          />
          ,<TextForm />,
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <Navbar
            title="TextUtils"
            aboutText="About us"
            mode={mode}
            toggleMode={toggleMode}
          />
          <About />,
        </>
      ),
    },
    {
      path: "/texutils",
      element: (
        <>
          <Navbar
            title="TextUtils"
            aboutText="About us"
            mode={mode}
            toggleMode={toggleMode}
          />
          <TextForm />,
        </>
      ),
    },
  ]);

  return (
    <div>
      <Alert alert={alert} />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

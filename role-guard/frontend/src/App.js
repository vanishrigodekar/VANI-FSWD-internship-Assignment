import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

function Login({ setUser }) {
  const login = async (role) => {
    const response = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: role, password: "123" })
    });

    const data = await response.json();

    localStorage.setItem("user", JSON.stringify(data));
    setUser(data);
  };

  return (
    <div>
      <h2>Login Page</h2>

      <button onClick={() => login("admin")}>
        Login as Admin
      </button>

      <button onClick={() => login("user")}>
        Login as User
      </button>
    </div>
  );
}

const ProtectedRoute = ({ role, children }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user || user.role !== role) {
    return <Navigate to="/" />;
  }

  return children;
};

function Admin() {
  return <h2>Admin Page (Protected)</h2>;
}

function User() {
  return <h2>User Page (Protected)</h2>;
}

function App() {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login setUser={setUser} />} />

        <Route
          path="/admin"
          element={
            <ProtectedRoute role="admin">
              <Admin />
            </ProtectedRoute>
          }
        />

        <Route
          path="/user"
          element={
            <ProtectedRoute role="user">
              <User />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
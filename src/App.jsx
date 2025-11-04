import React, { useState } from "react";
import { users } from "./Data/Employees";
import Login from "./Login";
import AdminDashboard from "./Admin/Components/Dashboard";
import EmployeePanel from "./Employee/Employeepanel";


const App = () => {
  const [tasks, setTasks] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  const handleLogin = (email, password) => {
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      setCurrentUser(user);
    } else {
      alert("Invalid email or password");
    }
  };

  const handleLogout = () => setCurrentUser(null);

  const handleAddTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now(), status: "Pending" }]);
  };

  const handleStatusChange = (id, status) => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, status } : task)));
  };

  // UI logic
  if (!currentUser) {
    return <Login onLogin={handleLogin} />;
  }

  if (currentUser.role === "admin") {
    return (
      <AdminDashboard
        user={currentUser}
        users={users}
        tasks={tasks}
        onAddTask={handleAddTask}
        onStatusChange={handleStatusChange}
        onLogout={handleLogout}
      />
    );
  }

  return (
    <EmployeePanel
      user={currentUser}
      tasks={tasks}
      onStatusChange={handleStatusChange}
      onLogout={handleLogout}
    />
  );
};

export default App;

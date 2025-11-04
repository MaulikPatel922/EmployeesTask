import React from "react";
import TaskForm from "./Taskform";
import TaskList from "./Tasklist";
import { motion } from "framer-motion";
import { LogOut, Users, ClipboardList, CheckCircle } from "lucide-react";

const AdminDashboard = ({ user, users, tasks, onAddTask, onStatusChange, onLogout }) => {
  const employees = users.filter((u) => u.role === "employee");

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 p-8">
      {/* Header */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex justify-between items-center mb-10"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-blue-800 tracking-wide">
          Admin Dashboard
        </h1>
        <button
          onClick={onLogout}
          className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl shadow transition-all duration-300"
        >
          <LogOut size={18} /> Logout
        </button>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center"
        >
          <Users size={40} className="text-blue-500 mb-3" />
          <p className="text-gray-500">Total Employees</p>
          <h2 className="text-3xl font-semibold text-blue-700 mt-1">{employees.length}</h2>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center"
        >
          <ClipboardList size={40} className="text-green-500 mb-3" />
          <p className="text-gray-500">Total Tasks</p>
          <h2 className="text-3xl font-semibold text-green-700 mt-1">{tasks.length}</h2>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center"
        >
          <CheckCircle size={40} className="text-purple-500 mb-3" />
          <p className="text-gray-500">Completed Tasks</p>
          <h2 className="text-3xl font-semibold text-purple-700 mt-1">
            {tasks.filter((t) => t.status === "Completed").length}
          </h2>
        </motion.div>
      </motion.div>

      {/* Task Management Section */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="space-y-10"
      >
        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Assign New Task</h2>
          <TaskForm onAddTask={onAddTask} employees={employees} />
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">All Tasks</h2>
          <TaskList tasks={tasks} onStatusChange={onStatusChange} />
        </div>
      </motion.div>
    </div>
  );
};

export default AdminDashboard;

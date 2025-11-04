import React from "react";
import { motion } from "framer-motion";
import { LogOut, UserCircle2 } from "lucide-react";
import EmployeeTaskList from "./EmployeeTaskList";

const EmployeePanel = ({ user, tasks, onStatusChange, onLogout }) => {
  const myTasks = tasks.filter((task) => task.employee === user.name);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 p-6">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row justify-between items-center bg-white shadow-md p-6 rounded-2xl mb-8 border border-gray-100"
      >
        <div className="flex items-center gap-3">
          <UserCircle2 size={40} className="text-green-600" />
          <div>
            <h1 className="text-3xl font-bold text-green-700">
              Welcome, {user.name}
            </h1>
            <p className="text-gray-500 text-sm">
              Here’s your task overview for today
            </p>
          </div>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onLogout}
          className="mt-4 md:mt-0 flex items-center gap-2 bg-red-500 text-white px-5 py-2.5 rounded-xl font-semibold shadow hover:bg-red-600 transition-all"
        >
          <LogOut size={18} />
          Logout
        </motion.button>
      </motion.div>

      {/* Task List Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <EmployeeTaskList
          employeeName={user.name}
          tasks={myTasks}
          onStatusChange={onStatusChange}
        />
      </motion.div>
    </div>
  );
};

export default EmployeePanel;

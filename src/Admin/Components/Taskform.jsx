import React, { useState } from "react";
import { motion } from "framer-motion";
import { PlusCircle } from "lucide-react";

const TaskForm = ({ onAddTask, employees }) => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    employee: "",
    dueDate: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.employee)
      return alert("Please fill all required fields!");
    onAddTask(form);
    setForm({ title: "", description: "", employee: "", dueDate: "" });
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl shadow-lg border border-blue-100"
    >
      <div className="flex items-center gap-2 mb-6">
        <PlusCircle size={24} className="text-blue-600" />
        <h2 className="text-2xl font-semibold text-blue-700">
          Assign New Task
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Task Title */}
        <div>
          <label className="block text-gray-600 mb-2 font-medium">
            Task Title <span className="text-red-500">*</span>
          </label>
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Enter task title"
            className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
          />
        </div>

        {/* Employee */}
        <div>
          <label className="block text-gray-600 mb-2 font-medium">
            Assign To <span className="text-red-500">*</span>
          </label>
          <select
            name="employee"
            value={form.employee}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition bg-white"
          >
            <option value="">Select Employee</option>
            {employees.map((emp) => (
              <option key={emp.id} value={emp.name}>
                {emp.name}
              </option>
            ))}
          </select>
        </div>

        {/* Due Date */}
        <div>
          <label className="block text-gray-600 mb-2 font-medium">
            Due Date
          </label>
          <input
            type="date"
            name="dueDate"
            value={form.dueDate}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
          />
        </div>

        {/* Description */}
        <div className="md:col-span-2">
          <label className="block text-gray-600 mb-2 font-medium">
            Task Description
          </label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Enter task details..."
            className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition resize-none"
            rows="3"
          />
        </div>
      </div>

      {/* Submit Button */}
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        type="submit"
        className="mt-6 w-full md:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-md transition-all duration-300"
      >
        Add Task
      </motion.button>
    </motion.form>
  );
};

export default TaskForm;

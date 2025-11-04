import React from "react";
import { motion } from "framer-motion";
import { ClipboardList, Clock, CheckCircle2 } from "lucide-react";

const TaskList = ({ tasks, onStatusChange }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl shadow-lg border border-blue-100"
    >
      {/* Header */}
      <div className="flex items-center gap-2 mb-6">
        <ClipboardList size={24} className="text-blue-600" />
        <h2 className="text-2xl font-semibold text-blue-700">All Tasks</h2>
      </div>

      {tasks.length === 0 ? (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-gray-500 italic text-center py-6"
        >
          No tasks assigned yet.
        </motion.p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-blue-100 text-blue-700">
                <th className="p-3 font-semibold">Title</th>
                <th className="p-3 font-semibold">Employee</th>
                <th className="p-3 font-semibold">Due Date</th>
                <th className="p-3 font-semibold">Status</th>
                <th className="p-3 font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task, index) => (
                <motion.tr
                  key={task.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="border-b hover:bg-blue-50 transition-all"
                >
                  <td className="p-3 text-gray-700">{task.title}</td>
                  <td className="p-3 text-gray-700">{task.employee}</td>
                  <td className="p-3 text-gray-600">
                    {task.dueDate ? (
                      <div className="flex items-center gap-2">
                        <Clock size={16} className="text-blue-500" />
                        {task.dueDate}
                      </div>
                    ) : (
                      "—"
                    )}
                  </td>
                  <td className="p-3">
                    <span
                      className={`px-3 py-1 text-sm font-medium rounded-full ${
                        task.status === "Completed"
                          ? "bg-green-100 text-green-700"
                          : task.status === "In Progress"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {task.status}
                    </span>
                  </td>
                  <td className="p-3">
                    <select
                      value={task.status}
                      onChange={(e) =>
                        onStatusChange(task.id, e.target.value)
                      }
                      className="border border-gray-300 p-2 rounded-md text-gray-700 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    >
                      <option>Pending</option>
                      <option>In Progress</option>
                      <option>Completed</option>
                    </select>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </motion.div>
  );
};

export default TaskList;

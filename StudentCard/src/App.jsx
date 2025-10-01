import React from "react";

export default function App() {
  const students = [
    { name: "Imran", roll: "23BCS12475", course: "Computer Science" },
    { name: "Aman", roll: "23BCS12212", course: "BCA" },
    { name: "Ansh", roll: "23BCS13150", course: "BCom" },
    { name: "Lucky", roll: "23BCS11056", course: "BBA" },
  ];

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Students</h1>
      {students.map((student, index) => (
        <div key={index} className="border p-4 rounded shadow mb-4">
          <h2 className="font-bold text-lg">{student.name}</h2>
          <p>Roll No: {student.roll}</p>
          <p>Course: {student.course}</p>
        </div>
      ))}
    </div>
  );
}

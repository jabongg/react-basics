import React, { useEffect, useState } from "react";
import axios from "axios";

function Department() {
  const [department, setDepartment] = useState(null); // Initialize as null or an empty object/array
  const [error, setError] = useState(null);

  // Assuming you want to get a department by ID, let's use an example ID here
  const departmentId = 1; // Change this based on your actual needs (could be dynamic)

  // check health
  useEffect(() => {
    // Create an async function inside useEffect and call it
    const fetchDepartment = async () => {
      try {
        const response = await axios.get(`http://localhost:9001/department/${departmentId}`);
        console.log(response.data);
        setDepartment(response.data); // Update state with fetched data
      } catch (error) {
        console.error("There was an error fetching the data: ", error); // Error handling
      }
    };

    fetchDepartment(); // Call the async function

  }, []); // Empty dependency array ensures this runs only once when the component mounts

  // Logging department after it has been updated
  useEffect(() => {
    console.log(department);
  }, [department]); // This useEffect will run whenever the department state changes

  if (error) {
    return <p className="text-center text-red-500">{error}</p>; // Display error message if fetch fails
  }

  // Check if department data is available, if not display loading state
  if (!department) {
    return <p className="text-center text-gray-600">Loading department data...</p>;
  }

  return (
    <> 
            <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg my-10">
            <h1 className="text-2xl font-semibold text-center mb-6">Department Details</h1>
            
            {/* Table structure */}
            <table className="min-w-full table-auto border-collapse border border-gray-300">
            <thead>
                <tr className="bg-green-100 text-left">
                <th className="px-4 py-2 font-medium text-white-700">Department ID</th>
                <th className="px-4 py-2 font-medium text-white-700">Department Name</th>
                <th className="px-4 py-2 font-medium text-white-700">Location</th>
                <th className="px-4 py-2 font-medium text-black-700">Department Code</th>
                </tr>
            </thead>
            <tbody>
                {department.map((department) => (
                    <tr key={department.departmentId} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-2">{department.departmentId}</td>
                    <td className="px-4 py-2">{department.departmentName}</td>
                    <td className="px-4 py-2">{department.location}</td>
                    <td className="px-4 py-2">{department.departmentCode}</td>
                    </tr>
                ))}
            </tbody>
            </table>
        </div>
    </>
  );
}

export default Department;

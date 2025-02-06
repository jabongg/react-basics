import React, { useEffect, useState } from "react";
import axios from "axios";

function Department() {
  const [department, setDepartment] = useState(null); // Initialize as null or an empty object/array
  const [error, setError] = useState(null);
  const [retryCount, setRetryCount] = useState(0); // To count retry attempts
  const [loading, setLoading] = useState(true); // To handle loading state

  // Assuming you want to get a department by ID, let's use an example ID here
  const departmentId = 1; // Change this based on your actual needs (could be dynamic)
  // Max retries and interval between retries
  const maxRetries = 3;
  const retryInterval = 5000; // 5 seconds

  // hardcoded list of departments to use as a fallback
  const defaultDepartments = [
    { departmentId: 1, departmentName: "HR", location: "New York", departmentCode: "HR01" },
    { departmentId: 2, departmentName: "Engineering", location: "San Francisco", departmentCode: "ENG02" },
    { departmentId: 3, departmentName: "Sales", location: "Chicago", departmentCode: "SALES03" },
    { departmentId: 4, departmentName: "Marketing", location: "Austin", departmentCode: "MKT04" },
    { departmentId: 5, departmentName: "Finance", location: "Los Angeles", departmentCode: "FIN05" },
    { departmentId: 6, departmentName: "Operations", location: "Miami", departmentCode: "OPS06" },
    { departmentId: 7, departmentName: "IT", location: "Seattle", departmentCode: "IT07" },
    { departmentId: 8, departmentName: "Legal", location: "Washington", departmentCode: "LEGAL08" },
    { departmentId: 9, departmentName: "R&D", location: "Boston", departmentCode: "RD09" },
    { departmentId: 10, departmentName: "Customer Support", location: "Dallas", departmentCode: "CS10" },
  ];

  // check health
  useEffect(() => {
    // Create an async function inside useEffect and call it
    // function to fetch departments
    const fetchDepartment = async () => {
      try {
        const response = await axios.get(`http://localhost:9001/department/all`);
        console.log(response.data);
        setDepartment(response.data); // Update state with fetched data
        setLoading(false); // Stop loading once data is fetched
      } catch (error) {
        console.error("There was an error fetching the data: ", error); // Error handling
        if (retryCount < maxRetries) {
            setRetryCount((prevCount) => prevCount + 1);
        } else {
            //setError("Oops, something went wrong while loading your data.");
            setDepartment(defaultDepartments); // Fallback to hardcoded departments
            setLoading(false);        
        }
      }
    };

    // Retry logic
    if (retryCount < maxRetries) {
    const timer = setTimeout(() => {
        fetchDepartment();
        console.log("retry triggered!")
    }, retryInterval);
    return () => clearTimeout(timer); // Clean up timeout on component unmount
    }
    
    fetchDepartment(); // Call the async function

  }, [retryCount]); // Empty dependency array ensures this runs only once when the component mounts

  // Logging department after it has been updated
  useEffect(() => {
    console.log(department);
  }, [department]); // This useEffect will run whenever the department state changes

  // Render loading, error, or department data
  if (loading) {
    return <p className="text-center text-gray-600">Loading department data...</p>;
  }

  if (error) {
    return <p className="text-center text-red-600">{error}</p>;
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
                {department.map((d) => (
                    <tr key={d.departmentId} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-2">{d.departmentId}</td>
                    <td className="px-4 py-2">{d.departmentName}</td>
                    <td className="px-4 py-2">{d.location}</td>
                    <td className="px-4 py-2">{d.departmentCode}</td>
                    </tr>
                ))}
            </tbody>
            </table>
        </div>
    </>
  );
}

export default Department;

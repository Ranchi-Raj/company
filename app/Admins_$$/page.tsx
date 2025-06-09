"use client";

import axios from "axios";
import { useEffect, useState } from "react";

interface Response {
  _id: string;
  firstname: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
}

export default function ResponseList() {
  const [responses, setResponses] = useState<Response[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.post("/api/getresponse");
        console.log(res.data);
        setResponses(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen text-white text-lg font-medium bg-gradient-to-b from-[#0a0a2b] via-[#0a1a3d] to-[#1a003d]">
        Loading responses...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a2b] via-[#0a1a3d] to-[#1a003d] text-white p-6">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10">
        Submitted Responses
      </h1>

      <div className="space-y-6 max-w-4xl mx-auto">
        {responses.map((res) => (
          <div
            key={res._id}
            className="bg-white/10 backdrop-blur-sm rounded-xl shadow-md p-6 border border-white/20 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex flex-col sm:flex-row sm:justify-between">
              <div>
                <h2 className="text-xl font-semibold text-white">
                  {res.firstname} {res.lastName}
                </h2>
                <p className="text-sm text-gray-300">{res.email}</p>
              </div>
              <p className="text-xs text-gray-400 mt-2 sm:mt-0">
                {new Date(res.createdAt).toLocaleString()}
              </p>
            </div>
            <h3 className="mt-3 text-md font-semibold text-indigo-300">{res.subject}</h3>
            <p className="mt-2 text-gray-200">{res.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export default function ResponseList() {
  const [response, setResponse] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.post("/api/getresponse");
        console.log(res.data)
        setResponse(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="p-4 space-y-4">
      {response.map((res: any) => (
        <div key={res._id} id={res._id} className="bg-gray-100 rounded p-4 shadow">
          <h1 className="text-xl font-bold">{res.firstname} {res.lastName}</h1>
          <h2 className="text-sm text-gray-600">{res.email}</h2>
          <h3 className="font-semibold">{res.subject}</h3>
          <p className="mt-2">{res.message}</p>
          <p className="mt-1 text-xs text-gray-500">{new Date(res.createdAt).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
}

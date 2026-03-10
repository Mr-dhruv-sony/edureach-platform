import { useEffect, useState } from "react";
import { getLeads } from "../services/lead.service";

interface Lead {
  _id: string;
  name: string;
  email?: string;
  phone?: string;
  interest?: string;
  source: string;
  createdAt: string;
}

export default function AdminPage() {

  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchLeads = async () => {

      try {

        const data = await getLeads();
        setLeads(data);

      } catch (error) {

        console.error("Failed to load leads");

      } finally {

        setLoading(false);

      }

    };

    fetchLeads();

  }, []);

  const today = new Date().toDateString();

  const todayLeads = leads.filter(
    lead => new Date(lead.createdAt).toDateString() === today
  );

  if (loading) {
    return <div className="p-10 text-lg">Loading leads...</div>;
  }

  return (

    <div className="p-10 bg-gray-50 min-h-screen">

      <h1 className="text-3xl font-bold mb-8">
        Admissions CRM Dashboard
      </h1>

      {/* Stats Cards */}

      <div className="grid grid-cols-3 gap-6 mb-10">

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-gray-500">Total Leads</h3>
          <p className="text-3xl font-bold">{leads.length}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-gray-500">Today's Leads</h3>
          <p className="text-3xl font-bold">{todayLeads.length}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-gray-500">Chatbot Leads</h3>
          <p className="text-3xl font-bold">
            {leads.filter(l => l.source === "chatbot").length}
          </p>
        </div>

      </div>

      {/* Leads Table */}

      <div className="bg-white rounded-xl shadow overflow-hidden">

        <table className="w-full">

          <thead className="bg-gray-100">

            <tr>

              <th className="text-left p-4">Name</th>
              <th className="text-left p-4">Interest</th>
              <th className="text-left p-4">Source</th>
              <th className="text-left p-4">Date</th>

            </tr>

          </thead>

          <tbody>

            {leads.map((lead) => (

              <tr
                key={lead._id}
                className="border-t"
              >

                <td className="p-4">
                  {lead.name}
                </td>

                <td className="p-4">
                  {lead.interest}
                </td>

                <td className="p-4">
                  {lead.source}
                </td>

                <td className="p-4">
                  {new Date(lead.createdAt).toLocaleDateString()}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

  );

}
"use client"
import { useState } from 'react';

const ConfigPage = () => {
  const [eventName, setEventName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [savedConfigs, setSavedConfigs] = useState([]);

  const handleSaveConfig = () => {
    // Save the current configuration to the list of saved configurations
    const newConfig = { eventName, startDate, endDate };
    setSavedConfigs((prevConfigs) => [...prevConfigs, newConfig]);

    // Clear input fields after saving
    setEventName('');
    setStartDate('');
    setEndDate('');
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img className="h-28 w-full object-cover md:w-48" src="/images/bird.png" alt="Event" />
            <img className="h-18 object-cover md:w-[130px] relative left-10 top-10" src="/images/sms-pic.png" alt="Event" />
          </div>
          <div className="p-8">
            <h1 className="text-3xl font-semibold mb-4">Event Configuration</h1>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Event Name:</label>
              <input
                type="text"
                className="border border-gray-300 p-2 w-full"
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Start Date:</label>
              <input
                type="date"
                className="border border-gray-300 p-2 w-full"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">End Date:</label>
              <input
                type="date"
                className="border border-gray-300 p-2 w-full"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>

            <button className="bg-blue-500 text-white p-2 rounded" onClick={handleSaveConfig}>
              Save Configuration
            </button>
          </div>
        </div>
      </div>

      {/* Display saved configurations as cards */}
      <div className="mt-8 space-y-4">
        {savedConfigs.map((config, index) => (
          <div key={index} className="bg-white p-4 border border-gray-300 rounded-md shadow-md">
            <h2 className="text-xl font-semibold mb-2">Saved Configuration #{index + 1}</h2>
            <p className="text-gray-700">
              Event Name: {config.eventName}<br />
              Start Date: {config.startDate}<br />
              End Date: {config.endDate}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConfigPage;



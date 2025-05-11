import Navbar from "@/components/navbar";
import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Main Content */}
      <div className="bg-primary h-56 w-full relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="pt-12 text-white">
              <h1 className="text-5xl font-bold mb-4">Welcome</h1>
              <div className="flex items-center text-white/90">
                <span className="text-lg">Your Dashboard</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Add your main content here */}
      </main>
    </div>
  );
};

export default Home;

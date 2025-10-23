import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from '../components/dashboard/layout/DashboardLayout';
import DashboardInput from '../components/dashboard/layout/DashboardInput';
import TextToImage from '../components/dashboard/pages/TextToImage';
import Prompts from '../components/dashboard/pages/Prompts';
import ContactUs from '../components/dashboard/pages/ContactUs';
import TrainDocs from '../components/dashboard/pages/TrainDocs';
import Docs from '../components/dashboard/pages/Docs';
import Gallery from '../components/dashboard/pages/Gallery';

// Placeholder components for other pages
// const TrainDocs = () => <div>Train Docs Page - Coming Soon</div>;
const ImageEditor = () => <div>Image Editor Page - Coming Soon</div>;
// const Gallery = () => <div>Gallery Page - Coming Soon</div>;
// const ContactUs = () => <div>Contact Us Page - Coming Soon</div>;
// const Docs = () => <div>Docs Page - Coming Soon</div>;

const Dashboard = () => {
  return (
    <Routes>
      {/* Main Dashboard with Sidebar */}
      <Route path="/" element={
        <DashboardLayout>
          <DashboardInput />
        </DashboardLayout>
      } />
      
      {/* Individual Pages WITHOUT Sidebar */}
      <Route path="/text-to-image" element={<TextToImage />} />
      <Route path="/prompts" element={<Prompts />} />
      <Route path="/train-docs" element={<TrainDocs />} />
      <Route path="/image-editor" element={<ImageEditor />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/docs" element={<Docs />} />
    </Routes>
  );
};

export default Dashboard;
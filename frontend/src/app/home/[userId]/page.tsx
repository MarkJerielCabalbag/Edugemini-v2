"use client"
import Navbar from "@/components/navbar";
import React from "react";
import { BookOpen, BarChart2, Zap, MessageSquare, Layers, CheckCircle2, FileText, FileBarChart, FileSpreadsheet, FileCode2, Image, Video, Archive, UserCheck, Users, Clock, Scale, TrendingUp, Megaphone, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import CreateClassroomModal from "@/components/modals/instructor/CreateClassroomModal";
import JoinClassroomModal from "@/components/modals/student/JoinClassroomModal";

const features = [
  {
    icon: <BookOpen className="w-7 h-7 text-slate-600" />, title: "Centralized Learning", desc: "Assignments, resources, and announcements in one place."
  },
  {
    icon: <BarChart2 className="w-7 h-7 text-slate-600" />, title: "Analytics & Insights", desc: "Real-time analytics for classes and students."
  },
  {
    icon: <Zap className="w-7 h-7 text-slate-600" />, title: "Instant Feedback", desc: "Personalized, actionable feedback for every student."
  },
  {
    icon: <MessageSquare className="w-7 h-7 text-slate-600" />, title: "Easy Communication", desc: "Smooth messaging between instructors and students."
  },
  {
    icon: <Layers className="w-7 h-7 text-slate-600" />, title: "Flexible Formats", desc: "Supports PDF, DOCX, PPTX, CSV, images, video, and more."
  },
  {
    icon: <CheckCircle2 className="w-7 h-7 text-slate-600" />, title: "Automation", desc: "AI grading, plagiarism checks, and progress tracking."
  },
];



const fileIcons = [
  { icon: <FileText className="w-5 h-5 text-slate-500" />, label: "PDF" },
  { icon: <FileBarChart className="w-5 h-5 text-slate-500" />, label: "DOCX" },
  { icon: <FileSpreadsheet className="w-5 h-5 text-slate-500" />, label: "CSV" },
  { icon: <FileCode2 className="w-5 h-5 text-slate-500" />, label: "TXT" },
  { icon: <Image className="w-5 h-5 text-slate-500" />, label: "JPG/PNG" },
  { icon: <Video className="w-5 h-5 text-slate-500" />, label: "MP4" },
  { icon: <Archive className="w-5 h-5 text-slate-500" />, label: "ZIP" },
  { icon: <HelpCircle className="w-5 h-5 text-slate-500" />, label: "More" },
];

const Home = () => {
  const [showCreateClassroomModal, setShowCreateClassroomModal] = React.useState<boolean>(false)
const [showJoinClassroomModal, setShowJoinClassroomModal] = React.useState<boolean>(false)
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-slate-50 to-slate-200 relative overflow-hidden">
      <Navbar />

      {showCreateClassroomModal && <CreateClassroomModal open={showCreateClassroomModal} onOpenChange={setShowCreateClassroomModal} />}
      {showJoinClassroomModal && <JoinClassroomModal open={showJoinClassroomModal} onOpenChange={setShowJoinClassroomModal} />}

      {/* Hero Section */}
      <section className="relative w-full flex flex-col items-center justify-center py-24 px-4 bg-gradient-to-br from-slate-100 via-white to-slate-200 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <svg width="100%" height="100%" className="absolute inset-0 w-full h-full" style={{opacity:0.07}}><circle cx="60%" cy="30%" r="360" fill="#64748b" /><circle cx="20%" cy="80%" r="220" fill="#94a3b8" /></svg>
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold text-slate-800 mb-4 text-center drop-shadow">EduGemini</h1>
        <h2 className="text-2xl md:text-3xl font-medium text-slate-600 mb-6 text-center">AI-Powered Classroom Management</h2>
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mb-10 text-center">Streamline grading, feedback, analytics, and resource management. Empower instructors and students to focus on growth, not paperwork.</p>
        <div className="flex flex-row justify-center gap-4 sm:flex-col">
          <Button onClick={() => setShowCreateClassroomModal(true)}>Create Classroom</Button>
          <Button onClick={() => setShowJoinClassroomModal(true)}>Join Classroom</Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold text-slate-800 mb-8 text-center">Why EduGemini?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-md p-7 flex flex-col items-center text-center hover:scale-105 hover:shadow-xl transition-all group">
                <div className="mb-4">{f.icon}</div>
                <h4 className="text-xl font-semibold text-slate-700 mb-2 group-hover:text-slate-900 transition-colors">{f.title}</h4>
                <p className="text-slate-500">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported File Formats */}
      <section className="w-full bg-gradient-to-r from-slate-100 to-white py-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center justify-center gap-2"><Layers className="w-6 h-6 text-slate-500" /> Supported File Formats</h3>
          <div className="flex flex-wrap justify-center gap-3 mt-4">
            {fileIcons.map((f, i) => (
              <span key={i} className="flex items-center gap-1 bg-slate-50 border border-slate-200 px-4 py-2 rounded-lg text-slate-700 text-base font-medium shadow-sm">
                {f.icon} {f.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full bg-slate-100 py-16 px-4 mb-10">
  <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
    {/* Students Card */}
    <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-start">
      <div className="flex items-center gap-3 mb-6">
        <span className="inline-flex items-center justify-center rounded-full bg-primary/10 text-primary w-12 h-12">
          <UserCheck className="w-7 h-7" />
        </span>
        <h3 className="text-2xl font-bold text-slate-800">For Students</h3>
      </div>
      <ul className="flex flex-col gap-4 w-full">
        <li className="flex items-center gap-3 border-b last:border-b-0 pb-3 last:pb-0">
          <span className="inline-flex items-center justify-center rounded-full bg-slate-100 text-slate-500 w-8 h-8"><Zap className="w-5 h-5" /></span>
          <span className="text-slate-700">Immediate, actionable feedback</span>
        </li>
        <li className="flex items-center gap-3 border-b last:border-b-0 pb-3 last:pb-0">
          <span className="inline-flex items-center justify-center rounded-full bg-slate-100 text-slate-500 w-8 h-8"><TrendingUp className="w-5 h-5" /></span>
          <span className="text-slate-700">Clear progress tracking</span>
        </li>
        <li className="flex items-center gap-3 border-b last:border-b-0 pb-3 last:pb-0">
          <span className="inline-flex items-center justify-center rounded-full bg-slate-100 text-slate-500 w-8 h-8"><BookOpen className="w-5 h-5" /></span>
          <span className="text-slate-700">Personalized study tips</span>
        </li>
        <li className="flex items-center gap-3 border-b last:border-b-0 pb-3 last:pb-0">
          <span className="inline-flex items-center justify-center rounded-full bg-slate-100 text-slate-500 w-8 h-8"><CheckCircle2 className="w-5 h-5" /></span>
          <span className="text-slate-700">Motivation through transparent grading</span>
        </li>
        <li className="flex items-center gap-3">
          <span className="inline-flex items-center justify-center rounded-full bg-slate-100 text-slate-500 w-8 h-8"><BarChart2 className="w-5 h-5" /></span>
          <span className="text-slate-700">Greater engagement</span>
        </li>
      </ul>
    </div>
    {/* Instructors Card */}
    <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-start">
      <div className="flex items-center gap-3 mb-6">
        <span className="inline-flex items-center justify-center rounded-full bg-primary/10 text-primary w-12 h-12">
          <Users className="w-7 h-7" />
        </span>
        <h3 className="text-2xl font-bold text-slate-800">For Instructors</h3>
      </div>
      <ul className="flex flex-col gap-4 w-full">
        <li className="flex items-center gap-3 border-b last:border-b-0 pb-3 last:pb-0">
          <span className="inline-flex items-center justify-center rounded-full bg-slate-100 text-slate-500 w-8 h-8"><Clock className="w-5 h-5" /></span>
          <span className="text-slate-700">Save hours on grading</span>
        </li>
        <li className="flex items-center gap-3 border-b last:border-b-0 pb-3 last:pb-0">
          <span className="inline-flex items-center justify-center rounded-full bg-slate-100 text-slate-500 w-8 h-8"><Scale className="w-5 h-5" /></span>
          <span className="text-slate-700">Consistent, unbiased assessment</span>
        </li>
        <li className="flex items-center gap-3 border-b last:border-b-0 pb-3 last:pb-0">
          <span className="inline-flex items-center justify-center rounded-full bg-slate-100 text-slate-500 w-8 h-8"><BarChart2 className="w-5 h-5" /></span>
          <span className="text-slate-700">Insightful analytics</span>
        </li>
        <li className="flex items-center gap-3 border-b last:border-b-0 pb-3 last:pb-0">
          <span className="inline-flex items-center justify-center rounded-full bg-slate-100 text-slate-500 w-8 h-8"><Megaphone className="w-5 h-5" /></span>
          <span className="text-slate-700">Easy resource sharing</span>
        </li>
        <li className="flex items-center gap-3">
          <span className="inline-flex items-center justify-center rounded-full bg-slate-100 text-slate-500 w-8 h-8"><UserCheck className="w-5 h-5" /></span>
          <span className="text-slate-700">Identify struggling students early</span>
        </li>
      </ul>
    </div>
  </div>
</section>

    </div>
  );
};

export default Home;

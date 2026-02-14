"use client";

import { useState } from "react";
import {
  Star,
  Users,
  Clock,
  Award,
  Play,
  ChevronLeft,
  ChevronRight,
  Send,
} from "lucide-react";

const teacher = {
  name: "Anrik Anoshe",
  instrument: "Guitar",
  photo: null,
  stats: {
    students: 234,
    experience: "5 Years",
    classesHeld: 210,
    rating: 9.3,
  },
  price: 40,
  description: `Anrik Anoshe is a professional guitar instructor with over 5 years of experience in teaching students of all levels. Specializing in classical and acoustic guitar, Anrik brings a unique blend of technical expertise and creative passion to every lesson. His teaching philosophy centers on building a strong foundation while encouraging students to explore their own musical voice. Whether you're a complete beginner or looking to refine your skills, Anrik's patient and structured approach will help you achieve your musical goals.`,
};

const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const timeSlots = [
  "09:00",
  "10:00",
  "11:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
];

const availableSlots: Record<string, string[]> = {
  Mon: ["09:00", "10:00", "14:00", "15:00"],
  Tue: ["10:00", "11:00", "13:00"],
  Wed: ["09:00", "14:00", "15:00", "16:00"],
  Thu: ["11:00", "13:00", "17:00"],
  Fri: ["09:00", "10:00", "16:00", "17:00"],
  Sat: ["10:00", "11:00", "13:00", "14:00"],
  Sun: [],
};

const comments = [
  {
    id: 1,
    name: "Sarah Johnson",
    date: "12 Mar 2023",
    text: "Anrik is an amazing teacher! His patience and attention to detail helped me improve my guitar skills tremendously. Highly recommended!",
    rating: 5,
  },
  {
    id: 2,
    name: "Mike Chen",
    date: "28 Feb 2023",
    text: "Great teacher with a structured approach. I went from knowing nothing about guitar to playing full songs in just 3 months.",
    rating: 4,
  },
  {
    id: 3,
    name: "Emma Wilson",
    date: "15 Feb 2023",
    text: "Very professional and knowledgeable. The online lessons are well-organized and I always feel like I'm making progress.",
    rating: 5,
  },
];

const calendarDays = Array.from({ length: 30 }, (_, i) => i + 1);
const monthName = "April 2023";

export default function TeacherDetailPage() {
  const [selectedDay, setSelectedDay] = useState("Wed");
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [commentText, setCommentText] = useState("");
  const [currentCalendarDay, setCurrentCalendarDay] = useState(12);

  return (
    <>
      {/* Hero */}
      <section className="bg-dark py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Detail Teacher
          </h1>
          <p className="text-gray-400">
            View teacher profile, schedule, and reviews
          </p>
        </div>
      </section>

      {/* Teacher Profile Card */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 shadow-sm">
            <div className="flex flex-col md:flex-row items-start gap-8">
              {/* Photo */}
              <div className="w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center shrink-0">
                <span className="text-primary text-4xl font-bold">
                  {teacher.name.charAt(0)}
                </span>
              </div>

              {/* Info */}
              <div className="flex-1">
                <h2 className="text-2xl sm:text-3xl font-bold text-dark mb-2">
                  {teacher.name}
                </h2>
                <p className="text-primary font-medium mb-4">
                  {teacher.instrument} Instructor
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Users size={18} className="text-primary" />
                    <div>
                      <p className="text-lg font-bold text-dark">
                        {teacher.stats.students}
                      </p>
                      <p className="text-xs text-gray-medium">Students</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award size={18} className="text-primary" />
                    <div>
                      <p className="text-lg font-bold text-dark">
                        {teacher.stats.experience}
                      </p>
                      <p className="text-xs text-gray-medium">Experience</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={18} className="text-primary" />
                    <div>
                      <p className="text-lg font-bold text-dark">
                        {teacher.stats.classesHeld}
                      </p>
                      <p className="text-xs text-gray-medium">Classes Held</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star size={18} className="text-primary" />
                    <div>
                      <p className="text-lg font-bold text-dark">
                        {teacher.stats.rating}
                      </p>
                      <p className="text-xs text-gray-medium">Rating</p>
                    </div>
                  </div>
                </div>

                {/* Price & Button */}
                <div className="flex items-center gap-6">
                  <div>
                    <span className="text-3xl font-bold text-primary">
                      ${teacher.price}
                    </span>
                    <span className="text-gray-medium text-sm">/session</span>
                  </div>
                  <button className="bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary-dark transition-colors">
                    Reservation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-xl font-bold text-dark mb-4">
            About the Teacher
          </h3>
          <p className="text-gray-600 leading-relaxed">{teacher.description}</p>
        </div>
      </section>

      {/* Video */}
      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative h-64 sm:h-96 bg-dark rounded-2xl flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
            <button className="relative z-10 w-16 h-16 bg-primary rounded-full flex items-center justify-center hover:bg-primary-dark transition-colors shadow-lg">
              <Play size={28} className="text-white ml-1" />
            </button>
            <p className="absolute bottom-4 left-4 text-white/60 text-sm z-10">
              Sample Teaching Video
            </p>
          </div>
        </div>
      </section>

      {/* Time Schedule */}
      <section className="py-12 bg-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-dark mb-8">Time Schedule</h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Calendar */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <button className="p-1 hover:text-primary transition-colors">
                  <ChevronLeft size={20} />
                </button>
                <h4 className="font-semibold text-dark">{monthName}</h4>
                <button className="p-1 hover:text-primary transition-colors">
                  <ChevronRight size={20} />
                </button>
              </div>
              <div className="grid grid-cols-7 gap-1 mb-2">
                {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
                  <div
                    key={d}
                    className="text-center text-xs font-medium text-gray-medium py-1"
                  >
                    {d}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-1">
                {/* Offset for April 2023 starting on Saturday */}
                {Array.from({ length: 6 }, (_, i) => (
                  <div key={`empty-${i}`} />
                ))}
                {calendarDays.map((day) => (
                  <button
                    key={day}
                    onClick={() => setCurrentCalendarDay(day)}
                    className={`h-9 rounded-lg text-sm transition-colors ${
                      day === currentCalendarDay
                        ? "bg-primary text-white font-medium"
                        : "hover:bg-primary/10 text-gray-700"
                    }`}
                  >
                    {day}
                  </button>
                ))}
              </div>
            </div>

            {/* Time Slots */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              {/* Day selector */}
              <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
                {weekDays.map((day) => (
                  <button
                    key={day}
                    onClick={() => {
                      setSelectedDay(day);
                      setSelectedTime(null);
                    }}
                    className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                      selectedDay === day
                        ? "bg-primary text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {day}
                  </button>
                ))}
              </div>

              {/* Slots */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {timeSlots.map((time) => {
                  const isAvailable =
                    availableSlots[selectedDay]?.includes(time);
                  return (
                    <button
                      key={time}
                      disabled={!isAvailable}
                      onClick={() => setSelectedTime(time)}
                      className={`py-3 rounded-xl text-sm font-medium transition-colors ${
                        !isAvailable
                          ? "bg-gray-50 text-gray-300 cursor-not-allowed"
                          : selectedTime === time
                          ? "bg-primary text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-primary/10 hover:text-primary"
                      }`}
                    >
                      {time}
                    </button>
                  );
                })}
              </div>

              {selectedTime && (
                <div className="mt-6 p-4 bg-primary/5 rounded-xl border border-primary/20">
                  <p className="text-sm text-dark">
                    Selected:{" "}
                    <span className="font-semibold text-primary">
                      {selectedDay} at {selectedTime}
                    </span>
                  </p>
                  <button className="mt-3 bg-primary text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-primary-dark transition-colors">
                    Book This Slot
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Comments */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-dark mb-8">Comments</h3>

          {/* Add Comment */}
          <div className="bg-white border border-gray-100 rounded-2xl p-6 mb-8 shadow-sm">
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                <span className="text-primary font-bold text-sm">U</span>
              </div>
              <div className="flex-1">
                <textarea
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  placeholder="Write your comment..."
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary resize-none"
                />
                <div className="flex justify-end mt-3">
                  <button className="bg-primary text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-primary-dark transition-colors flex items-center gap-2">
                    <Send size={14} />
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Comments List */}
          <div className="space-y-6">
            {comments.map((comment) => (
              <div
                key={comment.id}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-primary font-bold text-sm">
                      {comment.name.charAt(0)}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-semibold text-dark text-sm">
                        {comment.name}
                      </h4>
                      <span className="text-xs text-gray-medium">
                        {comment.date}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 mb-2">
                      {Array.from({ length: 5 }, (_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className={
                            i < comment.rating
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-200"
                          }
                        />
                      ))}
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {comment.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

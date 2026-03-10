import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface MentorsSectionProps {
  onReachMentors?: () => void;
}

export default function MentorsSection({ onReachMentors }: MentorsSectionProps) {

  const sectionRef = useRef<HTMLDivElement>(null);
  const triggered = useRef(false);

  useEffect(() => {

    const observer = new IntersectionObserver(
      (entries) => {

        const entry = entries[0];

        if (entry.isIntersecting && !triggered.current) {
          triggered.current = true;
          onReachMentors?.();
        }

      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();

  }, [onReachMentors]);

  const mentors = [

    {
      name: "Rahul Sharma",
      role: "AI Engineer - Google",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },

    {
      name: "Priya Patel",
      role: "Data Scientist - Microsoft",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },

    {
      name: "Arjun Mehta",
      role: "Product Manager - Amazon",
      avatar: "https://randomuser.me/api/portraits/men/52.jpg"
    },

    {
      name: "Neha Kapoor",
      role: "AI Researcher - IIT Delhi",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg"
    }

  ];

  return (

    <section
      ref={sectionRef}
      id="mentors"
      className="py-20 bg-[#f8f6f4] text-center px-6"
    >

      <h2 className="text-4xl font-bold mb-3">
        Popular Mentors
      </h2>

      <p className="text-gray-600 mb-12">
        Learn from experienced Indian mentors across AI, product, software and data.
      </p>

      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8 max-w-5xl mx-auto">

        {mentors.map((mentor,index)=>(

          <motion.div
            key={index}
            whileHover={{y:-8}}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition cursor-pointer"
          >

            <img
              src={mentor.avatar}
              alt={mentor.name}
              className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
            />

            <h3 className="text-lg font-semibold">
              {mentor.name}
            </h3>

            <p className="text-sm text-red-800 font-medium">
              {mentor.role}
            </p>

          </motion.div>

        ))}

      </div>

    </section>

  );

}
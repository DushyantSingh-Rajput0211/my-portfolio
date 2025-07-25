import React from "react";

const timeline = [
  {
    type: "education",
    title: "Master of Science in Software Engineering Systems",
    institution: "Northeastern University, Boston, MA, USA",
    period: "2023 – Aug 2025 (expected)",
    color: "green",
    description: null,
    link: null,
  },
  {
    type: "achievement",
    title: "Advanced Certificate Program in Back End Software Development",
    institution: "E & ICT Academy, Indian Institute of Technology, Roorkee, India",
    period: "Nov 2023 – May 2024",
    color: "purple",
    description: null,
    link: {
      url: "https://eict.iitr.ac.in/wp-content/uploads/IITR-GL-BE-N2M-24-20-scaled.jpg",
      label: "View Certificate"
    },
  },
  {
    type: "achievement",
    title: "Long Service Award (10 years)",
    institution: "VE Commercial Vehicles Ltd., Madhya Pradesh, India",
    period: "July 2012 – July 2022",
    color: "purple",
    description: null,
    link: null,
  },
  {
    type: "education",
    title: "Bachelor of Engineering in Mechanical",
    institution: "Rajiv Gandhi Technical University, Gwalior, India",
    period: "2005 – 2009",
    color: "green",
    description: null,
    link: null,
  },
];

export default function Journey() {
  return (
    <section id="journey" className="bg-[#18192A] text-white px-4 py-16 flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-2 text-center">
        Journey
      </h2>
      <p className="text-lg text-gray-300 mb-12 text-center max-w-2xl">
        A timeline of my professional journey, highlighting key milestones and experiences.
      </p>
      <div className="relative max-w-4xl w-full mx-auto flex flex-col items-center">
        {/* Vertical line */}
        <div className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-violet-500/80 to-green-400/80 z-0" style={{transform: 'translateX(-50%)'}} />
        <div className="flex flex-col gap-16 w-full z-10">
          {timeline.map((item, idx) => {
            const isLeft = idx % 2 === 0;
            const color = item.color === "green" ? "from-green-400 to-green-600" : "from-violet-400 to-violet-600";
            const dotColor = item.color === "green" ? "bg-green-400" : "bg-violet-500";
            const cardShadow = item.color === "green" ? "shadow-green-500/30" : "shadow-violet-500/30";
            return (
              <div key={idx} className={`flex w-full justify-${isLeft ? "start" : "end"} items-center relative`}>
                {/* Timeline dot */}
                <div className={`absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full border-4 border-[#18192A] ${dotColor} z-20`} style={{top: '50%'}} />
                {/* Card */}
                <div className={`w-full max-w-md ${isLeft ? "mr-auto pl-0 pr-8" : "ml-auto pr-0 pl-8"}`} style={{zIndex: 30}}>
                  <div className={`group bg-[#23244a] rounded-2xl p-6 transition-all duration-300 shadow-lg ${cardShadow} hover:scale-105 hover:shadow-2xl hover:shadow-${item.color}-500/50 border border-transparent hover:border-${item.color}-400`}> 
                    <div className={`flex items-center mb-2 ${item.color === "green" ? "text-green-400" : "text-violet-400"} font-bold text-lg`}>
                      {item.type === "education" ? (
                        <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 3L2 9l10 6 10-6-10-6zm0 13v5m-4-4h8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      ) : (
                        <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      )}
                      {item.title}
                    </div>
                    <div className="text-sm font-medium mb-1 text-gray-300">{item.institution}</div>
                    <div className={`text-xs mb-2 ${item.color === "green" ? "text-green-300" : "text-violet-300"}`}>{item.period}</div>
                    {item.description && <div className="text-gray-400 mb-2 text-sm">{item.description}</div>}
                    {item.link && (
                      <a href={item.link.url} target="_blank" rel="noopener noreferrer" className={`inline-block mt-2 text-sm font-semibold underline ${item.color === "green" ? "text-green-400" : "text-violet-400"} hover:opacity-80`}>
                        {item.link.label}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
} 
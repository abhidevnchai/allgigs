import { useState } from "react";
import { motion } from "framer-motion";
import { ServicesSection } from "./ServicesSection";
import { ExploreSection } from "./ExploreSection";
import { HowItWorks } from "./HowItWorks";

export function ContentSwitcher() {
  const [activeTab, setActiveTab] = useState<"services" | "explore">(
    "services"
  );

  return (
    <div className="max-w-8xl mx-auto px-4 -mt-8 relative z-10">
      <div className="bg-mint rounded-xl p-2 flex gap-4 w-fit mx-auto shadow-lg">
        <motion.button
          className={`py-3 px-8 rounded-lg text-base font-medium transition-all ${
            activeTab === "services"
              ? "bg-cambridge text-mint shadow-md"
              : "text-slate hover:bg-nyanza"
          }`}
          onClick={() => setActiveTab("services")}
        >
          Book a Service
        </motion.button>
        <motion.button
          className={`py-3 px-8 rounded-lg text-base font-medium transition-all ${
            activeTab === "explore"
              ? "bg-sage-600 text-white shadow-md"
              : "text-sage-600 hover:bg-sage-50"
          }`}
          onClick={() => setActiveTab("explore")}
        >
          Explore Local
        </motion.button>
      </div>

      {/* Content Sections */}
      {activeTab === "services" ? (
        <div className="mt-16">
          <HowItWorks />
          <ServicesSection />
        </div>
      ) : (
        <div className="mt-16">
          <ExploreSection />
        </div>
      )}
    </div>
  );
}

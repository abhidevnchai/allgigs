import { motion } from "framer-motion";
import { HowItWorks } from "./HowItWorks";
import { ServicesSection } from "./ServicesSection";
import { ExploreSection } from "./ExploreSection";

interface ContentSwitcherProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function ContentSwitcher({ activeTab, onTabChange }: ContentSwitcherProps) {
  return (
    <div className="max-w-8xl mx-auto -mt-6 sm:-mt-8 relative z-10">
      <div className="bg-mint rounded-xl p-2 flex flex-col sm:flex-row gap-2 sm:gap-4 w-full sm:w-fit mx-auto shadow-lg">
        <motion.button
          className={`py-2 sm:py-3 px-4 sm:px-8 rounded-lg text-sm sm:text-base font-medium transition-colors ${
            activeTab === "services"
              ? "bg-cambridge text-mint shadow-md"
              : "text-slate hover:bg-nyanza"
          }`}
          onClick={() => onTabChange("services")}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Book a Service
        </motion.button>
        <motion.button
          className={`py-2 sm:py-3 px-4 sm:px-8 rounded-lg text-sm sm:text-base font-medium transition-colors ${
            activeTab === "explore"
              ? "bg-sage-600 text-white shadow-md"
              : "text-slate hover:bg-nyanza"
          }`}
          onClick={() => onTabChange("explore")}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Explore Local
        </motion.button>
      </div>

      <div className="mt-8 sm:mt-12 lg:mt-16">
        {activeTab === "services" ? (
          <>
            <HowItWorks />
            <ServicesSection />
          </>
        ) : (
          <ExploreSection />
        )}
      </div>
    </div>
  );
}

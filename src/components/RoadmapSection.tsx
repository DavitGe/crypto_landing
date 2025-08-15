import React from "react";
import { motion } from "framer-motion";
import "./RoadmapSection.scss";

interface RoadmapPhase {
  id: number;
  title: string;
  description: string;
  status: "completed" | "in-progress" | "upcoming";
  icon: string;
  color: string;
}

const roadmapData: RoadmapPhase[] = [
  {
    id: 1,
    title: "LAUNCH PHASE",
    description:
      "Token launch, website launch, community building, social media presence",
    status: "completed",
    icon: "🚀",
    color: "#FF00A0",
  },
  {
    id: 2,
    title: "MARKETING BLAST",
    description:
      "Influencer partnerships, meme contests, viral marketing campaigns",
    status: "in-progress",
    icon: "💥",
    color: "#00FFD1",
  },
  {
    id: 3,
    title: "EXCHANGE LISTINGS",
    description:
      "CEX listings, DEX partnerships, liquidity pools, trading competitions",
    status: "upcoming",
    icon: "📈",
    color: "#FFE600",
  },
  {
    id: 4,
    title: "ECOSYSTEM EXPANSION",
    description:
      "NFT collection, staking platform, governance token, DAO launch",
    status: "upcoming",
    icon: "🌐",
    color: "#FF6B35",
  },
  {
    id: 5,
    title: "METAVERSE INTEGRATION",
    description:
      "Virtual world partnerships, VR experiences, blockchain gaming",
    status: "upcoming",
    icon: "🎮",
    color: "#8A2BE2",
  },
];

const RoadmapSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const titleVariants = {
    hidden: {
      opacity: 0,
      y: 100,
      rotateX: -90,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
    },
  };

  const phaseVariants = {
    hidden: {
      opacity: 0,
      x: -100,
      rotate: -5,
    },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
    },
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "#00FF88";
      case "in-progress":
        return "#FFE600";
      case "upcoming":
        return "#FF6B35";
      default:
        return "#FF00A0";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed":
        return "COMPLETED";
      case "in-progress":
        return "IN PROGRESS";
      case "upcoming":
        return "UPCOMING";
      default:
        return "UNKNOWN";
    }
  };

  return (
    <section id="roadmap" className="roadmap-section">
      {/* Brutalist Background Patterns */}
      <div className="roadmap-background">
        <div className="pattern-grid"></div>
        <div className="pattern-dots"></div>
        <div className="pattern-lines"></div>
      </div>

      <div className="roadmap-container">
        {/* Massive Title */}
        <motion.div
          className="roadmap-header"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="roadmap-title">ROADMAP</h2>
          <div className="title-underline"></div>
        </motion.div>

        {/* Timeline Container */}
        <motion.div
          className="roadmap-timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {roadmapData.map((phase, index) => (
            <motion.div
              key={phase.id}
              className={`roadmap-phase ${phase.status}`}
              variants={phaseVariants}
              whileHover={{
                scale: 1.02,
                rotate: 1,
                transition: { duration: 0.2 },
              }}
            >
              {/* Phase Number */}
              <div className="phase-number">
                <span className="number">{phase.id}</span>
                <div className="number-background"></div>
              </div>

              {/* Phase Content */}
              <div className="phase-content">
                <div className="phase-header">
                  <div className="phase-icon">{phase.icon}</div>
                  <h3 className="phase-title">{phase.title}</h3>
                  <div
                    className="status-badge"
                    style={{ backgroundColor: getStatusColor(phase.status) }}
                  >
                    {getStatusText(phase.status)}
                  </div>
                </div>

                <p className="phase-description">{phase.description}</p>

                {/* Brutalist Decorative Elements */}
                <div className="phase-decoration">
                  <div className="decoration-line"></div>
                  <div className="decoration-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>

              {/* Connection Line */}
              {index < roadmapData.length - 1 && (
                <div className="phase-connector">
                  <div className="connector-line"></div>
                  <div className="connector-arrow">▶</div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="roadmap-cta"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="cta-text">READY TO JOIN THE REVOLUTION?</p>
          <button className="cta-button">GET STARTED NOW</button>
        </motion.div>
      </div>
    </section>
  );
};

export default RoadmapSection;

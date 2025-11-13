import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'motion/react';
import { BookOpen, Users, Award, TrendingUp, ArrowRight } from 'lucide-react';

const cards = [
  {
    id: 1,
    title: "World-Class Content",
    description: "Access curated medical resources from top institutions and leading healthcare professionals worldwide.",
    icon: BookOpen,
    color: "#0056B3",
    bgColor: "#E4EDF8",
    image: "https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwYm9va3N8ZW58MHx8fHwxNzYzMDI4Mjk5fDA&ixlib=rb-4.1.0&q=85",
    stats: { label: "Resources", value: "10,000+" }
  },
  {
    id: 2,
    title: "Expert Mentorship",
    description: "Learn from experienced specialists with decades of teaching experience in their respective fields.",
    icon: Users,
    color: "#009688",
    bgColor: "#b8d1ba",
    image: "https://images.unsplash.com/photo-1758691461935-202e2ef6b69f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBtZW50b3JpbmclMjBwYXRpZW50fGVufDB8fHx8MTc2MzAyODI5OXww&ixlib=rb-4.1.0&q=85",
    stats: { label: "Mentors", value: "500+" }
  },
  {
    id: 3,
    title: "Proven Results",
    description: "Join 50,000+ students who have advanced their medical careers with our comprehensive platform.",
    icon: Award,
    color: "#FF7043",
    bgColor: "#FEEFDC",
    image: "https://images.pexels.com/photos/34701254/pexels-photo-34701254.jpeg",
    stats: { label: "Success Rate", value: "95%" }
  },
  {
    id: 4,
    title: "Stay Current",
    description: "Get instant access to the latest research, clinical guidelines, and evidence-based medicine updates.",
    icon: TrendingUp,
    color: "#987D9C",
    bgColor: "#F9E8FA",
    image: "https://images.unsplash.com/photo-1578496480240-32d3e0c04525?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwcmVzZWFyY2glMjBsYWJvcmF0b3J5fGVufDB8fHx8MTc2MzAyODI5OXww&ixlib=rb-4.1.0&q=85",
    stats: { label: "Updates", value: "Daily" }
  }
];

const Card = ({ card, index, progress, activeIndex }) => {
  const scale = useTransform(progress, [0, 1], [1, 0.95]);
  const y = useTransform(progress, [index * 0.25, 0.75 + index * 0.25], [0, -100 * index]);
  const opacity = useTransform(progress, [0, 0.5, 1], [1, 1, 0.7]);
  const Icon = card.icon;
  const zIndex = index <= activeIndex
    ? cards.length - (activeIndex - index)
    : cards.length - index;

  return (
    <motion.div
      style={{
        scale,
        y,
        opacity,
        position: 'sticky',
        top: `100px`,
        zIndex,
      }}
      className="w-full"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="relative rounded-3xl overflow-hidden shadow-2xl group hover:shadow-3xl transition-shadow duration-500"
        style={{
          background: 'white',
          border: `2px solid ${card.color}15`,
        }}
      >
        {/* Card Holder Frame Effect */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-0 left-0 right-0 h-1"
            style={{
              background: `linear-gradient(90deg, ${card.color}, ${card.color}80, ${card.color})`
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-1 h-full"
            style={{ background: card.color, opacity: 0.1 }}
          />
          <div
            className="absolute top-0 right-0 w-1 h-full"
            style={{ background: card.color, opacity: 0.1 }}
          />
        </div>

        {/* Content Container */}
        <div className="flex flex-col md:flex-row">
          {/* Image Section with Overlay */}
          <div className="relative w-full md:w-2/5 h-64 md:h-auto overflow-hidden">
            <motion.img
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
              src={card.image}
              alt={card.title}
              className="w-full h-full object-cover"
            />
            {/* Gradient Overlay */}
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(135deg, ${card.color}40, transparent 70%)`
              }}
            />
            
            {/* Icon Badge */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute top-6 left-6"
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center backdrop-blur-md"
                style={{
                  background: 'rgba(255, 255, 255, 0.95)',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
                  border: `2px solid ${card.color}30`
                }}
              >
                <Icon size={32} strokeWidth={2} style={{ color: card.color }} />
              </div>
            </motion.div>

            {/* Stats Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute bottom-6 left-6 backdrop-blur-md rounded-xl px-4 py-2"
              style={{
                background: 'rgba(255, 255, 255, 0.95)',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
              }}
            >
              <div className="caption" style={{ color: 'var(--text-muted)' }}>
                {card.stats.label}
              </div>
              <div className="heading-3" style={{ color: card.color }}>
                {card.stats.value}
              </div>
            </motion.div>
          </div>

          {/* Text Content Section */}
          <div className="flex-1 p-8 md:p-10 flex flex-col justify-between">
            <div>
              <motion.h3
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="heading-1 mb-4"
                style={{ color: card.color }}
              >
                {card.title}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="body-large mb-6"
                style={{ color: 'var(--text-secondary)' }}
              >
                {card.description}
              </motion.p>
            </div>

            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ x: 5 }}
              className="inline-flex items-center gap-2 text-sm font-mono uppercase font-medium group/btn"
              style={{ color: card.color }}
            >
              Learn More
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover/btn:translate-x-1"
              />
            </motion.button>

            {/* Decorative Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="h-1 mt-6 rounded-full origin-left"
              style={{
                background: `linear-gradient(90deg, ${card.color}, transparent)`
              }}
            />
          </div>
        </div>

        {/* Decorative Corner Accent */}
        <div
          className="absolute top-0 right-0 w-32 h-32 opacity-10 pointer-events-none"
          style={{
            background: `radial-gradient(circle at top right, ${card.color}, transparent)`
          }}
        />
      </motion.div>
    </motion.div>
  );
};

const StackCards = () => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const segmentSize = 1 / cards.length;
    const nextIndex = Math.min(
      cards.length - 1,
      Math.max(0, Math.floor(latest / segmentSize))
    );
    setActiveIndex((current) => (current === nextIndex ? current : nextIndex));
  });

  return (
    <section
      ref={containerRef}
      className="relative py-20"
      style={{ 
        background: 'var(--bg-page)',
        minHeight: '200vh'
      }}
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-1 mb-4">Why Choose Jaypee Digital?</h2>
          <p className="body-large max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Discover how we're transforming medical education with cutting-edge resources and expert guidance
          </p>
        </motion.div>

        {/* Stacking Cards */}
        <div className="max-w-4xl mx-auto space-y-8">
          {cards.map((card, index) => (
            <Card
              key={card.id}
              card={card}
              index={index}
              progress={scrollYProgress}
              activeIndex={activeIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StackCards;

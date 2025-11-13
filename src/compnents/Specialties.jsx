import React from 'react';
import { motion } from 'motion/react';
import {
  FlaskConical,
  Heart,
  UserRound,
  SmilePlus,
  Pill,
  Scissors,
  Baby,
  ScanLine,
  Syringe
} from 'lucide-react';
import { specialties } from '../data/mock';

const iconMap = {
  FlaskConical,
  Heart,
  UserRound,
  SmilePlus,
  Pill,
  Scissors,
  Baby,
  ScanLine,
  Syringe
};

const Specialties = () => {
  return (
    <section className="py-20" style={{ background: 'var(--bg-page)' }}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading-1 mb-4">Medical Specialties</h2>
          <p className="body-large" style={{ color: 'var(--text-secondary)' }}>
            Explore comprehensive resources across all medical disciplines
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialties.map((specialty, index) => {
            const Icon = iconMap[specialty.icon];
            return (
              <motion.div
                key={specialty.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(0, 0, 0, 0.12)' }}
                className={`bg-gradient-to-br ${specialty.gradient} rounded-xl p-8 cursor-pointer group`}
                style={{
                  background: 'white',
                  border: '1px solid var(--border-light)',
                  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.03)'
                }}
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className="mb-4"
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center"
                    style={{
                      background: 'var(--accent-grey-200)',
                      color: 'var(--text-primary)'
                    }}
                  >
                    <Icon size={28} />
                  </div>
                </motion.div>
                <h3
                  className="heading-3 mb-2 transition-colors duration-300"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {specialty.name}
                </h3>
                <p className="body-small" style={{ color: 'var(--text-secondary)' }}>
                  {specialty.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Specialties;

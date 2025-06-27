import React from "react";
import { motion } from "framer-motion";


export function Contact() {
  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Contactez-nous</h2>
          <p className="text-gray-400">
            Nous serions ravis de discuter de votre projet
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-8 rounded-2xl bg-purple-900/10 border border-purple-500/20"
          >
            <h3 className="text-2xl font-semibold mb-6">Numero de telephone</h3>
            <p className="text-gray-400">0000000000</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="p-8 rounded-2xl bg-purple-900/10 border border-purple-500/20"
          >
            <h3 className="text-2xl font-semibold mb-6">Email</h3>
            <p className="text-gray-400">contact@ngd.digital</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
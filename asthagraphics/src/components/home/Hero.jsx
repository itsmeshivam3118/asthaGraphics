import { motion } from "framer-motion";

import hero from "../../assets/images/hero.jpg";

import Button from "../ui/Buttons";
import Container from "../ui/Container";

export default function Hero() {
  return (
    <section className="overflow-hidden bg-gradient-to-br from-rose-50 via-white to-white pt-40 pb-24">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="rounded-full bg-rose-100 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-rose-700">
              Premium Ribbon Manufacturer
            </span>

            <h1 className="mt-8 text-5xl font-black leading-tight text-gray-900 lg:text-7xl">
              Beautiful
              <span className="block text-rose-700">Decorative</span>
              Ribbons
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-gray-600">
              Premium satin, grosgrain, velvet and printed ribbons for gifting,
              packaging, branding and fashion.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button size="lg">Explore Collection</Button>

              <Button variant="secondary" size="lg">
                Contact Us
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={hero}
              alt="Ribbon"
              className="w-full rounded-[32px] shadow-2xl"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

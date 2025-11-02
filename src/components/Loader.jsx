import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-dark via-blue-950 to-dark"
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="relative"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-32 h-32 border-4 border-primary border-t-transparent rounded-full"
          />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute inset-0 flex items-center justify-center text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          >
            MF
          </motion.h1>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 text-xl text-gray-300"
        >
          Loading Portfolio...
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Loader;

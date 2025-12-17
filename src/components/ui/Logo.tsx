import { motion } from "framer-motion";

export const Logo = ({ className = "" }: { className?: string }) => {
    return (
        <motion.div
            className={`relative w-12 h-12 flex items-center justify-center ${className}`}
            whileHover={{ scale: 1.05 }}
        >
            <img 
                src="/src/assets/logo.jpg" 
                alt="Logo" 
                className="w-full h-full object-contain rounded-full"
            />
        </motion.div>
    );
};

export default Logo;

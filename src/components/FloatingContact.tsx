import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import MessengerImg from '../assets/messenger.png';

export const FloatingContact = () => {
    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4 items-end">

            {/* Messenger Button */}
            <div className="relative">
                {/* Ripple Effect Wrapper */}
                <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-40"></div>

                <motion.a
                    href="https://m.me/61568804255968" // Example link, update as needed
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-blue-500/50 transition-shadow group relative z-10 bg-white"
                >
                    <img src={MessengerImg} alt="Messenger" className="w-[110%] h-[110%] max-w-none ml-1 object-contain object-center rounded-full" />

                    {/* Tooltip on Hover */}
                    <span className="absolute right-full mr-4 bg-white/95 text-blue-600 text-sm font-bold py-1.5 px-3 rounded-lg shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none transform translate-y-1 group-hover:translate-y-0">
                        Nhắn tin FB
                    </span>
                </motion.a>
            </div>

            {/* Hotline (Phone) Button */}
            <div className="relative">
                {/* Ripple Effect Wrapper */}
                <div className="absolute inset-0 bg-fmc-orange rounded-full animate-ping opacity-40"></div>

                <motion.a
                    href="tel:0911661911"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-[62px] h-[62px] bg-gradient-to-tr from-fmc-orange to-orange-400 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-orange-500/50 transition-shadow relative z-10 group"
                >
                    <Phone className="w-7 h-7 animate-pulse" />

                    {/* Tooltip on Hover */}
                    <span className="absolute right-full mr-4 bg-white/95 text-fmc-orange text-sm font-bold py-1.5 px-3 rounded-lg shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none transform translate-y-1 group-hover:translate-y-0">
                        Gọi 09.11.66.1911
                    </span>
                </motion.a>
            </div>

        </div>
    );
};

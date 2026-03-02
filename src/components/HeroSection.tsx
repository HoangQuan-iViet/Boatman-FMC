
import { motion } from 'framer-motion';

export const HeroSection = () => {
    return (
        <section className="relative w-full overflow-hidden bg-gray-900 min-h-[90vh] md:min-h-screen flex items-center justify-center">
            {/* Background Image / Placeholder for Banner */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url('/src/assets/Banner.jpg')` }}
            >
                <div className="absolute inset-0 bg-black/50 md:bg-black/40"></div>
            </div>

            <div className="relative z-10 container mx-auto px-4 md:px-8 text-center md:text-left flex flex-col items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl mx-auto flex flex-col items-center"
                >
                    {/* Main Headline */}
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 leading-tight drop-shadow-lg text-center">
                        KỲ THI TOÁN HỌC QUỐC TẾ <br />
                        <span className="text-fmc-lime inline-block">FACTORIAL (FMC) 2026</span>
                    </h1>

                    {/* Sub-headline */}
                    <p className="text-lg md:text-2xl text-gray-100 mb-10 font-medium drop-shadow-md text-center max-w-3xl">
                        Đánh thức tiềm năng - Vươn tầm thế giới.<br className="hidden md:block" /> Cơ hội đại diện Việt Nam tranh tài tại Jakarta, Indonesia.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="#register"
                            className="bg-fmc-orange text-white px-8 py-4 rounded-full font-bold text-lg shadow-[0_0_20px_rgba(242,101,34,0.5)] hover:bg-orange-600 transition-colors w-full sm:w-auto text-center"
                        >
                            Đăng Ký Khảo Sát Tức Thì
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="#about"
                            className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-colors w-full sm:w-auto text-center"
                        >
                            Tìm Hiểu Thêm
                        </motion.a>
                    </div>
                </motion.div>
            </div>

            {/* Decorative gradient at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent z-10 pointer-events-none"></div>
        </section>
    );
};

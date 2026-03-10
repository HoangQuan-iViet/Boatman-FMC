import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { ChevronLeft, ChevronRight, Camera } from 'lucide-react';

import img1 from '../assets/img/ImgNews-FMC2501.jpg';
import img2 from '../assets/img/ImgNews-FMC2502.jpg';
import img3 from '../assets/img/ImgNews-FMC2503.jpg';
import img4 from '../assets/img/ImgNews-FMC2504.jpg';
import img5 from '../assets/img/ImgNews-FMC2505.jpg';
import img6 from '../assets/img/ImgNews-FMC2506.jpg';

const images = [img1, img2, img3, img4, img5, img6];

export const GallerySection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    // Autoplay functionality
    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(timer);
    }, [currentIndex]);

    const slideVariants: Variants = {
        hiddenRight: { x: '100%', opacity: 0 },
        hiddenLeft: { x: '-100%', opacity: 0 },
        visible: { x: '0', opacity: 1, transition: { duration: 0.6 } },
        exit: { opacity: 0, scale: 0.95, transition: { duration: 0.4 } },
    };

    const nextSlide = () => {
        setDirection(1);
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const prevSlide = () => {
        setDirection(-1);
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    return (
        <section className="py-20 relative overflow-hidden bg-fmc-dark">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 pointer-events-none"></div>

            <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center justify-center space-x-2 bg-white/10 text-fmc-lime px-4 py-2 rounded-full mb-6 font-semibold backdrop-blur-sm border border-white/20"
                    >
                        <Camera size={18} />
                        <span>Khoảnh khắc ấn tượng</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight"
                    >
                        Hình Ảnh Minh Họa Cuộc Thi
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-300 text-lg font-medium max-w-3xl mx-auto"
                    >
                        Những góc nhìn chân thực, quy mô tổ chức chuyên nghiệp và không khí sôi động từ các vòng thi của Factorial Math Competition.
                    </motion.p>
                </div>

                {/* Carousel Container */}
                <div className="relative max-w-3xl mx-auto rounded-[2rem] overflow-hidden shadow-2xl bg-black/50 aspect-video border-4 border-white/10 group">
                    <AnimatePresence initial={false} custom={direction} mode="popLayout">
                        <motion.img
                            key={currentIndex}
                            src={images[currentIndex]}
                            alt={`Hình ảnh cuộc thi ${currentIndex + 1}`}
                            custom={direction}
                            variants={slideVariants}
                            initial={direction > 0 ? 'hiddenRight' : 'hiddenLeft'}
                            animate="visible"
                            exit="exit"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </AnimatePresence>

                    {/* Navigation Buttons */}
                    <div className="absolute inset-0 flex items-center justify-between px-4 md:px-6 pointer-events-none">
                        <button
                            onClick={(e) => { e.preventDefault(); prevSlide(); }}
                            className="pointer-events-auto bg-black/40 hover:bg-fmc-lime hover:text-fmc-dark text-white p-3 md:p-4 rounded-full backdrop-blur-sm transition-all shadow-lg transform -translate-x-10 group-hover:translate-x-0 opacity-0 group-hover:opacity-100"
                            aria-label="Previous Slide"
                        >
                            <ChevronLeft size={28} className="md:w-8 md:h-8" />
                        </button>
                        <button
                            onClick={(e) => { e.preventDefault(); nextSlide(); }}
                            className="pointer-events-auto bg-black/40 hover:bg-fmc-orange hover:text-white text-white p-3 md:p-4 rounded-full backdrop-blur-sm transition-all shadow-lg transform translate-x-10 group-hover:translate-x-0 opacity-0 group-hover:opacity-100"
                            aria-label="Next Slide"
                        >
                            <ChevronRight size={28} className="md:w-8 md:h-8" />
                        </button>
                    </div>

                    {/* Indicators */}
                    <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 md:gap-3 z-20">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setDirection(index > currentIndex ? 1 : -1);
                                    setCurrentIndex(index);
                                }}
                                className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                    ? 'w-8 bg-fmc-lime shadow-[0_0_10px_rgba(170,210,17,0.8)]'
                                    : 'w-2 bg-white/50 hover:bg-white/80'
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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
    const [isHovered, setIsHovered] = useState(false);

    // Determines maximum slip index based on 4 items per view
    const itemsPerView = 4;
    const maxIndex = Math.max(0, images.length - itemsPerView);

    // Autoplay functionality
    useEffect(() => {
        if (isHovered) return; // Pause if hovered
        const timer = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(timer);
    }, [currentIndex, isHovered]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => {
            if (prevIndex >= maxIndex) return 0;
            return prevIndex + 1;
        });
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => {
            if (prevIndex <= 0) return maxIndex;
            return prevIndex - 1;
        });
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
                        className="inline-flex items-center justify-center space-x-2 bg-white/10 text-fmc-orange px-4 py-2 rounded-full mb-6 font-semibold backdrop-blur-sm border border-white/20 uppercase tracking-wider text-lg md:text-xl drop-shadow-sm"
                    >
                        <Camera size={22} className="inline-block" />
                        <span>Khoảnh khắc ấn tượng</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-black text-fmc-lime mb-6 uppercase tracking-tight drop-shadow-sm"
                    >
                        Hình Ảnh Minh Họa Cuộc Thi
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-300 leading-relaxed text-xl mb-8 font-medium max-w-3xl mx-auto"
                    >
                        Những góc nhìn chân thực, quy mô tổ chức chuyên nghiệp và không khí sôi động từ các vòng thi của Factorial Math Competition.
                    </motion.p>
                </div>

                {/* Carousel Container */}
                <div
                    className="relative max-w-6xl mx-auto group"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <div className="overflow-hidden p-2">
                        {/* We use a motion.div as a sliding track. With w-full, percentage translation translates relative to the container. */}
                        <motion.div
                            className="flex w-full"
                            animate={{ x: `-${currentIndex * (100 / itemsPerView)}%` }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                            {images.map((imgSrc, idx) => (
                                <div key={idx} className="flex-none p-2 w-[100%] sm:w-[50%] md:w-[25%] lg:w-[25%]">
                                    <div className="bg-white shadow-lg border-2 border-white/40 transform hover:-translate-y-2 transition-transform duration-300 aspect-square md:aspect-[3/4] lg:aspect-square relative overflow-hidden group/img">
                                        <img src={imgSrc} alt={`Hình ảnh cuộc thi ${idx + 1}`} className="w-full h-full object-cover" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-fmc-dark/80 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                                            <Camera className="text-white w-8 h-8 opacity-80" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="absolute inset-y-0 -left-4 md:-left-12 -right-4 md:-right-12 flex items-center justify-between pointer-events-none">
                        <button
                            onClick={(e) => { e.preventDefault(); prevSlide(); }}
                            className="pointer-events-auto bg-white hover:bg-fmc-lime text-fmc-dark p-3 md:p-4 rounded-full transition-all shadow-xl opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 border border-gray-100 hover:border-transparent hover:text-white"
                            aria-label="Previous Slide"
                        >
                            <ChevronLeft size={28} className="md:w-6 md:h-6" />
                        </button>
                        <button
                            onClick={(e) => { e.preventDefault(); nextSlide(); }}
                            className="pointer-events-auto bg-white hover:bg-fmc-orange text-fmc-dark p-3 md:p-4 rounded-full transition-all shadow-xl opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 border border-gray-100 hover:border-transparent hover:text-white"
                            aria-label="Next Slide"
                        >
                            <ChevronRight size={28} className="md:w-6 md:h-6" />
                        </button>
                    </div>

                    {/* Indicators */}
                    <div className="flex justify-center mt-8 gap-2 md:gap-3 z-20 relative">
                        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`h-3 rounded-full transition-all duration-300 ${currentIndex === index
                                    ? 'w-10 bg-fmc-lime shadow-[0_0_10px_rgba(170,210,17,0.8)]'
                                    : 'w-3 bg-white/30 hover:bg-white/60'
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

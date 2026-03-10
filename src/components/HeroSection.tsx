import { motion } from 'framer-motion';
import BannerWebP from '../assets/Banner.webp';
import BannerImg from '../assets/Banner.png';

export const HeroSection = () => {
    return (
        <section className="w-full bg-fmc-dark flex justify-center items-center relative">
            <div className="relative w-full max-w-[1920px] mx-auto">
                <picture className="w-full h-auto block">
                    <source srcSet={BannerWebP} type="image/webp" />
                    <source srcSet={BannerImg} type="image/png" />
                    <img
                        src={BannerImg}
                        alt="Banner FMC 2026"
                        className="w-full h-auto object-contain block"
                        fetchPriority="high"
                        decoding="sync"
                        loading="eager"
                    />
                </picture>

                {/* Floating Hotline Button */}
                {/* 🔴 CHÚ Ý: ĐIỀU CHỈNH VỊ TRÍ NÚT Ở BÊN TRÁI */}
                <motion.a
                    href="tel:0987531953"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                        opacity: { duration: 0.8 },
                        delay: 0.1
                    }}
                    className="absolute z-20 
                               top-[80%] left-[5%] md:top-[75%] md:left-[12%] -translate-x-0 md:-translate-x-1/2 -translate-y-1/2
                               bg-white/90 backdrop-blur-sm text-fmc-dark font-black 
                               text-[10px] sm:text-xs md:text-sm lg:text-lg xl:text-xl px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 xl:px-10 xl:py-4 
                               rounded-full shadow-[0_0_20px_rgba(255,255,255,0.6)] border-2 border-fmc-lime
                               hover:shadow-[0_0_30px_rgba(170,210,17,0.8)] hover:border-fmc-lime transition-all
                               flex items-center justify-center whitespace-nowrap"
                >
                    Hotline: 0987 53 1953 - 0986 68 1911
                </motion.a>

                {/* Floating Register CTA Button */}
                {/* 🔴 CHÚ Ý: BẠN CÓ THỂ ĐIỀU CHỈNH % CỦA top VÀ left Ở DƯỚI ĐÂY LÊN XUỐNG ĐỂ NÚT KHỚP CHÍNH XÁC VÀO VÙNG CHỮ SIN(...) */}
                <motion.a
                    href="https://forms.gle/yY2Jzd83Q612yCRGA"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                        opacity: { duration: 0.8 }
                    }}
                    className="absolute z-20 
                               top-[92%] left-[5%] md:top-[75%] md:left-[75.5%] -translate-x-0 md:-translate-x-1/2 -translate-y-1/2
                               bg-gradient-to-r from-fmc-orange to-orange-500 text-white font-black 
                               text-[10px] sm:text-xs md:text-sm lg:text-lg xl:text-xl px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 xl:px-10 xl:py-4 
                               rounded-full shadow-[0_0_20px_rgba(255,107,0,0.6)] border-2 border-white/50
                               hover:shadow-[0_0_30px_rgba(255,107,0,0.8)] hover:border-white transition-all
                               flex items-center justify-center whitespace-nowrap"
                >
                    ĐĂNG KÝ NGAY
                </motion.a>

                {/* Fade transition into the About Section (bg-[#aad211]) */}
                <div className="absolute bottom-0 left-0 w-full h-12 md:h-24 bg-gradient-to-t from-[#aad211] to-transparent pointer-events-none z-10"></div>
            </div>
        </section>
    );
};

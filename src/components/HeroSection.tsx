import BannerWebP from '../assets/Banner.webp';
import BannerImg from '../assets/Banner.png';

export const HeroSection = () => {
    return (
        <section className="w-full bg-fmc-dark flex justify-center items-center relative">
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

            {/* Fade transition into the About Section (bg-[#aad211]) */}
            <div className="absolute bottom-0 left-0 w-full h-12 md:h-24 bg-gradient-to-t from-[#aad211] to-transparent pointer-events-none"></div>
        </section>
    );
};

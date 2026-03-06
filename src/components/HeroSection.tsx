import BannerWebP from '../assets/Banner.webp';
import BannerImg from '../assets/Banner.png';

export const HeroSection = () => {
    return (
        <section className="w-full bg-gray-900 flex justify-center items-center">
            <picture className="w-full h-auto block">
                <source srcSet={BannerWebP} type="image/webp" />
                <source srcSet={BannerImg} type="image/png" />
                <img 
                    src={BannerImg} 
                    alt="Banner FMC 2026" 
                    className="w-full h-auto object-contain block" 
                    fetchpriority="high"
                    decoding="sync"
                    loading="eager"
                />
            </picture>
        </section>
    );
};

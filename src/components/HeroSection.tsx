import BannerImg from '../assets/Banner.jpg';

export const HeroSection = () => {
    return (
        <section className="w-full bg-gray-900 flex justify-center items-center">
            <img
                src={BannerImg}
                alt="Banner FMC 2026"
                className="w-full h-auto object-contain block"
            />
        </section>
    );
};

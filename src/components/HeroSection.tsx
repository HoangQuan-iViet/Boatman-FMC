

export const HeroSection = () => {
    return (
        <section className="relative w-full overflow-hidden bg-gray-900 h-[60vh] md:h-[80vh] flex items-center justify-center">
            {/* Background Image / Placeholder for Banner */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url('/src/assets/Banner.jpg')` }}
            >
                <div className="absolute inset-0 bg-black/50 md:bg-black/40"></div>
            </div>


            {/* Decorative gradient at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent z-10 pointer-events-none"></div>
        </section>
    );
};

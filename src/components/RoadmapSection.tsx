
import { motion } from 'framer-motion';

const milestones = [
    {
        date: 'Tháng 05/2026',
        title: 'Vòng Quốc gia',
        location: 'Tổ chức tại Việt Nam',
        color: 'border-fmc-lime',
        bg: 'bg-fmc-lime',
        icon: '/symbols/vietnam.png',
        imageScale: 'scale-[1.3]',
        delay: 0
    },
    {
        date: 'Tháng 05 - 07/2026',
        title: 'Ôn tập Vòng Quốc tế',
        location: 'Diễn ra tại Hà Nội',
        color: 'border-blue-500',
        bg: 'bg-blue-500',
        icon: '/symbols/ho-chi-minh-mausoleum.png',
        imageScale: 'scale-[1.1]',
        delay: 0.2
    },
    {
        date: '05/07 - 09/07/2026',
        title: 'Vòng Quốc tế FMC',
        location: 'Jakarta, Indonesia',
        color: 'border-fmc-orange',
        bg: 'bg-fmc-orange',
        icon: '/symbols/monas.png',
        imageScale: 'scale-[1.4]',
        delay: 0.4
    }
];

export const RoadmapSection = () => {
    return (
        <section className="py-20 relative overflow-hidden bg-[#d2ea16]">
            <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">

                {/* Header Frame (Matches LevelsSection) */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-white/95 backdrop-blur-md p-8 md:p-12 text-center rounded-[40px] shadow-2xl border-4 border-white mb-16 w-full max-w-5xl mx-auto relative overflow-hidden"
                >
                    <span className="text-fmc-lime font-bold tracking-wider uppercase text-base mb-3 block drop-shadow-sm">Hành trình tới Jakarta</span>
                    <h2 className="text-3xl md:text-5xl font-black text-fmc-dark mb-6 drop-shadow-sm uppercase tracking-tight">Lộ Trình Kỳ Thi FMC 2026</h2>
                    <p className="text-gray-700 text-lg font-medium max-w-3xl mx-auto leading-relaxed">
                        Tham gia FMC 2026 với 3 giai đoạn chính: Vòng thi Quốc gia tại Việt Nam để chọn lọc những gương mặt xuất sắc nhất, quá trình tập huấn cường độ cao và cuối cùng là chuyến đi đến Jakarta tranh tài Quốc tế.
                    </p>
                </motion.div>

                {/* Horizontal Roadmap Layout */}
                <div className="relative mt-20 max-w-5xl mx-auto">
                    {/* Horizontal Line (Hidden on very small screens, visible on md+) */}
                    <div className="hidden md:block absolute top-[55px] left-0 right-0 h-1.5 bg-white rounded-full z-0"></div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 relative z-10">
                        {milestones.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: item.delay }}
                                className="flex flex-col items-center text-center relative"
                            >
                                {/* Timeline Custom Icon & Date Badge */}
                                <div className="mb-6 flex flex-col items-center">
                                    <div className="w-28 h-28 bg-white/10 backdrop-blur-sm rounded-full p-2 mb-4 relative z-10 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                                        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-white overflow-hidden p-2">
                                            <img src={item.icon} alt={item.location} className={`w-full h-full object-contain ${item.imageScale}`} />
                                        </div>
                                    </div>
                                    <span className="text-sm font-bold text-fmc-dark bg-white px-4 py-1.5 rounded-full shadow-md border-2 border-transparent uppercase tracking-wide">
                                        {item.date}
                                    </span>
                                </div>

                                {/* Content Box */}
                                <div className="bg-white/95 backdrop-blur-sm border-t-4 border-white p-6 rounded-3xl shadow-xl w-full group hover:-translate-y-2 transition-transform duration-300">
                                    <div className={`h-1.5 w-12 ${item.bg} rounded-full mb-4 mx-auto`}></div>
                                    <h3 className="text-xl font-bold text-fmc-dark mb-2 group-hover:text-fmc-orange transition-colors">{item.title}</h3>
                                    <p className="text-gray-500 font-medium flex items-center justify-center gap-2 mt-3 text-sm">
                                        <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        {item.location}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

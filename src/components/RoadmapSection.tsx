
import { motion } from 'framer-motion';

const milestones = [
    {
        date: 'Tháng 05/2026',
        title: 'Vòng Quốc gia',
        location: 'Tổ chức tại Việt Nam',
        color: 'border-fmc-lime',
        bg: 'bg-fmc-lime',
        delay: 0
    },
    {
        date: 'Tháng 05 - 07/2026',
        title: 'Ôn tập Vòng Quốc tế',
        location: 'Diễn ra tại Hà Nội',
        color: 'border-blue-500',
        bg: 'bg-blue-500',
        delay: 0.2
    },
    {
        date: '05/07 - 09/07/2026',
        title: 'Vòng Quốc tế FMC',
        location: 'Jakarta, Indonesia',
        color: 'border-fmc-orange',
        bg: 'bg-fmc-orange',
        delay: 0.4
    }
];

export const RoadmapSection = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-8 max-w-4xl">
                <div className="text-center mb-16">
                    <span className="text-fmc-lime font-bold tracking-wider uppercase text-sm mb-2 block">Hành trình tới Jakarta</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Lộ Trình Kỳ Thi FMC 2026</h2>
                </div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-[20px] md:left-1/2 top-4 bottom-4 w-1 bg-gray-200 -translate-x-1/2 rounded-full"></div>

                    <div className="flex flex-col gap-12">
                        {milestones.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: item.delay }}
                                className={`relative flex flex-col md:flex-row items-start md:items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Timeline Dot */}
                                <div className={`absolute left-[20px] md:left-1/2 w-6 h-6 rounded-full border-4 border-white ${item.bg} -translate-x-1/2 shadow-md z-10`}></div>

                                {/* Content Box */}
                                <div className={`pl-12 md:pl-0 w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:text-right'}`}>
                                    <div className={`bg-gray-50 border-l-4 ${item.color} p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow`}>
                                        <span className="text-sm font-bold text-gray-500 bg-gray-200/50 px-3 py-1 rounded-full">{item.date}</span>
                                        <h3 className="text-xl font-bold text-gray-900 mt-3 mb-1">{item.title}</h3>
                                        <p className="text-gray-600 font-medium flex items-center gap-2 mt-2 justify-start md:justify-start">
                                            <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            {item.location}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

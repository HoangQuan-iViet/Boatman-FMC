
import { motion } from 'framer-motion';

const levels = [
    { id: 'epsilon', name: 'Epsilon', symbol: 'ε', grades: 'Lớp 1 – Lớp 2', color: 'from-blue-400 to-blue-600', delay: 0 },
    { id: 'delta', name: 'Delta', symbol: 'δ', grades: 'Lớp 3 – Lớp 4', color: 'from-green-400 to-green-600', delay: 0.1 },
    { id: 'gamma', name: 'Gamma', symbol: 'γ', grades: 'Lớp 5 – Lớp 6', color: 'from-yellow-400 to-orange-500', delay: 0.2 },
    { id: 'beta', name: 'Beta', symbol: 'β', grades: 'Lớp 7 – Lớp 8', color: 'from-red-400 to-rose-600', delay: 0.3 },
    { id: 'alpha', name: 'Alpha', symbol: 'α', grades: 'Lớp 9 – 10 – 11', color: 'from-purple-500 to-indigo-600', delay: 0.4 },
];

export const LevelsSection = () => {
    return (
        <section className="py-20 bg-gray-50 relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-fmc-lime/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

            <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
                <div className="text-center mb-16">
                    <span className="text-fmc-orange font-bold tracking-wider uppercase text-sm mb-2 block">Thử thách theo từng cấp độ</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Đối Tượng & Các Cấp Độ Thi Đấu</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Học sinh từ lớp 1 đến lớp 11 trên toàn quốc đam mê Toán học có thể tham gia tranh tài ở các hạng mức độ thử thách khác nhau.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                    {levels.map((level) => (
                        <motion.div
                            key={level.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: level.delay }}
                            whileHover={{ y: -10, transition: { duration: 0.2 } }}
                            className="bg-white rounded-3xl p-6 shadow-xl shadow-gray-200/50 border border-gray-100 flex flex-col items-center justify-center text-center relative overflow-hidden group"
                        >
                            {/* Top Gradient Bar */}
                            <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${level.color}`}></div>

                            <div className={`w-20 h-20 rounded-full mb-6 flex items-center justify-center bg-gradient-to-br ${level.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                <span className="text-4xl font-serif">{level.symbol}</span>
                            </div>

                            <h3 className="text-2xl font-bold text-gray-800 mb-2">{level.name}</h3>
                            <div className="w-12 h-1 bg-gray-200 rounded-full mb-4"></div>
                            <p className="text-gray-600 font-medium bg-gray-50 px-4 py-2 rounded-full w-full">
                                {level.grades}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

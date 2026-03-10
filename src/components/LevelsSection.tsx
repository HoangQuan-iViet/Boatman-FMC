import { motion } from 'framer-motion';

// Mapped Latin letters (A-E) to Greek letters (Alpha-Epsilon) descending based on grades.
const levels = [
    { id: 'epsilon', capital: 'E', name: 'Epsilon', symbol: 'ε', grades: 'Lớp 1 - 2', color: 'from-blue-400 to-blue-600', text: 'text-blue-500', bg: 'bg-blue-50', hoverBorder: 'hover:border-blue-400', hoverLine: 'group-hover:bg-blue-500', delay: 0 },
    { id: 'delta', capital: 'Δ', name: 'Delta', symbol: 'δ', grades: 'Lớp 3 - 4', color: 'from-green-400 to-green-600', text: 'text-green-500', bg: 'bg-green-50', hoverBorder: 'hover:border-green-400', hoverLine: 'group-hover:bg-green-500', delay: 0.1 },
    { id: 'gamma', capital: 'Γ', name: 'Gamma', symbol: 'γ', grades: 'Lớp 5 - 6', color: 'from-yellow-400 to-orange-500', text: 'text-orange-500', bg: 'bg-orange-50', hoverBorder: 'hover:border-orange-400', hoverLine: 'group-hover:bg-orange-500', delay: 0.2 },
    { id: 'beta', capital: 'B', name: 'Beta', symbol: 'β', grades: 'Lớp 7 - 8', color: 'from-red-400 to-rose-600', text: 'text-rose-500', bg: 'bg-rose-50', hoverBorder: 'hover:border-rose-400', hoverLine: 'group-hover:bg-rose-500', delay: 0.3 },
    { id: 'alpha', capital: 'A', name: 'Alpha', symbol: 'α', grades: 'Lớp 9 - 11', color: 'from-purple-500 to-indigo-600', text: 'text-purple-500', bg: 'bg-indigo-50', hoverBorder: 'hover:border-purple-400', hoverLine: 'group-hover:bg-purple-500', delay: 0.4 },
];

export const LevelsSection = () => {
    return (
        <section id="levels" className="py-10 md:py-20 min-h-[auto] md:min-h-[90vh] flex items-center relative overflow-hidden bg-[#bede12]">
            <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10 w-full">
                {/* Header Frame */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-white/95 backdrop-blur-md p-8 md:p-12 text-center rounded-[40px] shadow-2xl border-4 border-white mb-16 w-full max-w-5xl mx-auto relative overflow-hidden"
                >
                    <span className="text-fmc-orange font-bold tracking-wider uppercase text-base mb-3 block drop-shadow-sm">Thử thách theo từng cấp độ</span>
                    <h2 className="text-3xl md:text-5xl font-black text-fmc-dark mb-6 drop-shadow-sm uppercase tracking-tight">Đối Tượng & Các Cấp Độ Thi Đấu</h2>
                    <p className="text-gray-700 text-lg font-medium max-w-3xl mx-auto leading-relaxed">
                        Học sinh từ lớp 1 đến lớp 11 trên toàn quốc đam mê Toán học có thể tham gia tranh tài ở các hạng mức độ nhận thức khác nhau.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                    {levels.map((level) => (
                        <motion.div
                            key={level.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: level.delay }}
                            whileHover={{ y: -10, transition: { duration: 0.2 } }}
                            className={`bg-white rounded-3xl p-6 shadow-xl shadow-gray-200/50 border border-transparent flex flex-col items-center justify-center text-center relative overflow-hidden group ${level.hoverBorder} transition-all duration-300`}
                        >
                            <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${level.color}`}></div>

                            <div className={`min-w-24 h-24 px-4 rounded-2xl mb-4 flex items-center justify-center ${level.bg} border-2 border-gray-100 shadow-sm group-hover:scale-110 group-hover:bg-gradient-to-br ${level.color} transition-all duration-300`}>
                                <div className="flex items-baseline justify-center gap-[2px] font-open-sans leading-none">
                                    <span className={`text-6xl font-normal group-hover:text-white ${level.text}`}>{level.capital}</span>
                                    <span className={`text-4xl font-normal group-hover:text-white ${level.text}`}>{level.symbol}</span>
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-gray-800 uppercase tracking-widest mb-3 font-open-sans">{level.name}</h3>

                            <div className={`w-12 h-1 bg-gray-200 rounded-full mb-4 ${level.hoverLine} transition-colors`}></div>

                            <p className="text-gray-600 font-bold bg-fmc-sec-1 px-4 py-2 rounded-xl w-full border border-fmc-sec-3 group-hover:bg-fmc-lime/10 transition-colors font-open-sans">
                                {level.grades}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};


import { motion } from 'framer-motion';

const awards = [
    { icon: '🥇', title: 'Huy Chương Vàng', desc: 'Top 10% học sinh xuất sắc', color: 'from-amber-200 to-yellow-500', text: 'text-amber-800' },
    { icon: '🥈', title: 'Huy Chương Bạc', desc: 'Top 15% tiếp theo', color: 'from-gray-200 to-gray-400', text: 'text-gray-800' },
    { icon: '🥉', title: 'Huy Chương Đồng', desc: 'Top 25% tiếp theo', color: 'from-orange-200 to-amber-700', text: 'text-amber-900' },
    { icon: '🏆', title: 'Giải Khuyến khích', desc: 'Top 10% tiếp theo', color: 'from-blue-100 to-blue-300', text: 'text-blue-900' },
];

export const AwardsSection = () => {
    return (
        <section className="py-20 bg-gray-900 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-fmc-orange/10 z-0"></div>

            <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Hệ Thống Giải Thưởng Vòng Quốc Gia</h2>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        Vinh danh những tài năng xuất sắc nhất trên toàn quốc, tạo động lực bứt phá giới hạn.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                    {awards.map((award, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className={`bg-gradient-to-br ${award.color} rounded-3xl p-6 shadow-2xl relative overflow-hidden flex flex-col items-center justify-center text-center`}
                        >
                            <div className="w-20 h-20 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center mb-4 shadow-inner border border-white/50">
                                <span className="text-4xl leading-none">{award.icon}</span>
                            </div>
                            <h3 className={`text-xl font-bold mb-2 ${award.text}`}>{award.title}</h3>
                            <p className={`${award.text} font-medium bg-white/50 px-4 py-2 rounded-full w-full text-sm`}>
                                {award.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Special Award */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="bg-fmc-orange rounded-3xl p-8 relative overflow-hidden shadow-[0_0_40px_rgba(242,101,34,0.3)] text-center flex flex-col md:flex-row items-center justify-center gap-8"
                >
                    <div className="absolute inset-0 bg-white/10 opacity-30 bg-stripes pattern-diagonal-lines-md"></div>

                    <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-xl shrink-0 absolute md:relative top-[-40px] md:top-0 border-4 border-fmc-orange">
                        <span className="text-5xl">💎</span>
                    </div>

                    <div className="relative z-10 pt-10 md:pt-0">
                        <h3 className="text-2xl font-bold text-white mb-2 tracking-wide uppercase">Giải Đặc Biệt</h3>
                        <p className="text-orange-50 text-lg font-medium">
                            11 giải thưởng trị giá <strong className="text-2xl text-white font-black bg-orange-600/50 px-2 py-1 rounded">400$ / giải</strong>
                        </p>
                        <p className="text-white mt-2">
                            Dành riêng cho Thủ khoa của 11 khối lớp (từ Lớp 1 đến Lớp 11)
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

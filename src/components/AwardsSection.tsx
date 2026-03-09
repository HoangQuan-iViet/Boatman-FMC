import { motion } from 'framer-motion';
import { MathBackground } from './MathBackground';

const awards = [
    { imageSrc: '/medals/gold.png', title: 'Huy Chương Vàng', desc: <>Dành cho top <strong>10%</strong> thí sinh có điểm cao nhất <strong>mỗi khối</strong></>, color: 'from-amber-200 to-yellow-500', text: 'text-amber-800' },
    { imageSrc: '/medals/silver.png', title: 'Huy Chương Bạc', desc: <>Dành cho top <strong>15%</strong> thí sinh tiếp theo có điểm cao nhất <strong>mỗi khối</strong></>, color: 'from-gray-200 to-gray-400', text: 'text-gray-800' },
    { imageSrc: '/medals/bronze.png', title: 'Huy Chương Đồng', desc: <>Dành cho top <strong>25%</strong> thí sinh tiếp theo có điểm cao nhất <strong>mỗi khối</strong></>, color: 'from-orange-200 to-amber-700', text: 'text-amber-900' },
    { imageSrc: '/medals/consolation.png', title: 'Giải Khuyến khích', desc: <>Dành cho top <strong>10%</strong> thí sinh tiếp theo có điểm cao nhất <strong>mỗi khối</strong></>, color: 'from-blue-100 to-blue-300', text: 'text-blue-900' },
];

export const AwardsSection = () => {
    return (
        <section className="py-20 bg-fmc-dark relative overflow-hidden">
            <MathBackground pattern="geometry" opacity={0.03} />

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
                            <div className="w-24 h-24 rounded-full bg-white/40 backdrop-blur-md flex items-center justify-center mb-4 shadow-inner border border-white/60 p-4">
                                <img src={award.imageSrc} alt={award.title} className="w-full h-full object-contain drop-shadow-md" />
                            </div>
                            <h3 className={`text-xl font-bold mb-2 ${award.text}`}>{award.title}</h3>
                            <p className={`${award.text} font-medium bg-white/50 px-4 py-2 rounded-full w-full text-sm`}>
                                {award.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Sponsor Awards */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 relative overflow-hidden shadow-xl text-center flex flex-col items-center justify-center mt-6"
                >
                    <div className="absolute inset-0 bg-white/5 opacity-50 bg-stripes pattern-diagonal-lines-sm"></div>

                    <div className="relative z-10">
                        <h3 className="text-xl md:text-2xl font-bold text-fmc-lime mb-3 tracking-wide flex items-center justify-center gap-3">
                            <svg className="w-8 h-8 text-fmc-orange" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 2l2.5 5h5.5l-4 4 1.5 5.5-5-3-5 3 1.5-5.5-4-4h5.5z" clipRule="evenodd" />
                            </svg>
                            GIẢI THƯỞNG ĐẶC BIỆT TỪ NHÀ TÀI TRỢ
                            <svg className="w-8 h-8 text-fmc-orange" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 2l2.5 5h5.5l-4 4 1.5 5.5-5-3-5 3 1.5-5.5-4-4h5.5z" clipRule="evenodd" />
                            </svg>
                        </h3>
                        <p className="text-white text-lg md:text-xl font-medium leading-relaxed">
                            Cùng rất nhiều giải thưởng hấp dẫn đến từ <strong>Canon Việt Nam</strong> cùng tạp chí <strong>Vật Lý & Tuổi Trẻ</strong>.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

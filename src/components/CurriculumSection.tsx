
import { motion } from 'framer-motion';
import { Calculator, Divide, Edit3, Grid } from 'lucide-react';

const topics = [
    { id: 1, title: 'Đại số', icon: Calculator, desc: 'Tư duy logic và biến đổi đại số chuyên sâu.', color: 'text-blue-500', bg: 'bg-blue-50' },
    { id: 2, title: 'Lý thuyết số', icon: Divide, desc: 'Các định lý, số nguyên tố và tính chia hết.', color: 'text-purple-500', bg: 'bg-purple-50' },
    { id: 3, title: 'Hình học', icon: Edit3, desc: 'Không gian, mặt phẳng và các bất đẳng thức hình học.', color: 'text-fmc-lime', bg: 'bg-lime-50' },
    { id: 4, title: 'Tổ hợp', icon: Grid, desc: 'Xác suất, bài toán đếm và nguyên lý Dirichlet.', color: 'text-fmc-orange', bg: 'bg-orange-50' },
];

export const CurriculumSection = () => {
    return (
        <section className="py-20 bg-gray-50 border-t border-gray-100">
            <div className="container mx-auto px-4 md:px-8 max-w-6xl">
                <div className="flex flex-col md:flex-row gap-12 items-center">

                    <div className="w-full md:w-1/3">
                        <span className="text-fmc-lime font-bold tracking-wider uppercase text-sm mb-2 block">Cấu trúc đề thi</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Chương Trình Học & Đề Cương</h2>
                        <p className="text-gray-600 mb-8">
                            Nội dung thi bao gồm 4 mảng kiến thức trọng tâm, được thiết kế theo chuẩn toán học quốc tế nhằm mang tới những thử thách phân loại đa dạng nhất.
                        </p>
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="#register"
                            className="inline-block bg-white text-gray-900 font-bold px-6 py-3 rounded-full border-2 border-fmc-lime hover:bg-fmc-lime hover:text-white transition-colors shadow-sm"
                        >
                            Tải Đề Cương Chi Tiết
                        </motion.a>
                    </div>

                    <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {topics.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform duration-300"
                            >
                                <div className={`w-14 h-14 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center mb-4`}>
                                    <item.icon size={28} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                                <p className="text-gray-600 text-sm">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

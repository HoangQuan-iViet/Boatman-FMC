import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';


const faqs = [
    {
        q: 'Làm thế nào để đăng ký tham gia Kỳ thi FMC 2026?',
        a: 'Bạn có thể đăng ký trực tuyến bằng cách nhấp vào nút "Đăng Ký Khảo Sát" ở phần đầu trang, hoặc điền Form thông tin theo hướng dẫn. Sau đó, tiến hành chuyển khoản theo cú pháp với mức lệ phí quy định.'
    },
    {
        q: 'Có yêu cầu đầu vào hay bài kiểm tra sàng lọc không?',
        a: 'FMC 2026 mở rộng chào đón tất cả các bạn học sinh có niềm đam mê toán học phân theo từng cấp độ từ Lớp 1 đến Lớp 11. Các bạn sẽ thi đấu vòng quốc gia trước khi chọn lọc để đi tiếp quốc tế.'
    },
    {
        q: 'Lịch trình dự kiến của vòng thi được sắp xếp như thế nào?',
        a: 'Vòng Quốc gia dự kiến tổ chức vào tháng 05/2026 tại Việt Nam. Sau đó, các thi sinh suất sắc sẽ được ôn tập và tham dự vòng Quốc tế tại Jakarta vào đầu tháng 07/2026.'
    },
    {
        q: 'Thí sinh có cần chứng chỉ ngoại ngữ để tham dự không?',
        a: 'Không bắt buộc. Đề thi sẽ được cung cấp dưới dạng song ngữ Anh-Việt, giúp các em tập trung tối đa vào tư duy toán học.'
    }
];

export const FaqSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-10 md:py-20 min-h-[auto] md:min-h-[90vh] flex items-center relative overflow-hidden bg-[#c2db14]">
            <div className="container mx-auto px-4 md:px-8 max-w-4xl relative z-10 w-full">
                {/* Header Frame (Matches AboutSection/LevelsSection) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-white/95 backdrop-blur-md p-6 md:p-8 text-center rounded-[30px] shadow-xl border-4 border-white mb-10 w-full max-w-4xl mx-auto relative overflow-hidden"
                >
                    <span className="text-fmc-orange font-bold tracking-wider uppercase text-base mb-1 block drop-shadow-sm">Giải đáp thắc mắc</span>
                    <h2 className="text-2xl md:text-4xl font-black text-fmc-dark mb-3 drop-shadow-sm uppercase tracking-tight">Câu Hỏi Thường Gặp (FAQ)</h2>
                    <p className="text-gray-700 text-base font-medium max-w-3xl mx-auto leading-relaxed">
                        Giải đáp nhanh những câu hỏi của Phụ huynh và Học sinh về Kỳ thi FMC 2026.
                    </p>
                </motion.div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`border border-gray-100 rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'shadow-md ring-1 ring-fmc-lime/30' : 'hover:shadow-sm'}`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full text-left px-6 py-5 bg-white/90 backdrop-blur-sm flex items-center justify-between font-semibold text-gray-800 hover:bg-white transition-colors"
                            >
                                <span>{faq.q}</span>
                                <ChevronDown
                                    className={`text-fmc-lime transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                                    size={20}
                                />
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 py-5 bg-white/90 backdrop-blur-sm text-gray-600 leading-relaxed border-t border-gray-100">
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

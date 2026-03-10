import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircleQuestion } from 'lucide-react';


const faqs = [
    {
        q: 'Làm thế nào để đăng ký tham gia Kỳ thi FMC 2026?',
        a: 'Bạn có thể đăng ký trực tuyến bằng cách nhấp vào nút "Đăng Ký Ngay" ở phần đầu trang, rồi điền Form thông tin. Sau đó, tiến hành chuyển khoản theo cú pháp với mức lệ phí quy định.'
    },
    {
        q: 'Có yêu cầu đầu vào hay bài kiểm tra sàng lọc không?',
        a: 'FMC 2026 mở rộng chào đón tất cả các bạn học sinh có niềm đam mê toán học phân theo từng cấp độ từ Lớp 1 đến Lớp 11. Các bạn sẽ thi đấu vòng quốc gia trước khi chọn lọc để đi tiếp quốc tế.'
    },
    {
        q: 'Lịch trình dự kiến của vòng thi được sắp xếp như thế nào?',
        a: 'Vòng Quốc gia dự kiến tổ chức vào tháng 05/2026 tại Việt Nam. Sau đó, các thi sinh suất sắc sẽ được ôn tập và tham dự vòng Quốc tế tại Jakarta vào đầu tháng 07/2026.'
    }
];

export const FaqSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-10 md:py-20 min-h-[auto] md:min-h-[90vh] flex items-center relative overflow-hidden bg-[#c2db14]">
            <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10 w-full">
                {/* Master Frame Container */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-white/95 backdrop-blur-md p-8 md:p-14 rounded-[40px] shadow-2xl border-8 border-white relative overflow-hidden"
                >
                    {/* Header Area */}
                    <div className="text-center mb-16">
                        <span className="text-fmc-orange font-bold tracking-wider uppercase text-lg md:text-xl mb-3 block drop-shadow-sm flex items-center justify-center gap-2">
                            <MessageCircleQuestion size={22} className="inline-block" />
                            Giải đáp thắc mắc
                        </span>
                        <h2 className="text-3xl md:text-5xl font-black text-fmc-lime mb-6 drop-shadow-sm uppercase tracking-tight">Câu Hỏi Thường Gặp (FAQ)</h2>
                        <p className="text-gray-700 leading-relaxed text-xl max-w-3xl mx-auto font-medium">
                            Giải đáp nhanh những câu hỏi của Phụ huynh và Học sinh về Kỳ thi FMC 2026.
                        </p>
                    </div>

                    <div className="space-y-4 max-w-4xl mx-auto">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`border-2 rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'border-fmc-lime shadow-lg bg-lime-50/10' : 'border-fmc-lime/30 hover:border-fmc-lime/60 hover:shadow-md'}`}
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full text-left px-6 py-5 md:py-6 bg-white/90 backdrop-blur-sm flex items-center justify-between font-bold text-gray-800 hover:bg-white transition-colors text-lg md:text-xl"
                                >
                                    <span className="pr-4">{faq.q}</span>
                                    <ChevronDown
                                        className={`text-fmc-lime transition-transform duration-300 shrink-0 ${openIndex === index ? 'rotate-180' : ''}`}
                                        size={24}
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
                                            <div className="px-6 py-5 md:py-6 bg-white/90 backdrop-blur-sm text-gray-600 leading-relaxed border-t-2 border-fmc-lime/20 text-base md:text-lg">
                                                {faq.a}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

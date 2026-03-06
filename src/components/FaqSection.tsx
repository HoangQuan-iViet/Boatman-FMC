import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { MathBackground } from './MathBackground';

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
        <section className="py-20 relative overflow-hidden bg-fmc-sec-6">
            <MathBackground pattern="symbols" opacity={0.05} />
            <div className="container mx-auto px-4 md:px-8 max-w-4xl relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-fmc-dark mb-4">Câu Hỏi Thường Gặp (FAQ)</h2>
                    <p className="text-gray-600">Giải đáp nhanh những thắc mắc của Phụ huynh và Học sinh về Kỳ thi FMC 2026</p>
                </div>

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

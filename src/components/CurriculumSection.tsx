import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, Divide, Edit3, Grid, X, Download } from 'lucide-react';
import { MathBackground } from './MathBackground';
import { Turnstile } from '@marsidev/react-turnstile';

const topics = [
    { id: 1, title: 'Đại số', icon: Calculator, desc: 'Tư duy logic và biến đổi đại số chuyên sâu.', color: 'text-blue-500', bg: 'bg-blue-50' },
    { id: 2, title: 'Lý thuyết số', icon: Divide, desc: 'Các định lý, số nguyên tố và tính chia hết.', color: 'text-purple-500', bg: 'bg-purple-50' },
    { id: 3, title: 'Hình học', icon: Edit3, desc: 'Không gian, mặt phẳng và các bất đẳng thức hình học.', color: 'text-fmc-lime', bg: 'bg-lime-50' },
    { id: 4, title: 'Tổ hợp', icon: Grid, desc: 'Xác suất, bài toán đếm và nguyên lý Dirichlet.', color: 'text-fmc-orange', bg: 'bg-orange-50' },
];

export const CurriculumSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isVerified, setIsVerified] = useState(false);

    // 🔴 PLACEHOLDER: BẠN SẼ THAY ĐỐI ĐƯỜNG LINK GOOGLE DRIVE CỦA BẠN VÀO ĐÂY
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const DRIVE_LINK = "https://drive.google.com/drive/folders/1oZfMzPEyaKxy8ggLKcL5kIwMYP4mlJ3I?usp=drive_link";

    // 🔴 PLACEHOLDER: BẠN SẼ THAY ĐỔI SITE KEY CỦA CLOUDFLARE TURNSTILE VÀO ĐÂY
    // Chuỗi dưới đây là Site Key test mặc định của Cloudflare (luôn pass).
    const TURNSTILE_SITE_KEY = "0x4AAAAAACnUPwo_dAE0vR1h";

    const handleDownloadClick = () => {
        if (isVerified) {
            window.open(DRIVE_LINK, '_blank');
        } else {
            setIsModalOpen(true);
        }
    };

    const handleVerifySuccess = () => {
        setIsVerified(true);
        // Trình duyệt web (Chrome, Safari,...) sẽ tự động chặn các Popup (cửa sổ mới) 
        // nếu lệnh bật popup không xuất phát trực tiếp từ 1 cú click của người dùng.
        // Cú callback của Cloudflare là Async nên window.open tự động bị chặn.
        // Cách tối ưu là hiển thị nút "Mở Google Drive" để người dùng tự click.
    };

    return (
        <section className="py-20 relative overflow-hidden bg-[#d2ea16]">
            <MathBackground pattern="geometry" opacity={0.05} />
            <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
                <div className="flex flex-col md:flex-row gap-12 items-center">

                    <div className="w-full md:w-1/3">
                        <div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-sm border border-white">
                            <span className="text-fmc-lime font-bold tracking-wider uppercase text-sm mb-2 block">Cấu trúc đề thi</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-fmc-dark mb-6">Chương Trình Học & Đề Cương</h2>
                            <p className="text-gray-600 mb-8">
                                Nội dung thi bao gồm 4 mảng kiến thức trọng tâm, được thiết kế theo chuẩn toán học quốc tế nhằm mang tới những thử thách phân loại đa dạng nhất.
                            </p>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={handleDownloadClick}
                                className="inline-flex items-center gap-2 bg-white text-fmc-dark font-bold px-6 py-3 rounded-full border-2 border-fmc-lime hover:bg-fmc-lime hover:text-white transition-colors shadow-sm cursor-pointer"
                            >
                                <Download size={20} />
                                {isVerified ? 'Mở Lại Google Drive' : 'Tải Đề Cương Chi Tiết'}
                            </motion.button>
                        </div>
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

            {/* Turnstile Security Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-fmc-dark/60 backdrop-blur-sm"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl relative text-center"
                        >
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors p-1"
                            >
                                <X size={24} />
                            </button>

                            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <Download className="text-blue-500" size={32} />
                            </div>

                            <h3 className="text-2xl font-bold text-fmc-dark mb-2">Xác minh bảo mật</h3>
                            <p className="text-gray-600 text-sm mb-6">
                                Hệ thống cần xác nhận bạn là người thật để chống thư rác trước khi mở Google Drive.
                            </p>

                            <div className="flex justify-center items-center min-h-[65px] bg-gray-50 rounded-xl p-2 border border-gray-100">
                                {!isVerified ? (
                                    <Turnstile
                                        siteKey={TURNSTILE_SITE_KEY}
                                        onSuccess={handleVerifySuccess}
                                        onError={() => alert('Xác thực thất bại, vui lòng tải lại trang và thử lại!')}
                                        options={{
                                            theme: 'light',
                                        }}
                                    />
                                ) : (
                                    <div className="flex flex-col items-center justify-center gap-4 py-4 w-full">
                                        <div className="text-green-600 font-bold flex items-center justify-center gap-2">
                                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>Xác thực thành công!</span>
                                        </div>
                                        <a
                                            href={DRIVE_LINK}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={() => setIsModalOpen(false)}
                                            className="w-full text-center px-6 py-3 bg-fmc-lime text-white rounded-xl font-bold hover:bg-lime-600 transition-colors shadow-md"
                                        >
                                            Mở Google Drive
                                        </a>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

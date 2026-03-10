import { motion } from 'framer-motion';
import { CreditCard, Building2, Hash, Info } from 'lucide-react';
import boatmanLogo from '../assets/logo-boatman.png';
import MBQR from '../assets/MB-QR.png';

export const PaymentSection = () => {
    return (
        <section id="register" className="py-10 md:py-20 min-h-[auto] md:min-h-[90vh] flex items-center relative overflow-hidden bg-[#adc50a]">

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
                            <CreditCard size={22} className="inline-block" />
                            Thanh toán & Đăng ký
                        </span>
                        <h2 className="text-3xl md:text-5xl font-black text-fmc-lime mb-6 drop-shadow-sm uppercase tracking-tight">Hướng Dẫn Thanh Toán Lệ Phí Thi</h2>
                        <p className="text-gray-700 leading-relaxed text-xl max-w-3xl mx-auto font-medium">
                            Quý phụ huynh/Học sinh vui lòng hoàn tất chuyển khoản để xác nhận đăng ký chính thức tham dự cuộc thi.
                        </p>
                    </div>

                    <div className="bg-white rounded-[2rem] p-6 md:p-10 shadow-lg border-4 border-fmc-orange relative w-full">
                        {/* Badge */}
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white px-6 py-2 rounded-full shadow-md border border-gray-100 flex items-center gap-2 text-fmc-orange font-bold whitespace-nowrap">
                            <CreditCard size={20} />
                            <span>Thông Tin Chuyển Khoản</span>
                        </div>

                        {/* Chủ Tài Khoản - Full Width */}
                        <div className="group bg-gray-50 hover:bg-orange-50 transition-colors rounded-2xl p-4 md:p-6 border border-fmc-orange/30 text-center mt-6">
                            <h4 className="text-sm md:text-base text-gray-500 font-semibold mb-3 uppercase tracking-widest bg-white inline-block px-4 py-1 rounded-full border border-gray-100 shadow-sm">Chủ Tài Khoản</h4>
                            <div className="flex items-center justify-center gap-4 flex-wrap">
                                <div className="w-24 h-12 rounded-lg bg-white border-2 border-orange-100 overflow-hidden shrink-0 group-hover:border-fmc-orange transition-colors shadow-sm">
                                    <img src={boatmanLogo} alt="Boatman Logo" className="w-full h-full object-contain p-1" />
                                </div>
                                <p className="text-3xl md:text-4xl font-black text-gray-800 tracking-tight leading-none pt-1">CÔNG TY CỔ PHẦN BOATMAN</p>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-8 justify-between mt-6">

                            {/* Account Info Values */}
                            <div className="w-full md:w-3/4 space-y-4">

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="bg-gray-50 hover:bg-gray-100 transition-colors rounded-2xl p-5 border border-gray-100 text-center flex flex-col justify-center">
                                        <h4 className="flex items-center justify-center gap-2 text-xs md:text-sm text-gray-500 font-semibold mb-1 uppercase tracking-wider">
                                            <Hash size={16} /> Số Tài Khoản
                                        </h4>
                                        <p className="text-4xl md:text-5xl font-black text-fmc-lime tracking-wider drop-shadow-sm">
                                            866 386 888 888
                                        </p>
                                    </div>

                                    <div className="bg-gray-50 hover:bg-gray-100 transition-colors rounded-2xl p-5 border border-gray-100 text-center flex flex-col justify-center">
                                        <h4 className="flex items-center justify-center gap-2 text-xs md:text-sm text-gray-500 font-semibold mb-1 uppercase tracking-wider">
                                            <Building2 size={16} /> Ngân Hàng
                                        </h4>
                                        <p className="text-xl md:text-2xl font-black text-fmc-dark leading-tight pt-1">
                                            Ngân hàng Quân đội <br />
                                            <span className="text-[#122784]">(MB Bank)</span>
                                        </p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="bg-lime-50 hover:bg-lime-100 transition-colors rounded-2xl p-5 border border-lime-100 text-center flex flex-col justify-center">
                                        <h4 className="flex items-center justify-center gap-2 text-xs md:text-sm text-fmc-lime font-bold mb-1 uppercase tracking-wider">
                                            <Hash size={16} /> Lệ Phí Thi
                                        </h4>
                                        <p className="text-4xl md:text-5xl font-black text-gray-800 tracking-tight">
                                            350.000đ <span className="text-lg font-medium text-gray-500">/ học sinh</span>
                                        </p>
                                    </div>

                                    <div className="bg-orange-50 rounded-2xl p-5 border border-orange-100 text-center flex flex-col justify-center">
                                        <h4 className="flex items-center justify-center gap-2 text-xs md:text-sm text-orange-600 font-bold mb-2 uppercase tracking-wider">
                                            <Info size={16} /> Nội Dung Chuyển Khoản
                                        </h4>
                                        <div className="bg-white px-3 py-3 rounded-xl font-mono text-2xl md:text-3xl font-black text-fmc-orange text-center shadow-inner border border-gray-100">
                                            FMC26 – Tên HS – SĐT
                                        </div>
                                    </div>
                                </div>

                            </div>

                            {/* QR Code Graphic */}
                            <div className="w-full md:w-1/4 flex flex-col items-center justify-center p-6 bg-gray-50 rounded-3xl border border-gray-100 border-dashed">
                                <div className="w-40 h-40 bg-white rounded-2xl shadow-md p-2 mb-6 border border-gray-100 flex items-center justify-center group relative overflow-hidden">
                                    <img src={MBQR} alt="QR Code Thanh Toán" className="w-full h-full object-contain" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-50 pointer-events-none"></div>
                                    <div className="absolute -bottom-2 -right-2 bg-fmc-orange text-white text-xs font-bold px-3 py-1 rounded-tl-xl shadow-md">
                                        Quét QR
                                    </div>
                                </div>
                                <p className="text-gray-600 text-center font-medium text-sm">Sử dụng tính năng Quét mã QR trên ứng dụng ngân hàng để thanh toán nhanh.</p>
                            </div>
                        </div>

                        {/* Warning Note - Full Width */}
                        <div className="mt-6 bg-red-50/80 border border-red-200 rounded-2xl p-4 md:p-5 flex items-start gap-4 shadow-sm border-l-4 border-l-red-500">
                            <div className="bg-white p-2 rounded-full shadow-sm shrink-0 border border-red-100">
                                <Info size={24} className="text-red-500" />
                            </div>
                            <div>
                                <h5 className="text-red-700 font-bold mb-1 text-sm md:text-base uppercase tracking-wide">Lưu ý Quan Trọng</h5>
                                <p className="text-red-600/90 text-sm md:text-base leading-relaxed font-medium">
                                    Quý Phụ huynh vui lòng kiểm tra kỹ <strong className="text-red-600 font-black">đúng Tên Chủ Tài Khoản, đúng Ngân Hàng MB Bank</strong> và ghi chính xác <strong className="text-red-600 font-black">Nội dung chuyển khoản theo cú pháp</strong> để BTC có thể xác nhận nhanh chóng nhất.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

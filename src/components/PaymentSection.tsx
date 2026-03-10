import { motion } from 'framer-motion';
import { CreditCard, Building2, Hash, Info } from 'lucide-react';
import boatmanLogo from '../assets/logo-boatman.png';
import MBQR from '../assets/MB-QR.png';

export const PaymentSection = () => {
    return (
        <section id="register" className="py-10 md:py-20 min-h-[auto] md:min-h-[90vh] flex items-center relative overflow-hidden bg-[#adc50a]">

            <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10 w-full">
                {/* Header Frame */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-white/95 backdrop-blur-md p-6 md:p-8 text-center rounded-[30px] shadow-xl border-4 border-white mb-10 w-full max-w-4xl mx-auto relative overflow-hidden"
                >
                    <span className="text-fmc-orange font-bold tracking-wider uppercase text-base mb-1 block drop-shadow-sm">Thanh toán & Đăng ký</span>
                    <h2 className="text-2xl md:text-4xl font-black text-fmc-dark mb-3 drop-shadow-sm uppercase tracking-tight">Hướng Dẫn Thanh Toán Lệ Phí Thi</h2>
                    <p className="text-gray-700 text-base font-medium max-w-3xl mx-auto leading-relaxed">
                        Quý phụ huynh/Học sinh vui lòng hoàn tất chuyển khoản để xác nhận đăng ký chính thức tham dự cuộc thi.
                    </p>
                </motion.div>

                <div className="bg-white rounded-[2rem] p-6 md:p-8 shadow-2xl border-t-8 border-fmc-orange relative max-w-4xl mx-auto">
                    {/* Badge */}
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white px-6 py-2 rounded-full shadow-md border border-gray-100 flex items-center gap-2 text-fmc-orange font-bold whitespace-nowrap">
                        <CreditCard size={20} />
                        <span>Thông Tin Chuyển Khoản</span>
                    </div>

                    <div className="flex flex-col md:flex-row gap-8 justify-between mt-6">

                        {/* Account Info */}
                        <div className="w-full md:w-2/3 space-y-4">

                            <div className="group bg-gray-50 hover:bg-orange-50 transition-colors rounded-2xl p-4 border border-gray-100 flex items-center justify-center gap-4 text-center">
                                <div className="w-20 h-10 rounded-lg bg-white border border-orange-100 overflow-hidden shrink-0 group-hover:border-fmc-orange transition-colors">
                                    <img src={boatmanLogo} alt="Boatman Logo" className="w-full h-full object-contain p-1" />
                                </div>
                                <div>
                                    <h4 className="text-xs text-gray-500 font-semibold mb-0.5 uppercase tracking-wider">Chủ Tài Khoản</h4>
                                    <p className="text-xl font-black text-gray-800 tracking-tight">CÔNG TY CỔ PHẦN BOATMAN</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="bg-gray-50 hover:bg-gray-100 transition-colors rounded-2xl p-5 border border-gray-100 text-center">
                                    <h4 className="flex items-center justify-center gap-2 text-xs text-gray-500 font-semibold mb-1 uppercase tracking-wider">
                                        <Hash size={14} /> Số Tài Khoản
                                    </h4>
                                    <p className="text-2xl font-bold text-fmc-lime tracking-wider drop-shadow-sm">
                                        866 386 888 888
                                    </p>
                                </div>

                                <div className="bg-gray-50 hover:bg-gray-100 transition-colors rounded-2xl p-5 border border-gray-100 text-center">
                                    <h4 className="flex items-center justify-center gap-2 text-xs text-gray-500 font-semibold mb-1 uppercase tracking-wider">
                                        <Building2 size={14} /> Ngân Hàng
                                    </h4>
                                    <p className="text-lg font-bold text-gray-800">
                                        Ngân hàng Quân đội (MB Bank)
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="bg-lime-50 hover:bg-lime-100 transition-colors rounded-2xl p-5 border border-lime-100 text-center flex flex-col justify-center">
                                    <h4 className="flex items-center justify-center gap-2 text-xs text-fmc-lime font-bold mb-1 uppercase tracking-wider">
                                        <Hash size={14} /> Lệ Phí Thi
                                    </h4>
                                    <p className="text-2xl font-black text-gray-800 tracking-tight">
                                        350.000đ <span className="text-sm font-medium text-gray-500">/ học sinh</span>
                                    </p>
                                </div>

                                <div className="bg-orange-50 rounded-2xl p-5 border border-orange-100 text-center">
                                    <h4 className="flex items-center justify-center gap-2 text-xs text-orange-600 font-bold mb-2 uppercase tracking-wider">
                                        <Info size={14} /> Nội Dung Chuyển Khoản
                                    </h4>
                                    <div className="bg-white px-3 py-2 rounded-xl font-mono text-base font-bold text-gray-800 text-center shadow-inner border border-gray-100">
                                        FMC26 – Tên HS – SĐT
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* QR Code Graphic */}
                        <div className="w-full md:w-1/3 flex flex-col items-center justify-center p-8 bg-gray-50 rounded-3xl border border-gray-100 border-dashed">
                            <div className="w-48 h-48 bg-white rounded-2xl shadow-md p-2 mb-6 border border-gray-100 flex items-center justify-center group relative overflow-hidden">
                                <img src={MBQR} alt="QR Code Thanh Toán" className="w-full h-full object-contain" />
                                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-50 pointer-events-none"></div>
                                <div className="absolute -bottom-2 -right-2 bg-fmc-orange text-white text-xs font-bold px-3 py-1 rounded-tl-xl shadow-md">
                                    Quét QR
                                </div>
                            </div>
                            <p className="text-gray-500 text-center font-medium">Sử dụng tính năng Quét mã QR trên ứng dụng ngân hàng để thanh toán nhanh.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

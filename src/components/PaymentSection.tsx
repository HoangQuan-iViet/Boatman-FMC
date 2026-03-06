import { MathBackground } from './MathBackground';
import { CreditCard, Building2, User, Hash, Info, QrCode } from 'lucide-react';

export const PaymentSection = () => {
    return (
        <section id="register" className="py-20 relative overflow-hidden bg-fmc-sec-7">
            <MathBackground pattern="numbers" opacity={0.06} />
            {/* Decorative large numbers/shapes for background */}
            <div className="absolute top-10 left-10 text-[20vw] font-black text-gray-100 opacity-50 select-none pointer-events-none -translate-y-1/4">2026</div>

            <div className="container mx-auto px-4 md:px-8 max-w-5xl relative z-10">
                <div className="text-center mb-16">
                    <span className="text-fmc-orange font-bold tracking-wider uppercase text-sm mb-2 block">Thanh toán & Đăng ký</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-fmc-dark mb-4">Hướng Dẫn Thanh Toán Lệ Phí Thi</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Quý phụ huynh/Học sinh vui lòng hoàn tất thủ tục chuyển khoản để xác nhận đăng ký chính thức tham dự cuộc thi.
                    </p>
                </div>

                <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl border-t-8 border-fmc-orange relative">
                    {/* Badge */}
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white px-6 py-2 rounded-full shadow-md border border-gray-100 flex items-center gap-2 text-fmc-orange font-bold whitespace-nowrap">
                        <CreditCard size={20} />
                        <span>Thông Tin Chuyển Khoản</span>
                    </div>

                    <div className="flex flex-col md:flex-row gap-12 mt-4 items-center">

                        {/* Account Info */}
                        <div className="w-full md:w-2/3 space-y-6">

                            <div className="group bg-gray-50 hover:bg-orange-50 transition-colors rounded-2xl p-6 border border-gray-100">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-orange-100 text-fmc-orange flex items-center justify-center shrink-0 group-hover:bg-fmc-orange group-hover:text-white transition-colors">
                                        <User size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-sm text-gray-500 font-semibold mb-1 uppercase tracking-wider">Chủ Tài Khoản</h4>
                                        <p className="text-2xl font-black text-gray-800 tracking-tight">CÔNG TY CỔ PHẦN BOATMAN</p>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="bg-gray-50 hover:bg-gray-100 transition-colors rounded-2xl p-6 border border-gray-100">
                                    <h4 className="flex items-center gap-2 text-sm text-gray-500 font-semibold mb-2 uppercase tracking-wider">
                                        <Hash size={16} /> Số Tài Khoản
                                    </h4>
                                    <p className="text-2xl font-bold text-fmc-lime tracking-wider drop-shadow-sm">
                                        866 386 888 888
                                    </p>
                                </div>

                                <div className="bg-gray-50 hover:bg-gray-100 transition-colors rounded-2xl p-6 border border-gray-100">
                                    <h4 className="flex items-center gap-2 text-sm text-gray-500 font-semibold mb-2 uppercase tracking-wider">
                                        <Building2 size={16} /> Ngân Hàng
                                    </h4>
                                    <p className="text-xl font-bold text-gray-800">
                                        Ngân hàng Quân đội (MB Bank)
                                    </p>
                                </div>
                            </div>

                            <div className="bg-orange-50 rounded-2xl p-6 border border-orange-100">
                                <h4 className="flex items-center gap-2 text-sm text-orange-600 font-bold mb-2 uppercase tracking-wider">
                                    <Info size={16} /> Nội Dung Chuyển Khoản
                                </h4>
                                <div className="bg-white px-4 py-3 rounded-xl font-mono text-lg font-bold text-gray-800 text-center shadow-inner border border-gray-100">
                                    FMC26 – Hệ tên HS – Số điện thoại
                                </div>
                            </div>

                        </div>

                        {/* QR Code Graphic / Representation */}
                        <div className="w-full md:w-1/3 flex flex-col items-center justify-center p-8 bg-gray-50 rounded-3xl border border-gray-100 border-dashed">
                            <div className="w-48 h-48 bg-white rounded-2xl shadow-md p-4 mb-6 border border-gray-100 flex items-center justify-center group relative overflow-hidden">
                                <QrCode size={120} className="text-gray-300 group-hover:text-fmc-lime transition-colors" />
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

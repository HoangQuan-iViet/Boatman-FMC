
import { MapPin, Phone, Mail, Facebook } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="bg-fmc-dark text-gray-300 py-12 border-t-4 border-fmc-orange relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-fmc-lime/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

            <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

                    {/* Organization Info */}
                    <div>
                        <h3 className="text-2xl font-black text-white mb-6">FMC <span className="text-fmc-lime">2026</span></h3>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Kỳ thi Toán học Quốc tế Factorial mang lại sân chơi trí tuệ đỉnh cao, giúp học sinh vươn tầm thế giới.
                        </p>
                        <div className="space-y-2">
                            <p className="font-semibold text-gray-100">Đơn vị tổ chức:</p>
                            <p className="text-sm">Tạp chí Vật lý & Tuổi trẻ - Hội Vật lý Việt Nam.</p>
                        </div>
                        <div className="space-y-2 mt-4">
                            <p className="font-semibold text-gray-100">Đơn vị đồng hành:</p>
                            <p className="text-sm">Canon Việt Nam, Công ty Cổ phần Boatman.</p>
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Thông Tin Liên Hệ</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-sm hover:text-white transition-colors">
                                <MapPin className="text-fmc-orange shrink-0 mt-0.5" size={18} />
                                <span>P.804 Viện Vật lý - số 10 Đào Tấn, Ngọc Khánh, Ba Đình, Hà Nội.</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm hover:text-white transition-colors">
                                <Phone className="text-fmc-orange shrink-0" size={18} />
                                <span>0987 53 1953 - 0986 68 1911</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm hover:text-white transition-colors">
                                <Mail className="text-fmc-orange shrink-0" size={18} />
                                <span>info.fmcvietnam@gmail.com</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm hover:text-white transition-colors">
                                <Facebook className="text-fmc-orange shrink-0" size={18} />
                                <span>Olympic Toán FMC</span>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links / CTA */}
                    <div>
                        <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Đăng Ký Tham Gia</h3>
                        <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700">
                            <p className="text-sm mb-4">Hãy tham gia giao lưu và chinh phục thử thách tại Kỳ thi Toán học Quốc tế Factorial ngay hôm nay.</p>
                            <a href="#register" className="block w-full text-center bg-fmc-lime text-fmc-dark font-bold py-3 rounded-lg hover:bg-lime-400 transition-colors shadow-lg shadow-fmc-lime/20 cursor-pointer">
                                Đăng Ký Ngay
                            </a>
                        </div>
                    </div>

                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} Công ty Cổ phần Boatman. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

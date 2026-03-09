import { motion } from 'framer-motion';
import { Calendar, MapPin, Flag, Award, Plane, Edit3, Users, Map } from 'lucide-react';
import { MathBackground } from './MathBackground';

const schedule = [
    { day: 'Chủ nhật (05/07)', title: 'Đến nơi, Đăng ký & Bữa tối chào mừng', icon: Plane },
    { day: 'Thứ 2 (06/07)', title: 'Thi vòng Quốc tế & Hoạt động Camp 1', icon: Edit3 },
    { day: 'Thứ 3 (07/07)', title: 'Hoạt động Camp 2 & Camp 3', icon: Users },
    { day: 'Thứ 4 (08/07)', title: 'Tham quan du lịch & Cuộc thi Poster', icon: Map },
    { day: 'Thứ 5 (09/07)', title: 'Công bố kết quả, Lễ bế mạc & Khởi hành', icon: Award },
];

export const InternationalCampSection = () => {
    return (
        <section className="py-20 relative overflow-hidden bg-[#bede12]">
            <MathBackground pattern="equations" opacity={0.06} />
            <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
                {/* Header Frame (Matches LevelsSection/RoadmapSection) */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-white/95 backdrop-blur-md p-8 md:p-12 text-center rounded-[40px] shadow-2xl border-4 border-white mb-16 w-full max-w-6xl mx-auto relative overflow-hidden"
                >
                    <div className="inline-flex items-center justify-center space-x-2 bg-orange-50 text-fmc-orange px-4 py-2 rounded-full mb-6 font-semibold shadow-sm">
                        <MapPin size={18} />
                        <span>Jakarta, Indonesia</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-fmc-dark mb-6 drop-shadow-sm uppercase tracking-tight">Chương Trình Vòng Quốc Tế FMC 2026</h2>
                    <p className="text-gray-700 text-lg font-medium max-w-3xl mx-auto leading-relaxed">
                        5 ngày 4 đêm trải nghiệm văn hóa, giao lưu quốc tế và thử thách bản thân tại thủ đô Jakarta năng động.
                    </p>
                </motion.div>

                <div className="relative border-l-2 border-fmc-lime ml-4 md:ml-0 md:pl-0">
                    <div className="space-y-8 pl-8 md:pl-0">
                        {schedule.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative md:flex items-center justify-between"
                            >
                                {/* Connector Line for Desktop */}
                                <div className="hidden md:block absolute left-1/2 top-1/2 h-0.5 w-full bg-gray-100 -translate-y-1/2 -z-10"></div>

                                {/* Timeline Dot / Icon */}
                                <div className="absolute -left-[45px] md:left-1/2 md:-translate-x-1/2 top-0 md:top-auto w-10 h-10 bg-white border-2 border-fmc-lime rounded-full flex items-center justify-center shadow-lg z-10 text-fmc-lime">
                                    <item.icon size={20} />
                                </div>

                                {/* Content Box */}
                                <div className={`bg-white/90 backdrop-blur-sm border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow md:w-[45%] ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'}`}>
                                    <h4 className="text-fmc-orange font-bold text-xl mb-2 flex items-center gap-2">
                                        <Calendar size={18} className="text-fmc-orange/70" />
                                        {item.day}
                                    </h4>
                                    <p className="text-gray-700 font-medium">{item.title}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Banner callout */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 bg-white/90 backdrop-blur-md rounded-3xl p-8 border border-fmc-lime/30 flex justify-center items-center text-center shadow-lg hover:shadow-xl transition-shadow"
                >
                    <div className="max-w-2xl">
                        <Flag className="w-12 h-12 text-fmc-lime mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Đăng Ký Khảo Sát & Đại Diện Việt Nam</h3>
                        <p className="text-gray-600 mb-6">
                            Sẵn sàng cho một mùa hè đáng nhớ mang màu cờ sắc áo Việt Nam tỏa sáng trên đấu trường Quốc Tế.
                        </p>
                        <a href="#register" className="inline-block bg-fmc-lime text-white font-bold px-8 py-3 rounded-full shadow-lg shadow-lime-500/30 hover:bg-lime-600 transition-colors">
                            Đăng Ký Khảo Sát Ngay
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

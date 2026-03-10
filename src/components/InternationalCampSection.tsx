import { motion } from 'framer-motion';
import { Calendar, MapPin, Award, Plane, Edit3, Users, Map } from 'lucide-react';
import { MathBackground } from './MathBackground';

// For images in /src/assets, standard Vite setup imports them or refers to them via string paths if they are in /public.
// Assuming they are in /src/assets/schedule, let's use standard import strings.
import Day1Img from '../assets/schedule/Day-1.png';
import Day2Img from '../assets/schedule/Day-2.png';
import Day3Img from '../assets/schedule/Day-3.png';
import Day4Img from '../assets/schedule/Day-4.png';
import Day5Img from '../assets/schedule/Day-5.png';

const schedule = [
    { day: 'Chủ nhật (05/07)', activities: ['Đến nơi, Đăng ký', 'Bữa tối chào mừng'], icon: Plane, image: Day1Img },
    { day: 'Thứ 2 (06/07)', activities: ['Thi vòng Quốc tế', 'Hoạt động Camp 1'], icon: Edit3, image: Day2Img },
    { day: 'Thứ 3 (07/07)', activities: ['Hoạt động Camp 2', 'Hoạt động Camp 3'], icon: Users, image: Day3Img },
    { day: 'Thứ 4 (08/07)', activities: ['Tham quan du lịch', 'Cuộc thi Poster'], icon: Map, image: Day4Img },
    { day: 'Thứ 5 (09/07)', activities: ['Công bố kết quả, Lễ bế mạc', 'Khởi hành trở về'], icon: Award, image: Day5Img },
];

export const InternationalCampSection = () => {
    return (
        <section className="py-10 md:py-20 min-h-[auto] md:min-h-[90vh] flex items-center relative overflow-hidden bg-[#bede12]">
            <MathBackground pattern="equations" opacity={0.06} />
            <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10 w-full">
                {/* Header Frame (Matches LevelsSection/RoadmapSection) */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-white/95 backdrop-blur-md p-8 md:p-12 text-center rounded-[40px] shadow-2xl border-4 border-white mb-16 w-full max-w-6xl mx-auto relative overflow-hidden"
                >
                    <span className="text-fmc-orange font-bold tracking-wider uppercase text-lg md:text-xl mb-3 block drop-shadow-sm flex items-center justify-center gap-2">
                        <MapPin size={22} className="inline-block" />
                        Jakarta, Indonesia
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black text-fmc-lime mb-6 drop-shadow-sm uppercase tracking-tight">Chương Trình Vòng Quốc Tế FMC 2026</h2>
                    <p className="text-gray-700 leading-relaxed text-xl mb-8 font-medium max-w-3xl mx-auto">
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
                                className="relative flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0"
                            >
                                {/* Connector Line for Desktop */}
                                <div className={`hidden md:block absolute top-1/2 h-0.5 w-1/2 bg-gray-100 -translate-y-1/2 -z-10 ${index % 2 === 0 ? 'left-1/2' : 'right-1/2'}`}></div>

                                {/* Timeline Dot / Icon */}
                                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white border-2 border-fmc-lime rounded-full items-center justify-center shadow-lg z-10 text-fmc-lime">
                                    <item.icon size={20} />
                                </div>
                                {/* Mobile Timeline Dot */}
                                <div className="md:hidden absolute -left-[45px] top-6 w-10 h-10 bg-white border-2 border-fmc-lime rounded-full flex items-center justify-center shadow-lg z-10 text-fmc-lime">
                                    <item.icon size={20} />
                                </div>

                                {/* Content Box - Alternating Sides */}
                                <div className={`w-full md:w-[45%] ${index % 2 === 0 ? 'md:order-3' : 'md:order-1'}`}>
                                    <div className="bg-white/90 backdrop-blur-sm border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                                        <h4 className="text-fmc-orange font-bold text-xl mb-2 flex items-center gap-2">
                                            <Calendar size={18} className="text-fmc-orange/70" />
                                            {item.day}
                                        </h4>
                                        <ul className="text-gray-700 font-medium space-y-1 list-disc list-inside">
                                            {item.activities.map((activity, actIdx) => (
                                                <li key={actIdx}>{activity}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Empty Spacer for layout ordering (Center Timeline Dot space) */}
                                <div className="hidden md:block md:order-2 w-[10%]"></div>

                                {/* Image Box - Opposite Alternating Sides */}
                                <div className={`w-full md:w-[45%] ${index % 2 === 0 ? 'md:order-1' : 'md:order-3'} flex justify-center`}>
                                    <div className="bg-white p-2 rounded-2xl shadow-lg border border-gray-100 transform hover:scale-105 transition-transform duration-300">
                                        <img src={item.image} alt={item.day} className="w-full h-auto max-h-48 object-cover rounded-xl" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

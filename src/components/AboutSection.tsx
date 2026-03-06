
import { motion } from 'framer-motion';
import { MathBackground } from './MathBackground';

export const AboutSection = () => {
    return (
        <section id="about" className="py-20 relative overflow-hidden">
            <MathBackground pattern="symbols" opacity={0.06} />
            <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:w-1/2"
                    >
                        <div className="bg-white/80 backdrop-blur-md p-8 md:p-10 rounded-3xl shadow-sm border border-white">
                            <div className="flex items-center gap-4 mb-4">
                                <span className="h-1 w-12 bg-fmc-orange rounded-full"></span>
                                <h2 className="text-3xl md:text-4xl font-bold text-fmc-dark">Về FMC 2026</h2>
                            </div>

                            {/* New General Introduction */}
                            <p className="text-gray-600 leading-relaxed mb-8">
                                Kỳ thi Toán học Quốc tế Factorial (FMC) mang đến một sân chơi trí tuệ đỉnh cao, nơi học sinh không chỉ được cọ xát với những bài toán chuẩn quốc tế mà còn có cơ hội giao lưu học hỏi với bạn bè xuất sắc khắp mọi miền đất nước và quốc tế. Chúng tôi hướng tới việc xây dựng một môi trường nuôi dưỡng sự sáng tạo, tư duy logic và khả năng giải quyết vấn đề.
                            </p>

                            <h3 className="text-2xl font-semibold text-fmc-lime mb-6">Mục Tiêu & Tầm Nhìn</h3>

                            <blockquote className="border-l-4 border-fmc-orange pl-6 my-8 text-gray-700 leading-relaxed text-lg italic bg-orange-50/50 p-6 rounded-r-2xl">
                                "Trong toán học, Giai thừa (Factorial - ký hiệu là <strong>'!'</strong>) không chỉ là một phép tính, mà là biểu tượng của sự bứt phá và sức mạnh cộng hưởng. Mỗi một bước tiến, giá trị lại được nhân lên gấp bội. Khởi nguồn từ ý nghĩa đó, Kỳ thi Toán học Quốc tế FMC 2026 không chỉ là một bài kiểm tra kiến thức, mà là một hành trình đánh thức tiềm năng..."
                            </blockquote>

                            <p className="text-gray-600 leading-relaxed mb-6">
                                Chúng tôi tin rằng, khi được trao đúng cơ hội và môi trường, tư duy toán học của mỗi học sinh sẽ không chỉ cộng thêm từng ngày, mà sẽ phát triển mạnh mẽ theo cấp số nhân.
                            </p>
                            <p className="text-gray-600 leading-relaxed font-medium">
                                Tham gia FMC 2026 là bước đệm để các em bứt phá giới hạn của bản thân, tự tự tin bước ra thế giới và ghi dấu ấn cá nhân trên đấu trường quốc tế.
                            </p>
                        </div>
                    </motion.div>

                    {/* YouTube Video Concept */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:w-1/2 relative flex justify-center w-full"
                    >
                        <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl group flex items-center justify-center border-4 border-white glass">
                            <iframe
                                className="absolute inset-0 w-full h-full"
                                src="https://www.youtube.com/embed/O-hK4p3dvPE"
                                title="FMC Introduction Video"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>

                        {/* Orange accent block */}
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-fmc-orange rounded-3xl -z-10 opacity-50"></div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

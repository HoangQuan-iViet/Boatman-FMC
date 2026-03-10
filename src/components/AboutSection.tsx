
import { motion } from 'framer-motion';

export const AboutSection = () => {
    return (
        <section id="about" className="py-10 md:py-20 min-h-[auto] md:min-h-[90vh] flex items-center relative overflow-hidden bg-[#aad211]">            <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10 w-full">

            {/* Master Frame Container */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white/95 backdrop-blur-md p-8 md:p-14 rounded-[40px] shadow-2xl border-8 border-white relative overflow-hidden"
            >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-14 items-center">

                    {/* Cell 1: Về FMC 2026 */}
                    <div className="flex flex-col justify-center">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="h-1 w-12 bg-fmc-orange rounded-full"></span>
                            <h2 className="text-3xl md:text-5xl font-black text-fmc-lime drop-shadow-sm uppercase tracking-tight">Về FMC 2026</h2>
                        </div>
                        <p className="text-gray-700 leading-relaxed text-xl">
                            Kỳ thi Toán học Quốc tế Factorial (FMC) mang đến một sân chơi trí tuệ đỉnh cao, nơi học sinh không chỉ được cọ xát với những bài toán chuẩn quốc tế mà còn có cơ hội giao lưu học hỏi với bạn bè xuất sắc khắp mọi miền đất nước và quốc tế. Chúng tôi hướng tới việc xây dựng một môi trường nuôi dưỡng sự sáng tạo, tư duy logic và khả năng giải quyết vấn đề.
                        </p>
                    </div>

                    {/* Cell 2: YouTube Video */}
                    <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-xl border border-gray-100 group">
                        <iframe
                            className="absolute inset-0 w-full h-full"
                            src="https://www.youtube.com/embed/O-hK4p3dvPE"
                            title="FMC Introduction Video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>

                    {/* Cell 3: Quote Block */}
                    <div className="flex items-center h-full">
                        <blockquote className="border-l-4 border-fmc-orange pl-6 py-4 text-gray-700 leading-relaxed text-xl font-medium italic bg-orange-50/50 p-6 rounded-r-2xl w-full">
                            "Trong toán học, Giai thừa (Factorial - ký hiệu là <strong>'!'</strong>) không chỉ là một phép tính, mà là biểu tượng của sự bứt phá và sức mạnh cộng hưởng. Mỗi một bước tiến, giá trị lại được nhân lên gấp bội. Khởi nguồn từ ý nghĩa đó, Kỳ thi Toán học Quốc tế FMC 2026 không chỉ là một bài kiểm tra kiến thức, mà là một hành trình đánh thức tiềm năng..."
                        </blockquote>
                    </div>

                    {/* Cell 4: Mục tiêu & Tầm nhìn */}
                    <div className="flex flex-col justify-center h-full">
                        <h3 className="text-2xl font-bold text-fmc-lime mb-4 flex items-center gap-3">
                            Mục Tiêu & Tầm Nhìn
                        </h3>
                        <p className="text-gray-700 leading-relaxed text-xl mb-4">
                            Chúng tôi tin rằng, khi được trao đúng cơ hội và môi trường, tư duy toán học của mỗi học sinh sẽ không chỉ cộng thêm từng ngày, mà sẽ phát triển mạnh mẽ theo cấp số nhân.
                        </p>
                        <p className="text-gray-700 leading-relaxed text-xl font-medium">
                            Tham gia FMC 2026 là bước đệm để các em bứt phá giới hạn của bản thân, tự tin bước ra thế giới và ghi dấu ấn cá nhân trên đấu trường quốc tế.
                        </p>
                    </div>

                </div>
            </motion.div>

        </div>
        </section>
    );
};

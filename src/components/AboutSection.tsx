
import { motion } from 'framer-motion';

export const AboutSection = () => {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-8 max-w-6xl">
                <div className="flex flex-col lg:flex-row items-center gap-12">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:w-1/2"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <span className="h-1 w-12 bg-fmc-orange rounded-full"></span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Về FMC 2026</h2>
                        </div>
                        <h3 className="text-2xl font-semibold text-fmc-lime mb-6">Mục Tiêu & Tầm Nhìn</h3>

                        <blockquote className="border-l-4 border-fmc-orange pl-6 my-8 text-gray-700 leading-relaxed text-lg italic bg-orange-50/50 p-6 rounded-r-2xl">
                            "Trong toán học, Giai thừa (Factorial - ký hiệu là <strong>'!'</strong>) không chỉ là một phép tính, mà là biểu tượng của sự bứt phá và sức mạnh cộng hưởng. Mỗi một bước tiến, giá trị lại được nhân lên gấp bội. Khởi nguồn từ ý nghĩa đó, Kỳ thi Toán học Quốc tế FMC 2026 không chỉ là một bài kiểm tra kiến thức, mà là một hành trình đánh thức tiềm năng..."
                        </blockquote>

                        <p className="text-gray-600 leading-relaxed mb-6">
                            Chúng tôi tin rằng, khi được trao đúng cơ hội và môi trường, tư duy toán học của mỗi học sinh sẽ không chỉ cộng thêm từng ngày, mà sẽ phát triển mạnh mẽ theo cấp số nhân.
                        </p>
                        <p className="text-gray-600 leading-relaxed font-medium">
                            Tham gia FMC 2026 là bước đệm để các em bứt phá giới hạn của bản thân, tự tin bước ra thế giới và ghi dấu ấn cá nhân trên đấu trường quốc tế.
                        </p>
                    </motion.div>

                    {/* Visual Concept */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:w-1/2 relative flex justify-center w-full"
                    >
                        <div className="relative w-full aspect-square max-w-md rounded-3xl overflow-hidden shadow-2xl group flex items-center justify-center bg-gradient-to-br from-fmc-lime/20 to-fmc-orange/20 border border-white/40 glass">
                            <div className="absolute inset-0 bg-white/40 backdrop-blur-3xl"></div>

                            <div className="relative z-10 text-center">
                                <motion.div
                                    animate={{
                                        scale: [1, 1.05, 1],
                                        rotate: [0, 5, -5, 0]
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                    className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-fmc-lime to-fmc-orange drop-shadow-md pb-4"
                                >
                                    n!
                                </motion.div>
                                <div className="text-2xl font-bold tracking-widest text-gray-800 uppercase mt-2">Factorial</div>
                            </div>

                            {/* Decorative floating elements */}
                            <motion.div
                                animate={{ y: [-10, 10, -10] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-10 right-10 w-16 h-16 bg-fmc-orange/20 rounded-full blur-xl"
                            ></motion.div>
                            <motion.div
                                animate={{ y: [10, -10, 10] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute bottom-10 left-10 w-24 h-24 bg-fmc-lime/20 rounded-full blur-xl"
                            ></motion.div>
                        </div>

                        {/* Orange accent block */}
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-fmc-orange rounded-3xl -z-10 opacity-50"></div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

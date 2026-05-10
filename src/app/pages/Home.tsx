import { Link } from 'react-router';
import { motion } from 'motion/react';
import { 
  BookOpen, 
  Award, 
  Users, 
  Clock, 
  Star,
  CheckCircle,
  ArrowLeft
} from 'lucide-react';
import { IslamicPattern } from '../components/IslamicPattern';

export function Home() {
  const stats = [
    { icon: Clock, label: 'سنوات الخبرة', value: '30+' },
    { icon: Award, label: 'إجازة قرآنية', value: '10+' },
    { icon: Users, label: 'طالبة مُجازة', value: '500+' },
    { icon: BookOpen, label: 'القراءات', value: 'العشر' },
  ];

  const features = [
    { icon: BookOpen, title: 'تعليم احترافي', description: 'منهج متكامل في تعليم القرآن والتجويد' },
    { icon: Award, title: 'إجازات معتمدة', description: 'سلاسل إسناد متصلة للقراءات العشر' },
    { icon: Users, title: 'تعليم فردي', description: 'متابعة شخصية لكل طالبة' },
    { icon: Clock, title: 'مرونة في المواعيد', description: 'حصص أونلاين بمواعيد مناسبة' },
  ];

  const testimonials = [
    {
      name: 'أم عبدالله',
      text: 'معلمة متميزة وصبورة، استفدت كثيرًا من دروسها في التجويد والقراءات',
      rating: 5,
    },
    {
      name: 'فاطمة أحمد',
      text: 'حصلت على إجازة حفص بفضل الله ثم بفضل المعلمة الفاضلة، أسلوبها رائع في التعليم',
      rating: 5,
    },
    {
      name: 'نورة محمد',
      text: 'خبرة طويلة وعلم غزير، أنصح كل من تريد إتقان القرآن بالتعلم عندها',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/90">
        <IslamicPattern opacity={0.1} />
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-accent/30">
                <Award className="w-5 h-5 text-accent" />
                <span className="text-accent">معلمة قرآن معتمدة</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            >
              رحلة إتقان القرآن الكريم
              <br />
              <span className="text-accent mt-5 block">تبدأ من هنا</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed"
            >
              تعلّمي القرآن الكريم وعلم القراءات مع معلمة متخصصة
              <br />
              خبرة تزيد عن 30 عامًا في التعليم والإقراء
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/contact"
                className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all hover:shadow-2xl hover:scale-105 inline-flex items-center justify-center gap-2"
              >
                احجز الآن
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all border-2 border-white/30 inline-flex items-center justify-center gap-2"
              >
                استكشف الخدمات
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-secondary to-white border border-primary/10 hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-gradient-to-b from-white to-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
                عن المعلمة
              </h2>
              <div className="w-20 h-1 bg-accent mx-auto mb-6" />
              <p className="text-xl text-gray-700 leading-relaxed">
                معلمة قرآن كريم ومتخصصة في القراءات، حاصلة على تخصص القراءات من معهد القراءات بالأزهر الشريف،
                ودبلوم الإشراف التربوي من معهد الشرق بالرياض
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-primary/10">
                <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                  <Award className="w-6 h-6 text-accent" />
                  المؤهلات الأكاديمية
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>تخصص القراءات - معهد القراءات بالأزهر الشريف</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>دبلوم الإشراف التربوي - معهد الشرق بالرياض</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-primary/10">
                <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                  <BookOpen className="w-6 h-6 text-accent" />
                  الخبرة العملية
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>30+ عامًا في تعليم القرآن الكريم والإقراء</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>11+ عامًا في الإشراف التعليمي</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>مشرفة تعليمية (عن بُعد) - مركز الروضة بالرياض</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="
              bg-gradient-to-br 
              from-primary
              to-primary/80 
              p-8 
              rounded-3xl 
              shadow-2xl 
              text-white 
              relative 
              overflow-hidden"
            >
              <IslamicPattern opacity={0.1} />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6">الإجازات القرآنية</h3>
                <ul className="space-y-4">
                  {[
                    'القراءات السبع من طريق الشاطبية',
                    'القراءات العشر الصغرى',
                    'رواية حفص عن عاصم',
                    'رواية ورش عن نافع',
                    'قراءة حمزة',
                    'إجازات في التوسط والصلة',
                    'متن الجزرية وتحفة الأطفال',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                      <span className="text-white/90">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/certifications"
                  className="mt-8 inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-full font-semibold transition-all"
                >
                  عرض جميع الإجازات
                  <ArrowLeft className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
                مميزات التعليم
              </h2>
              <div className="w-20 h-1 bg-accent mx-auto mb-6" />
              <p className="text-xl text-gray-700">
                نقدم تجربة تعليمية متميزة تجمع بين الجودة والاحترافية
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-secondary to-white p-8 rounded-2xl border border-primary/10 hover:shadow-xl transition-all hover:scale-105 h-full">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all">
                    <feature.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-white to-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
                آراء الطالبات
              </h2>
              <div className="w-20 h-1 bg-accent mx-auto mb-6" />
              <p className="text-xl text-gray-700">
                شهادات من طالباتنا المتميزات
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-primary/10 hover:shadow-xl transition-shadow"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">طالبة مُجازة</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-primary/90 relative overflow-hidden">
        <IslamicPattern opacity={0.1} />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              ابدأي رحلتك مع القرآن الكريم اليوم
            </h2>
            <p className="text-xl mb-8 text-white/90">
              انضمي إلى مئات الطالبات اللاتي حققن أحلامهن في إتقان القرآن والحصول على الإجازات
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all hover:shadow-2xl hover:scale-105 inline-flex items-center justify-center gap-2"
              >
                تواصلي معنا الآن
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <Link
                to="/about"
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all border-2 border-white/30 inline-flex items-center justify-center"
              >
                تعرفي على المعلمة
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

import { motion } from 'motion/react';
import { 
  BookOpen, 
  Award, 
  GraduationCap, 
  Video,
  Clock,
  CheckCircle,
  Users,
  Star,
  Heart,
  Target
} from 'lucide-react';
import { Link } from 'react-router';
import { IslamicPattern } from '../components/IslamicPattern';

export function Services() {
  const mainServices = [
    {
      icon: BookOpen,
      title: 'تعليم التجويد',
      description: 'تعليم أحكام التجويد وتطبيقها بشكل عملي على التلاوة',
      features: [
        'دراسة أحكام النون الساكنة والتنوين',
        'أحكام الميم الساكنة والمدود',
        'مخارج الحروف وصفاتها',
        'تطبيق عملي على السور القرآنية',
        'تصحيح التلاوة والأخطاء الشائعة',
      ],
      color: 'from-primary to-primary/80 ',
      gradient: 'from-emerald-50 to-white',
    },
    {
      icon: GraduationCap,
      title: 'تعليم القراءات',
      description: 'تدريس القراءات السبع والعشر بالطرق المختلفة',
      features: [
        'القراءات السبع من طريق الشاطبية',
        'القراءات العشر الصغرى والكبرى',
        'رواية حفص عن عاصم',
        'رواية ورش عن نافع',
        'قراءة حمزة وغيرها من القراءات',
      ],
      color: 'from-primary to-primary/80 ',
      gradient: 'from-blue-50 to-white',
    },
    {
      icon: Award,
      title: 'التأهيل للإجازات',
      description: 'إعداد الطالبات للحصول على الإجازات القرآنية المعتمدة',
      features: [
        'إجازة في رواية حفص عن عاصم',
        'إجازة في رواية ورش عن نافع',
        'إجازة القراءات السبع',
        'إجازة القراءات العشر',
        'السند المتصل إلى النبي ﷺ',
      ],
      color: 'from-primary to-primary/80 ',
      gradient: 'from-purple-50 to-white',
    },
    {
      icon: Video,
      title: 'حلقات أونلاين',
      description: 'دروس تفاعلية عن بُعد بمواعيد مرنة تناسب الجميع',
      features: [
        'حصص فردية مخصصة',
        'مواعيد مرنة',
        'متابعة مستمرة',
        'تسجيلات للمراجعة',
        'واجبات وتقييمات دورية',
      ],
      color: 'from-primary to-primary/80 ',
      gradient: 'from-indigo-50 to-white',
    },
  ];

  const additionalServices = [
    {
      icon: Heart,
      title: 'تحفيظ القرآن الكريم',
      description: 'برنامج متكامل لحفظ القرآن الكريم بالتجويد',
    },
    {
      icon: Target,
      title: 'تصحيح التلاوة',
      description: 'تصحيح الأخطاء وتحسين مستوى التلاوة',
    },
    {
      icon: Users,
      title: 'دورات مكثفة',
      description: 'دورات تدريبية مكثفة في فترات محددة',
    },
    {
      icon: Star,
      title: 'استشارات تعليمية',
      description: 'استشارات في مناهج التحفيظ والتجويد',
    },
  ];

  const benefits = [
    'تعليم احترافي من معلمة متخصصة',
    'خبرة تزيد عن 30 عامًا',
    'إجازات معتمدة بالسند المتصل',
    'متابعة فردية لكل طالبة',
    'مرونة في المواعيد',
    'تعليم عن بُعد بتقنية عالية',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary via-primary to-primary/90 text-white overflow-hidden">
        <IslamicPattern opacity={0.1} />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-accent/30">
              <BookOpen className="w-5 h-5 text-accent" />
              <span className="text-accent">الخدمات التعليمية</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              خدماتنا
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              برامج تعليمية متنوعة في القرآن الكريم والتجويد والقراءات
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              الخدمات الرئيسية
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6" />
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              نقدم مجموعة متكاملة من البرامج التعليمية المتخصصة في القرآن الكريم وعلومه
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {mainServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className={`bg-gradient-to-br ${service.gradient} border border-primary/10 rounded-3xl shadow-lg hover:shadow-2xl transition-all overflow-hidden h-full`}>
                  {/* Header */}
                  <div className={`bg-gradient-to-br ${service.color} p-8 text-white relative overflow-hidden`}>
                    <IslamicPattern opacity={0.05} />
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:bg-white/30 transition-colors">
                          <service.icon className="w-8 h-8" />
                        </div>
                        <Star className="w-8 h-8 text-accent opacity-80" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-3">
                        {service.title}
                      </h3>
                      <p className="text-white/90 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="p-8">
                    <h4 className="font-bold text-primary mb-4 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-accent" />
                      ما ستتعلمينه:
                    </h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start gap-3 text-gray-700"
                        >
                          <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gradient-to-b from-white to-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              خدمات إضافية
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6" />
            <p className="text-xl text-gray-700">
              المزيد من البرامج التعليمية المتخصصة
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-primary/10 hover:shadow-xl transition-all group text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all">
                  <service.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                لماذا تختارين التعلم معنا؟
              </h2>
              <div className="w-20 h-1 bg-accent mx-auto mb-6" />
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-gradient-to-br from-secondary to-white p-6 rounded-xl border border-primary/10 hover:shadow-lg transition-all group"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5 group-hover:scale-125 transition-transform" />
                    <span className="text-gray-700 font-medium leading-relaxed">
                      {benefit}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-b from-white to-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                كيف تبدأين رحلتك؟
              </h2>
              <div className="w-20 h-1 bg-accent mx-auto mb-6" />
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  number: '1',
                  title: 'تواصلي معنا',
                  description: 'املأي نموذج التواصل أو راسلينا عبر واتساب',
                  icon: Users,
                },
                {
                  number: '2',
                  title: 'تحديد المستوى',
                  description: 'سنحدد مستواك ونختار البرنامج المناسب لك',
                  icon: Target,
                },
                {
                  number: '3',
                  title: 'جدولة الحصص',
                  description: 'اختاري المواعيد التي تناسبك',
                  icon: Clock,
                },
                {
                  number: '4',
                  title: 'ابدأي التعلم',
                  description: 'انطلقي في رحلتك لإتقان القرآن الكريم',
                  icon: BookOpen,
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="bg-white p-6 rounded-2xl shadow-lg border border-primary/10 hover:shadow-xl transition-all text-center h-full">
                    <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                      {step.number}
                    </div>
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-primary mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <div className="w-8 h-0.5 bg-accent" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-primary/90 text-white relative overflow-hidden">
        <IslamicPattern opacity={0.1} />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              هل أنتِ مستعدة للبدء؟
            </h2>
            <p className="text-xl mb-8 text-white/90">
              انضمي إلينا اليوم وابدأي رحلتك في إتقان القرآن الكريم
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all hover:shadow-2xl hover:scale-105"
            >
              احجزي استشارة مجانية
              <CheckCircle className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

import { motion } from 'motion/react';
import { Award, BookOpen, GraduationCap, Star, Users, Clock } from 'lucide-react';
import { IslamicPattern } from '../components/IslamicPattern';

export function About() {
  const qualifications = [
    {
      title: 'تخصص القراءات',
      institution: 'معهد القراءات بالأزهر الشريف',
      description: 'تخصص متقدم في علم القراءات العشر وطرقها',
    },
    {
      title: 'دبلوم الإشراف التربوي',
      institution: 'معهد الشرق بالرياض',
      description: 'تأهيل في الإشراف والتوجيه التربوي للمعلمات',
    },
  ];

  const experiences = [
    {
      title: 'معلمة قرآن كريم وقراءات',
      duration: '30+ عامًا',
      description: 'تدريس القرآن الكريم وعلم القراءات والتجويد',
      icon: BookOpen,
    },
    {
      title: 'مشرفة تعليمية (عن بُعد)',
      duration: '11+ عامًا',
      description: 'الإشراف والتوجيه التربوي لمركز الروضة بمدينة الرياض',
      icon: Users,
    },
    {
      title: 'تأهيل للإجازات القرآنية',
      duration: 'مستمر',
      description: 'إعداد الطالبات للحصول على الإجازات بالسند المتصل',
      icon: Award,
    },
  ];

  const achievements = [
    { number: '30+', label: 'عامًا من الخبرة' },
    { number: '500+', label: 'طالبة مُجازة' },
    { number: '10+', label: 'إجازة قرآنية' },
    { number: '1000+', label: 'ساعة تدريس' },
  ];

  const skills = [
    'تعليم التجويد وأحكام التلاوة',
    'تدريس القراءات العشر',
    'إعداد الطالبات للإجازات',
    'التعليم عن بُعد',
    'الإشراف التربوي',
    'تحفيظ القرآن الكريم',
    'تصحيح التلاوة',
    'تعليم أحكام التوسط والصلة',
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
            <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-accent/30">
              <Award className="w-5 h-5 text-accent" />
              <span className="text-accent">السيرة الذاتية</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              عن المعلمة
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              رحلة مباركة في خدمة كتاب الله وتعليم القرآن الكريم وعلم القراءات
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-secondary to-white p-8 md:p-12 rounded-3xl shadow-lg border border-primary/10"
            >
              <div className="flex items-start gap-6 mb-8">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                    نبذة تعريفية
                  </h2>
                  <div className="w-20 h-1 bg-accent mb-6" />
                </div>
              </div>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  بفضل الله تعالى، أكرمني الله بخدمة كتابه العزيز منذ أكثر من ثلاثة عقود، حيث تخصصت في علم القراءات 
                  من معهد القراءات بالأزهر الشريف، وحصلت على دبلوم الإشراف التربوي من معهد الشرق المرموق بالرياض.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  خلال مسيرتي المباركة، أتيحت لي الفرصة لتعليم مئات الطالبات القرآن الكريم وعلم التجويد والقراءات، 
                  وتأهيل الكثيرات منهن للحصول على الإجازات القرآنية بالسند المتصل إلى النبي صلى الله عليه وسلم.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  كما عملت مشرفة تعليمية لمركز الروضة بمدينة الرياض لأكثر من 11 عامًا، حيث اكتسبت خبرة واسعة في 
                  الإشراف التربوي والتوجيه التعليمي. وأسأل الله تعالى أن يجعل هذا العمل خالصًا لوجهه الكريم.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements Stats */}
      <section className="py-16 bg-gradient-to-b from-white to-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg text-center border border-primary/10 hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {achievement.number}
                </div>
                <div className="text-gray-600">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualifications Section */}
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
                المؤهلات الأكاديمية
              </h2>
              <div className="w-20 h-1 bg-accent mx-auto mb-6" />
              <p className="text-xl text-gray-700">
                تأهيل علمي متخصص في علم القراءات والتربية
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {qualifications.map((qual, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-primary to-primary/80 p-8 rounded-2xl shadow-xl text-white relative overflow-hidden group hover:scale-105 transition-transform"
                >
                  <IslamicPattern opacity={0.05} />
                  <div className="relative z-10">
                    <div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/30 transition-colors">
                      <GraduationCap className="w-7 h-7 text-accent" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{qual.title}</h3>
                    <p className="text-accent font-semibold mb-4">{qual.institution}</p>
                    <p className="text-white/80 leading-relaxed">{qual.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
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
                الخبرات العملية
              </h2>
              <div className="w-20 h-1 bg-accent mx-auto mb-6" />
              <p className="text-xl text-gray-700">
                مسيرة حافلة في خدمة القرآن الكريم وتعليمه
              </p>
            </motion.div>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-8 rounded-2xl shadow-lg border border-primary/10 hover:shadow-xl transition-all group"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all">
                      <exp.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3 gap-2">
                        <h3 className="text-xl font-bold text-primary">{exp.title}</h3>
                        <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-1 rounded-full text-sm font-semibold">
                          <Clock className="w-4 h-4" />
                          {exp.duration}
                        </div>
                      </div>
                      <p className="text-gray-700 leading-relaxed">{exp.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
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
                المهارات والتخصصات
              </h2>
              <div className="w-20 h-1 bg-accent mx-auto mb-6" />
              <p className="text-xl text-gray-700">
                كفاءات متعددة في تعليم القرآن الكريم وعلومه
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-gradient-to-br from-secondary to-white p-6 rounded-xl border border-primary/10 hover:shadow-lg transition-all group"
                >
                  <div className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-accent flex-shrink-0 mt-1 group-hover:scale-125 transition-transform" />
                    <span className="text-gray-700 font-medium">{skill}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-primary/90 text-white relative overflow-hidden">
        <IslamicPattern opacity={0.1} />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              رؤيتنا ورسالتنا
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-8" />
            
            <div className="bg-white/10 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-white/20">
              <p className="text-xl md:text-2xl leading-relaxed mb-6">
                "نسعى لتكوين جيل متقن لكتاب الله تعالى، ملتزم بتطبيق أحكام التجويد والقراءات، قادر على نقل هذا العلم الشريف للآخرين بالسند المتصل"
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                نؤمن بأن تعليم القرآن الكريم رسالة عظيمة تتطلب الإخلاص والصبر والعلم، ونحرص على تقديم تعليم متميز يجمع بين الأصالة والمعاصرة
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

import { motion } from 'motion/react';
import { Award, BookOpen, Check, Star } from 'lucide-react';
import { IslamicPattern } from '../components/IslamicPattern';

export function Certifications() {
  const certifications = [
    {
      title: 'القراءات السبع من طريق الشاطبية',
      description: 'إجازة كاملة في القراءات السبع من طريق الشاطبية بالسند المتصل',
      details: [
        'قراءة نافع برواية قالون وورش',
        'قراءة ابن كثير برواية البزي وقنبل',
        'قراءة أبي عمرو برواية الدوري والسوسي',
        'قراءة ابن عامر برواية هشام وابن ذكوان',
        'قراءة عاصم برواية شعبة وحفص',
        'قراءة حمزة برواية خلف وخلاد',
        'قراءة الكسائي برواية أبي الحارث والدوري',
      ],
      color: 'from-primary to-primary/80 ',
    },
    {
      title: 'القراءات العشر الصغرى',
      description: 'إجازة في القراءات العشر الصغرى شاملة جميع الروايات',
      details: [
        'القراءات السبع المتواترة',
        'قراءة أبي جعفر برواية ابن وردان وابن جماز',
        'قراءة يعقوب برواية رويس وروح',
        'قراءة خلف برواية إسحاق وإدريس',
      ],
      color: 'from-primary to-primary/80 ',
    },
    {
      title: 'رواية حفص عن عاصم',
      description: 'إجازة متقنة في رواية حفص عن عاصم من طريق الشاطبية',
      details: [
        'إتقان الأصول والفرش',
        'معرفة الأوجه المقدمة',
        'دراسة الفرق بين الطرق',
        'السند المتصل إلى النبي ﷺ',
      ],
      color: 'from-primary to-primary/80 ',
    },
    {
      title: 'رواية ورش عن نافع',
      description: 'إجازة في رواية ورش من طريق الأزرق والأصبهاني',
      details: [
        'طريق الأزرق',
        'طريق الأصبهاني',
        'أحكام المد والقصر',
        'التفخيم والترقيق',
      ],
      color: 'from-primary to-primary/80 ',
    },
    {
      title: 'قراءة حمزة الزيات',
      description: 'إجازة في قراءة حمزة برواية خلف وخلاد',
      details: [
        'رواية خلف عن حمزة',
        'رواية خلاد عن حمزة',
        'أحكام السكت والإدغام',
        'خصائص قراءة حمزة',
      ],
      color: 'from-primary to-primary/80 ',
    },
    {
      title: 'إجازات في التوسط والصلة',
      description: 'إجازات متخصصة في أحكام التوسط والصلة في القراءات',
      details: [
        'أحكام التوسط في المد',
        'أحكام الصلة الصغرى والكبرى',
        'الفروق بين القراءات',
        'التطبيق العملي',
      ],
      color: 'from-primary to-primary/80 ',
    },
    {
      title: 'متن الجزرية',
      description: 'إجازة في متن الجزرية في علم التجويد',
      details: [
        'حفظ المتن كاملاً',
        'شرح المتن وفهمه',
        'التطبيق العملي لأحكام التجويد',
        'المخارج والصفات',
      ],
      color: 'from-primary to-primary/80 ',
    },
    {
      title: 'تحفة الأطفال',
      description: 'إجازة في منظومة تحفة الأطفال للجمزوري',
      details: [
        'حفظ المنظومة',
        'أحكام النون الساكنة والتنوين',
        'أحكام الميم الساكنة',
        'أحكام المدود',
      ],
      color: 'from-primary to-primary/80 ',
    },
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
              <span className="text-accent">الإجازات القرآنية</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              الإجازات والمؤهلات
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              إجازات قرآنية متنوعة بالسند المتصل إلى النبي صلى الله عليه وسلم
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { number: '10+', label: 'إجازة قرآنية' },
                { number: '7', label: 'القراءات السبع' },
                { number: '10', label: 'القراءات العشر' },
                { number: '100%', label: 'سند متصل' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-secondary to-white p-6 rounded-2xl shadow-lg text-center border border-primary/10"
                >
                  <div className="text-4xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-gradient-to-b from-white to-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              الإجازات القرآنية المعتمدة
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6" />
            <p className="text-xl text-gray-700 leading-relaxed">
              بفضل الله تعالى، حصلت على مجموعة من الإجازات القرآنية المتنوعة في القراءات والتجويد، 
              جميعها بالسند المتصل إلى رسول الله صلى الله عليه وسلم، مما يتيح لي تعليم الطالبات 
              ومنحهن الإجازات بإذن الله
            </p>
          </motion.div>
        </div>
      </section>

      {/* Certifications List */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className={`bg-gradient-to-br ${cert.color} p-8 rounded-3xl shadow-xl text-white relative overflow-hidden hover:scale-105 transition-transform h-full`}>
                    <IslamicPattern opacity={0.05} />
                    
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-6">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:bg-white/30 transition-colors">
                          <Award className="w-8 h-8 text-white" />
                        </div>
                        <Star className="w-8 h-8 text-accent opacity-80" />
                      </div>

                      <h3 className="text-2xl font-bold mb-4 leading-tight">
                        {cert.title}
                      </h3>

                      <p className="text-white/90 mb-6 leading-relaxed">
                        {cert.description}
                      </p>

                      <div className="space-y-3">
                        {cert.details.map((detail, detailIndex) => (
                          <div
                            key={detailIndex}
                            className="flex items-start gap-3"
                          >
                            <Check className="w-5 h-5 flex-shrink-0 mt-0.5 text-accent" />
                            <span className="text-white/80 text-sm leading-relaxed">
                              {detail}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Educational Institutions */}
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
                الجهات التعليمية
              </h2>
              <div className="w-20 h-1 bg-accent mx-auto mb-6" />
              <p className="text-xl text-gray-700">
                الجهات التي تلقيت منها العلم والإجازات
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-primary/10 hover:shadow-xl transition-all"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">
                      معهد القراءات
                    </h3>
                    <p className="text-accent font-semibold">الأزهر الشريف - مصر</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  تخصص القراءات من أعرق المؤسسات الإسلامية في العالم، حيث يتم تدريس القراءات العشر 
                  بأسانيدها المتصلة وطرقها المختلفة على أيدي كبار المشايخ
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-primary/10 hover:shadow-xl transition-all"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">
                      معهد الشرق
                    </h3>
                    <p className="text-accent font-semibold">الرياض - المملكة العربية السعودية</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  دبلوم الإشراف التربوي من معهد رائد في التعليم الإسلامي، يركز على تطوير المهارات 
                  الإشرافية والتربوية للمعلمات والمشرفات
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Sanad Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-primary/90 text-white relative overflow-hidden">
        <IslamicPattern opacity={0.1} />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <Award className="w-16 h-16 text-accent mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              السند المتصل
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-8" />
            
            <div className="bg-white/10 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-white/20">
              <p className="text-xl md:text-2xl leading-relaxed mb-6">
                جميع الإجازات التي حصلت عليها بالسند المتصل إلى النبي صلى الله عليه وسلم، 
                مما يتيح لي منح الطالبات المتقنات إجازات معتمدة بنفس السند المبارك
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                السند القرآني هو سلسلة الرواة الذين نقلوا القرآن الكريم جيلاً بعد جيل، 
                من الصدر إلى الصدر، من النبي ﷺ إلى يومنا هذا، وهذا من خصائص هذه الأمة المباركة
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

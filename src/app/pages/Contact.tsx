import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  CheckCircle,
  MessageCircle
} from 'lucide-react';
import { IslamicPattern } from '../components/IslamicPattern';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', whatsapp: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '966501234567'; // Replace with actual number
    const message = 'السلام عليكم، أرغب في الاستفسار عن دروس القرآن الكريم';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'البريد الإلكتروني',
      value: 'quran.teacher@example.com',
      link: 'mailto:quran.teacher@example.com',
    },
    {
      icon: Phone,
      title: 'رقم الجوال (واتساب)',
      value: '+966 50 123 4567',
      link: '#',
      onClick: handleWhatsAppClick,
    },
    {
      icon: MapPin,
      title: 'الموقع',
      value: 'الرياض، المملكة العربية السعودية',
      link: '#',
    },
  ];

  const workingHours = [
    { day: 'السبت - الخميس', hours: '9:00 صباحًا - 9:00 مساءً' },
    { day: 'الجمعة', hours: '4:00 مساءً - 9:00 مساءً' },
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
              <MessageCircle className="w-5 h-5 text-accent" />
              <span className="text-accent">تواصل معنا</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              نسعد بتواصلك
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              نحن هنا للإجابة على استفساراتك ومساعدتك في بدء رحلتك مع القرآن الكريم
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-b from-white to-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-primary/10">
                  <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                    أرسلي رسالة
                  </h2>
                  <div className="w-20 h-1 bg-accent mb-8" />

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 mb-2">
                        الاسم الكامل
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                        placeholder="أدخلي اسمك الكامل"
                      />
                    </div>

                    <div>
                      <label htmlFor="whatsapp" className="block text-gray-700 mb-2">
                        رقم الواتساب
                      </label>
                      <input
                        type="tel"
                        id="whatsapp"
                        required
                        value={formData.whatsapp}
                        onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                        placeholder="05XXXXXXXX"
                        dir="ltr"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-gray-700 mb-2">
                        الرسالة
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none bg-white"
                        placeholder="اكتبي رسالتك هنا..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={submitted}
                      className={`w-full py-4 rounded-full font-semibold text-lg transition-all flex items-center justify-center gap-2 ${
                        submitted
                          ? 'bg-green-600 text-white'
                          : 'bg-primary hover:bg-primary/90 text-white hover:shadow-xl'
                      }`}
                    >
                      {submitted ? (
                        <>
                          <CheckCircle className="w-5 h-5" />
                          تم الإرسال بنجاح
                        </>
                      ) : (
                        <>
                          إرسال الرسالة
                          <Send className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </form>

                  {/* WhatsApp Direct Button */}
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <p className="text-gray-600 text-center mb-4">أو تواصلي معنا مباشرة</p>
                    <button
                      onClick={handleWhatsAppClick}
                      className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-full font-semibold text-lg transition-all flex items-center justify-center gap-2 hover:shadow-xl"
                    >
                      <MessageCircle className="w-5 h-5" />
                      تواصل عبر واتساب
                    </button>
                  </div>
                </div>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                {/* Contact Cards */}
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {info.onClick ? (
                        <button
                          onClick={info.onClick}
                          className="w-full bg-white p-6 rounded-2xl shadow-lg border border-primary/10 hover:shadow-xl transition-all group text-right"
                        >
                          <div className="flex items-start gap-4">
                            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all">
                              <info.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-bold text-primary mb-2">{info.title}</h3>
                              <p className="text-gray-700" dir={info.icon === Phone ? 'ltr' : 'rtl'}>
                                {info.value}
                              </p>
                            </div>
                          </div>
                        </button>
                      ) : (
                        <a
                          href={info.link}
                          className="block bg-white p-6 rounded-2xl shadow-lg border border-primary/10 hover:shadow-xl transition-all group"
                        >
                          <div className="flex items-start gap-4">
                            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all">
                              <info.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-bold text-primary mb-2">{info.title}</h3>
                              <p className="text-gray-700">{info.value}</p>
                            </div>
                          </div>
                        </a>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Working Hours */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-primary to-primary/80 p-8 rounded-3xl shadow-xl text-white relative overflow-hidden"
                >
                  <IslamicPattern opacity={0.05} />
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                      <CheckCircle className="w-6 h-6 text-accent" />
                      أوقات العمل
                    </h3>
                    <div className="space-y-4">
                      {workingHours.map((schedule, index) => (
                        <div
                          key={index}
                          className="flex justify-between items-center pb-4 border-b border-white/20 last:border-0 last:pb-0"
                        >
                          <span className="font-semibold">{schedule.day}</span>
                          <span className="text-accent">{schedule.hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Quick Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-secondary to-white p-8 rounded-3xl shadow-lg border border-primary/10"
                >
                  <h3 className="text-xl font-bold text-primary mb-4">
                    معلومات سريعة
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>نستقبل طالبات من جميع المستويات</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>حصص فردية ومجموعات صغيرة</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>تعليم عن بُعد بتقنية عالية الجودة</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>استشارة مجانية لتحديد المستوى</span>
                    </li>
                  </ul>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                الأسئلة الشائعة
              </h2>
              <div className="w-20 h-1 bg-accent mx-auto mb-6" />
            </motion.div>

            <div className="space-y-4">
              {[
                {
                  question: 'كيف يمكنني البدء في الدروس؟',
                  answer: 'يمكنك التواصل معنا عبر نموذج الاتصال أو واتساب، وسنقوم بتحديد موعد لاستشارة مجانية لتقييم مستواك واختيار البرنامج المناسب.',
                },
                {
                  question: 'هل الدروس فردية أم جماعية؟',
                  answer: 'نوفر كلا الخيارين. الدروس الفردية تتيح متابعة شخصية مكثفة، والمجموعات الصغيرة توفر بيئة تفاعلية مع أخوات في نفس المستوى.',
                },
                {
                  question: 'ما هي متطلبات الدراسة عن بُعد؟',
                  answer: 'تحتاجين إلى جهاز كمبيوتر أو جوال مع اتصال إنترنت مستقر، وسماعة ذات جودة جيدة، ومصحف للمتابعة.',
                },
                {
                  question: 'كم تستغرق مدة الحصول على الإجازة؟',
                  answer: 'المدة تعتمد على مستوى الطالبة واجتهادها. عادةً تتراوح بين 6 أشهر إلى سنتين للإجازة في رواية واحدة.',
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-secondary to-white p-6 rounded-2xl shadow-lg border border-primary/10"
                >
                  <h3 className="font-bold text-primary mb-3 flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    {faq.question}
                  </h3>
                  <p className="text-gray-700 leading-relaxed pr-7">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary via-primary to-primary/90 text-white relative overflow-hidden">
        <IslamicPattern opacity={0.1} />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              هل لديك استفسار آخر؟
            </h2>
            <p className="text-lg text-white/90 mb-6">
              لا تترددي في التواصل معنا، نحن هنا لمساعدتك
            </p>
            <button
              onClick={handleWhatsAppClick}
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all hover:shadow-2xl hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              تواصلي معنا الآن
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

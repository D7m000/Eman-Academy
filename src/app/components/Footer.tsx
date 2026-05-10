import { Link } from 'react-router';
import { BookOpen, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white relative overflow-hidden">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">مدرسة القرآن</span>
            </div>
            <p className="text-white/80 leading-relaxed">
              رحلة إتقان القرآن الكريم وعلم القراءات مع خبرة تزيد عن 30 عامًا في التعليم والإقراء
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4 text-accent">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/80 hover:text-accent transition-colors">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-accent transition-colors">
                  عن المعلمة
                </Link>
              </li>
              <li>
                <Link to="/certifications" className="text-white/80 hover:text-accent transition-colors">
                  الإجازات والمؤهلات
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/80 hover:text-accent transition-colors">
                  الخدمات
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-accent transition-colors">
                  تواصل معنا
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold mb-4 text-accent">معلومات التواصل</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-white/80">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>quran.teacher@example.com</span>
              </li>
              <li className="flex items-start gap-2 text-white/80">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span dir="ltr">+966 50 123 4567</span>
              </li>
              <li className="flex items-start gap-2 text-white/80">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>الرياض، المملكة العربية السعودية</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 text-center text-white/60">
          <p>© {currentYear} جميع الحقوق محفوظة - مدرسة القرآن الكريم</p>
        </div>
      </div>
    </footer>
  );
}

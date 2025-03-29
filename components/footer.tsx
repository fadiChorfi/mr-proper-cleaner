import Link from "next/link";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-primary-foreground border-t">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary">مستر بروبر كلين</h3>
            <p className="text-muted-foreground leading-relaxed">
              خدمات تنظيف احترافية للمنازل والشركات. نقدم خدمات تنظيف عالية
              الجودة مع الاهتمام بأدق التفاصيل.
            </p>
            <div className="flex space-x-4 gap-4">
              <Link
                href="https://www.facebook.com/profile.php?id=61569214470319"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </Link>
              <Link
                href="https://www.tiktok.com/@monsieur_propre_clean?_t=ZM-8ux7WK00oIJ&_r=1"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="TikTok"
              >
                <Image
                  src="/tiktok.svg"
                  alt="TikTok"
                  className="h-6 w-6 opacity-55"
                  width={24}
                  height={24}
                  
                />
              </Link>
            </div>
          </div>

          <div className="space-y-4  w-3/4 flex-col md:m-auto">
            <h3 className="text-xl font-bold text-primary">روابط سريعة</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center"
                >
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center"
                >
                  خدماتنا
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center"
                >
                  اتصل بنا
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary">اتصل بنا</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mt-0.5 ml-2 text-primary flex-shrink-0" />
                <span className="text-muted-foreground hover:text-primary transition-colors" dir="ltr">
                  +213 664 10 71 67
                </span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mt-0.5 ml-2 text-primary flex-shrink-0" />
                <a 
                  href="mailto:mr.propclean@gmail.com" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  mr.propclean@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mt-0.5 ml-2 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">
                   حاضنة المؤسسات الناشئة <strong>Innoest company</strong>
                </span>
              </li>
            </ul>
          </div>
        </div>

        
      </div>
    </footer>
  );
}
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-primary-foreground border-t">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">مستر بروبر كلين</h3>
            <p className="text-muted-foreground mb-4">
              خدمات تنظيف احترافية للمنازل والشركات. نقدم خدمات تنظيف عالية
              الجودة مع الاهتمام بأدق التفاصيل.
            </p>
            <div className="flex justify-between w-14">
              <Link
                href="https://www.facebook.com/profile.php?id=61569214470319"
                className="text-muted-foreground hover:text-primary"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">فيسبوك</span>
              </Link>
              <Link
                href="https://www.tiktok.com/@monsieur_propre_clean?_t=ZM-8ux7WK00oIJ&_r=1"
                className="text-muted-foreground hover:text-primary"
              >
                <Image src="/tiktok.svg" alt="Tiktok" className="h-5 w-5 opacity-55" width={5} height={5} />
                <span className="sr-only">تيكتوك</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-primary"
                >
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-muted-foreground hover:text-primary"
                >
                  خدماتنا
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-primary"
                >
                  اتصل بنا
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">اتصل بنا</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="h-5 w-5 ml-2 text-primary" />
                <span className="text-muted-foreground">+213551669458</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 ml-2 text-primary" />
                <span className="text-muted-foreground">
                  info@mrpropreclean.com
                </span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 ml-2 text-primary" />
                <span className="text-muted-foreground">
                  123 شارع التنظيف، المدينة، البلد
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

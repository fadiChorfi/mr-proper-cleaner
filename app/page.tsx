import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check, Home, Building2, Star, ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <section className="relative bg-gradient-to-l from-primary/10 to-primary/5 py-16 md:py-24">
        <div className="container grid gap-8 md:grid-cols-2 md:gap-12 items-center">
          <div className="space-y-6 order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              خدمات تنظيف احترافية لمنزلك ومكتبك
            </h1>
            <p className="text-xl text-muted-foreground">
              نقدم تنظيفًا شاملاً مع الاهتمام بالتفاصيل في كل مرة، مما يجعل
              مساحتك نظيفة ومريحة.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">احجز خدمة تنظيف</Link>
              </Button>
            </div>
          </div>
          <div className="relative  h-[300px] md:h-[400px] rounded-lg overflow-hidden order-1 md:order-2">
            <Image
              src="logo.png"
              alt="خدمة تنظيف احترافية"
              fill
              className="object-contain mr-0 md:mr-6 lg:mr-36"
              priority
            />
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              خدمات التنظيف لدينا
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              نقدم مجموعة واسعة من خدمات التنظيف لتلبية جميع احتياجاتك، من
              التنظيف المنزلي المنتظم إلى الخدمات المتخصصة.
            </p>
          </div>

          <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle>تنظيف المنازل</CardTitle>
                  <Home className="h-10 w-10 text-primary mb-2" />
                </div>
                <CardDescription>تنظيف شامل لمنزلك بالكامل</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary ml-2 shrink-0" />
                    <span>تنظيف عميق لجميع الغرف</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary ml-2 shrink-0" />
                    <span>إزالة الغبار والتنظيف بالمكنسة</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary ml-2 shrink-0" />
                    <span>تعقيم الحمامات والمطابخ</span>
                  </li>
                  <li className="mt-4">
                    <Link
                      href="/services"
                      className="text-primary flex items-center hover:underline"
                    >
                      <ArrowRight className="ml-1 h-4 w-4 rotate-180" />
                      اعرف المزيد
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle className=" w-fit">
                    تنظيف المكاتب
                  </CardTitle>
                  <Building2 className="h-10 w-10 text-primary mb-2" />
                </div>
                <CardDescription>تنظيف احترافي لمساحات العمل</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary ml-2 shrink-0" />
                    <span>تنظيف محطات العمل والمناطق المشتركة</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary ml-2 shrink-0" />
                    <span>صيانة الأرضيات</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary ml-2 shrink-0" />
                    <span>تعقيم دورات المياه</span>
                  </li>
                  <li className="mt-4">
                    <Link
                      href="/services"
                      className="text-primary flex items-center hover:underline"
                    >
                      <ArrowRight className="ml-1 h-4 w-4 rotate-180" />
                      اعرف المزيد
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle>خدمات خاصة</CardTitle>
                  <svg
                    className="h-10 w-10 text-primary mb-2"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 6.5V7.5M12 6.5V7.5M15 6.5V7.5M9 11.5H15M9 16.5H12M4.5 20.5H19.5C20.0523 20.5 20.5 20.0523 20.5 19.5V4.5C20.5 3.94772 20.0523 3.5 19.5 3.5H4.5C3.94772 3.5 3.5 3.94772 3.5 4.5V19.5C3.5 20.0523 3.94772 20.5 4.5 20.5Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <CardDescription>حلول تنظيف متخصصة</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary ml-2 shrink-0" />
                    <span>تنظيف ما بعد البناء</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary ml-2 shrink-0" />
                    <span>تنظيف ما قبل وبعد الانتقال</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary ml-2 shrink-0" />
                    <span>تنظيف عميق للسجاد</span>
                  </li>
                  <li className="mt-4">
                    <Link
                      href="/services"
                      className="text-primary flex items-center hover:underline"
                    >
                      <ArrowRight className="ml-1 h-4 w-4 rotate-180" />
                      اعرف المزيد
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link href="/services">عرض جميع الخدمات</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="bg-primary text-primary-foreground rounded-lg p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                هل أنت مستعد لمساحة نظيفة تمامًا؟
              </h2>
              <p className="text-lg mb-8 text-primary-foreground/90">
                احجز خدمات التنظيف الاحترافية لدينا اليوم واختبر الفرق الذي
                يحدثه التنظيف عالي الجودة.
              </p>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/services">احجز خدمة تنظيف الآن</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

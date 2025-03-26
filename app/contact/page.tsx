"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { ar } from "date-fns/locale"
import { CalendarIcon, CheckCircle2, Mail, MapPin, Phone } from "lucide-react"
import { cn } from "@/lib/utils"

export default function ContactPage() {
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary/5 py-12 md:py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">اتصل بنا</h1>
            <p className="text-xl text-muted-foreground">
              تواصل مع فريقنا لجدولة خدمة تنظيف أو طلب المزيد من المعلومات.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="md:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle>معلومات الاتصال</CardTitle>
                  <CardDescription>تواصل معنا من خلال أي من هذه القنوات</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 ml-3 text-primary" />
                    <div>
                      <h3 className="font-medium">الهاتف</h3>
                      <p className="text-muted-foreground">+123 456 7890</p>
                      <p className="text-muted-foreground">الاثنين-الجمعة: 8 صباحًا - 6 مساءً</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="h-5 w-5 ml-3 text-primary" />
                    <div>
                      <h3 className="font-medium">البريد الإلكتروني</h3>
                      <p className="text-muted-foreground">info@mrpropreclean.com</p>
                      <p className="text-muted-foreground">support@mrpropreclean.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 ml-3 text-primary" />
                    <div>
                      <h3 className="font-medium">العنوان</h3>
                      <p className="text-muted-foreground">123 شارع التنظيف</p>
                      <p className="text-muted-foreground">المدينة، البلد</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Booking Form */}
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>احجز خدمة تنظيف</CardTitle>
                  <CardDescription>املأ النموذج أدناه لجدولة التنظيف الخاص بك</CardDescription>
                </CardHeader>
                <CardContent>
                  {formSubmitted ? (
                    <div className="flex flex-col items-center justify-center py-8 text-center">
                      <CheckCircle2 className="h-16 w-16 text-primary mb-4" />
                      <h3 className="text-2xl font-bold mb-2">تم استلام الحجز!</h3>
                      <p className="text-muted-foreground mb-6">شكرًا لطلب الحجز. سنتصل بك قريبًا لتأكيد موعدك.</p>
                      <Button onClick={() => setFormSubmitted(false)}>حجز خدمة أخرى</Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">الاسم الأول</Label>
                          <Input id="firstName" placeholder="أدخل اسمك الأول" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">اسم العائلة</Label>
                          <Input id="lastName" placeholder="أدخل اسم عائلتك" required />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="email">البريد الإلكتروني</Label>
                          <Input id="email" type="email" placeholder="أدخل بريدك الإلكتروني" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">الهاتف</Label>
                          <Input id="phone" placeholder="أدخل رقم هاتفك" required />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="address">العنوان</Label>
                        <Input id="address" placeholder="أدخل عنوانك" required />
                      </div>

                      <div className="space-y-2">
                        <Label>نوع الخدمة</Label>
                        <RadioGroup defaultValue="residential" className="flex flex-col space-y-1">
                          <div className="flex items-center space-x-2 flex-row-reverse">
                            <Label htmlFor="residential">تنظيف منزلي</Label>
                            <RadioGroupItem value="residential" id="residential" />
                          </div>
                          <div className="flex items-center space-x-2 flex-row-reverse">
                            <Label htmlFor="commercial">تنظيف تجاري</Label>
                            <RadioGroupItem value="commercial" id="commercial" />
                          </div>
                          <div className="flex items-center space-x-2 flex-row-reverse">
                            <Label htmlFor="specialized">تنظيف متخصص</Label>
                            <RadioGroupItem value="specialized" id="specialized" />
                          </div>
                        </RadioGroup>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>التاريخ المفضل</Label>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                variant="outline"
                                className={cn(
                                  "w-full justify-start text-right font-normal",
                                  !date && "text-muted-foreground",
                                )}
                              >
                                <CalendarIcon className="ml-2 h-4 w-4" />
                                {date ? format(date, "PPP", { locale: ar }) : "اختر تاريخًا"}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                              <Calendar mode="single" selected={date} onSelect={setDate} initialFocus locale={ar} />
                            </PopoverContent>
                          </Popover>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="time">الوقت المفضل</Label>
                          <Select>
                            <SelectTrigger id="time">
                              <SelectValue placeholder="اختر وقتًا" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="morning">صباحًا (8 صباحًا - 12 ظهرًا)</SelectItem>
                              <SelectItem value="afternoon">ظهرًا (12 ظهرًا - 4 مساءً)</SelectItem>
                              <SelectItem value="evening">مساءً (4 مساءً - 8 مساءً)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">معلومات إضافية</Label>
                        <Textarea
                          id="message"
                          placeholder="أخبرنا عن أي احتياجات تنظيف محددة أو تعليمات خاصة"
                          className="min-h-[120px]"
                        />
                      </div>

                      <Button type="submit" className="w-full">
                        احجز الآن
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">موقعنا</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              قم بزيارة مكتبنا أو تواصل معنا عبر الإنترنت. نحن هنا للمساعدة في جميع احتياجات التنظيف الخاصة بك.
            </p>
          </div>

          <div className="aspect-video w-full max-w-4xl mx-auto rounded-lg overflow-hidden border-2 border-border">
            <div className="w-full h-full bg-muted flex items-center justify-center">
              <p className="text-muted-foreground">سيتم عرض الخريطة هنا</p>
              {/* In a real implementation, you would embed a Google Map or similar here */}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}


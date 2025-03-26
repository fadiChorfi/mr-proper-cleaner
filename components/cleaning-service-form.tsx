"use client";

import type React from "react";
import { useState } from "react";
import {
  Check,
  ChevronLeft,
  Home,
  Building2,
  Car,
  Droplets,
  Brush,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

export default function CleaningServiceForm() {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    address: "",
    propertyType: "",
    serviceType: "",
    preferredDate: "",
    preferredTime: "",
    additionalInfo: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceSelect = (serviceType: string) => {
    if (Object.keys(selectedItems).length === 0 && !Object.keys(selectedItems) ) return;
    setSelectedService(serviceType);
    setFormData((prev) => ({ ...prev, serviceType }));
    setStep(1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("تم إرسال طلبك بنجاح! سنتصل بك قريبًا.");
    setStep(1);
    setSelectedService(null);
    setFormData({
      fullName: "",
      phone: "",
      address: "",
      propertyType: "",
      serviceType: "",
      preferredDate: "",
      preferredTime: "",
      additionalInfo: "",
    });
  };

  const goBack = () => {
    if (step > 1) {
      setStep(step - 1);
    } else {
      setSelectedService(null);
    }
  };

  const isFormValid = () => {
    if (step === 2) {
      return (
        formData.propertyType !== "" || selectedServiceData?.noPropertyType
      );
    }
    if (step === 3) {
      return (
        formData.fullName !== "" &&
        formData.phone !== "" &&
        formData.address !== ""
      );
    }
    return true;
  };

  const services = [
    {
      id: "surface",
      title: "تنظيف سطحي المنازل",
      icon: <Home className="h-6 w-6" />,
      description: "التنظيف السطحي يشمل:",
      items: ["الأرضية", "إزالة الغبار"],
      price: "حسب نوع المنزل",
    },
    {
      id: "comprehensive",
      title: "تنظيف شامل المنازل",
      icon: <Home className="h-6 w-6" />,
      description: "التنظيف الشامل يشمل:",
      items: [
        "الجدران",
        "النوافذ",
        "الأرضية",
        "إزالة الغبار",
        "المطبخ",
        "الحمام",
        "البهو",
        "الابواب",
        "الاجهزة الكهرو منزلية",
      ],
      price: "حسب نوع المنزل",
      recommended: true,
    },
    {
      id: "deep",
      title: "تنظيف عميق المنازل",
      icon: <Home className="h-6 w-6" />,
      description: "التنظيف العميق يشمل:",
      items: [
        "الجدران",
        "النوافذ",
        "الأرضية",
        "إزالة الغبار",
        "المطبخ",
        "الحمام",
        "البهو",
        "الابواب",
        "الاجهزة الكهرو منزلية",
        "غسل الاوان",
        "غسل و طي الثياب",
      ],
      price: "حسب نوع المنزل",
    },
    {
      id: "office",
      title: "تنظيف المكاتب",
      icon: <Building2 className="h-6 w-6" />,
      description: "المكاتب حسب حجم المكتب 1 متر مربع ب 100 دج",
      items: [],
      price: "100 دج / متر مربع",
      noPropertyType: true,
    },
    {
      id: "construction",
      title: "تنظيف بعد أعمال البناء",
      icon: <Brush className="h-6 w-6" />,
      description: "تنظيف شامل بعد أعمال البناء والترميم",
      items: [],
      price: "حسب نوع المنزل",
    },
    {
      id: "car",
      title: "تنظيف السيارات المتنقل",
      icon: <Car className="h-6 w-6" />,
      description: "السيارة ب: 1000 دج",
      items: [],
      price: "1000 دج",
      noPropertyType: true,
    },
    {
      id: "carpet",
      title: "تنظيف الزرابي",
      icon: <Droplets className="h-6 w-6" />,
      description: "تنظيف عميق للزرابي بأحدث التقنيات",
      items: [],
      price: "حسب نوع الزربية",
    },
    {
      id: "glass",
      title: "تنظيف الزجاج والواجهات",
      icon: <Droplets className="h-6 w-6" />,
      description: "السعر بعد المعاينة",
      items: [],
      price: "بعد المعاينة",
      noPropertyType: true,
    },
  ];

  const propertyTypes = {
    home: [
      { id: "studio", label: "استوديو" },
      { id: "f2", label: "F2 - شقة بغرفة واحدة" },
      { id: "f3", label: "F3 - شقة بغرفتين" },
      { id: "f4", label: "F4 - شقة بثلاث غرف" },
      { id: "f5", label: "F5 - شقة بأربع غرف" },
      { id: "villa", label: "فيلا" },
    ],
    carpet: [
      { id: "small", label: "زربية صغيرة (2×3 متر)" },
      { id: "medium", label: "زربية متوسطة (3×4 متر)" },
      { id: "large", label: "زربية كبيرة (4×6 متر)" },
    ],
  };

  const timeSlots = [
    { id: "morning", label: "صباحاً (8:00 - 12:00)" },
    { id: "afternoon", label: "ظهراً (12:00 - 16:00)" },
    { id: "evening", label: "مساءً (16:00 - 20:00)" },
  ];

  const selectedServiceData = services.find((s) => s.id === selectedService);

  const ServiceBadge = ({ children }: { children: React.ReactNode }) => (
    <div className="">
      {children}
    </div>
  );

  const [selectedItems, setSelectedItems] = useState<Record<string, string[]>>(
    {}
  );
  const toggleItemSelection = (serviceId: string, item: string) => {
    setSelectedItems((prev) => {
      const serviceItems = prev[serviceId] || [];
      const isSelected = serviceItems.includes(item);

      const updatedItems = isSelected
        ? serviceItems.filter((i) => i !== item)
        : [...serviceItems, item];

      return {
        ...prev,
        [serviceId]: updatedItems,
      };
    });
  };

  const ChevronRight = (props: any) => <ChevronLeft {...props} />;

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">خدمات التنظيف</h1>

      {!selectedService ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card
              key={service.id}
              className={cn(
                "transition-all hover:shadow-md cursor-pointer border-2",
                
                  
                   "border-border hover:border-primary/50"
              )}
              onClick={() => handleServiceSelect(service.id)}
            >
              <CardHeader className="pb-2 relative">
                
                <div className="flex items-center justify-between">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-right mb-2">{service.description}</p>
                {service.items.length > 0 && (
                  <div className="flex flex-wrap justify-end gap-1 mb-3">
                    {service.items.length > 0 && (
                      <div className="flex flex-wrap justify-end gap-2 mb-3">
                        {service.items.map((item: string, index: number) => {
                          const isSelected =
                            selectedItems[service.id]?.includes(item);

                          return (
                            <button
                              key={index}
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation(); // prevent triggering card click
                                toggleItemSelection(service.id, item);
                              }}
                              className={cn(
                                "inline-flex items-center text-sm px-3 py-1 rounded-md border transition",
                                isSelected
                                  ? "bg-primary text-white border-primary"
                                  : "bg-muted text-muted-foreground border-border hover:border-primary"
                              )}
                            >
                              {item}
                              <span className="ml-2 text-xs">
                                {isSelected ? "✓" : "+"}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                )}
                <div className="flex justify-between items-center mt-4">
                  <div className="text-sm font-medium">
                    السعر: {service.price}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="p-2 rounded-full bg-primary/10 text-primary ml-2">
                  {selectedServiceData?.icon}
                </div>
                <CardTitle>{selectedServiceData?.title}</CardTitle>
              </div>
              <Button variant="ghost" size="sm" onClick={goBack}>
                <ChevronRight className="h-4 w-4 ml-1" />
                رجوع
              </Button>
            </div>
            <div className="flex justify-center mt-4">
              <div className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    step >= 1
                      ? "bg-primary text-white"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  1
                </div>
                <div
                  className={`w-16 h-1 ${
                    step >= 2 ? "bg-primary" : "bg-muted"
                  }`}
                ></div>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    step >= 2
                      ? "bg-primary text-white"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  2
                </div>
                <div
                  className={`w-16 h-1 ${
                    step >= 3 ? "bg-primary" : "bg-muted"
                  }`}
                ></div>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    step >= 3
                      ? "bg-primary text-white"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  3
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {step === 1 && (
              <div className="text-center py-4">
                <h3 className="text-lg font-medium mb-4">اختر نوع الخدمة</h3>
                <p className="mb-6">{selectedServiceData?.description}</p>
                {selectedItems[selectedService]?.length > 0 && (
                  <div className="bg-muted/30 p-4 rounded-lg mb-6">
                    <h4 className="font-medium mb-2">الخدمة تشمل:</h4>
                    <ul className="space-y-1 text-right">
                      {selectedItems[selectedService].map((item, index) => (
                        <li
                          key={index}
                          className="flex items-center justify-end"
                        >
                          <span>{item}</span>
                          <Check className="h-4 w-4 ml-2 text-primary" />
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <Button className="w-full" onClick={() => setStep(2)}>
                  متابعة
                </Button>
              </div>
            )}

            {step === 2 && (
              <div className="py-4">
                <h3 className="text-lg font-medium mb-4 text-center">
                  اختر نوع العقار
                </h3>

                {!selectedServiceData?.noPropertyType ? (
                  <div className="space-y-4">
                    <div className="grid gap-2">
                      <Label htmlFor="propertyType">نوع العقار</Label>
                      <Select
                        value={formData.propertyType}
                        onValueChange={(value: any) =>
                          setFormData({ ...formData, propertyType: value })
                        }
                      >
                        <SelectTrigger id="propertyType" className="text-right">
                          <SelectValue
                            placeholder={
                              selectedService === "carpet"
                                ? "اختر نوع الزربية"
                                : "اختر نوع المنزل"
                            }
                          />
                        </SelectTrigger>
                        <SelectContent>
                          {(selectedService === "carpet"
                            ? propertyTypes.carpet
                            : propertyTypes.home
                          ).map((type) => (
                            <SelectItem key={type.id} value={type.id}>
                              {type.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="mt-6">
                      <Button
                        className="w-full"
                        onClick={() => setStep(3)}
                        disabled={!isFormValid()}
                      >
                        متابعة
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-4">
                    <p className="mb-6">
                      {selectedService === "office"
                        ? "سيتم حساب السعر بناءً على مساحة المكتب (100 دج لكل متر مربع)"
                        : selectedService === "car"
                        ? "سعر تنظيف السيارة: 1000 دج"
                        : "سيتم تحديد السعر بعد المعاينة"}
                    </p>
                    <Button className="w-full" onClick={() => setStep(3)}>
                      متابعة
                    </Button>
                  </div>
                )}
              </div>
            )}

            {step === 3 && (
              <form onSubmit={handleSubmit} className="py-4 space-y-4">
                <h3 className="text-lg font-medium mb-4 text-center">
                  أدخل بيانات الاتصال
                </h3>

                <div className="grid gap-3">
                  <div className="grid gap-2">
                    <Label htmlFor="fullName">الاسم الكامل</Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="أدخل الاسم الكامل"
                      className="text-right"
                      required
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="phone">رقم الهاتف</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="أدخل رقم الهاتف"
                      className="text-right"
                      required
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="address">العنوان</Label>
                    <Input
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="أدخل العنوان بالتفصيل"
                      className="text-right"
                      required
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="preferredDate">التاريخ المفضل</Label>
                    <Input
                      id="preferredDate"
                      name="preferredDate"
                      type="date"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      className="text-right"
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="preferredTime">الوقت المفضل</Label>
                    <Select
                      value={formData.preferredTime}
                      onValueChange={(value: any) =>
                        setFormData({ ...formData, preferredTime: value })
                      }
                    >
                      <SelectTrigger id="preferredTime" className="text-right">
                        <SelectValue placeholder="اختر الوقت المناسب" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((slot) => (
                          <SelectItem key={slot.id} value={slot.id}>
                            {slot.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="additionalInfo">
                      ملاحظات إضافية (اختياري)
                    </Label>
                    <Textarea
                      id="additionalInfo"
                      name="additionalInfo"
                      value={formData.additionalInfo}
                      onChange={handleInputChange}
                      placeholder="أي معلومات إضافية تود إضافتها"
                      className="text-right min-h-[100px]"
                    />
                  </div>
                </div>

                <div className="pt-4">
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={!isFormValid()}
                  >
                    تأكيد الطلب
                  </Button>
                </div>
              </form>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}

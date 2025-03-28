"use client";
import type React from "react";
import { useState, useEffect } from "react";
import {
  ChevronLeft,
  Home,
  Building2,
  Car,
  Droplets,
  Brush,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export default function CleaningServiceForm() {
  const pricingData = {
    surface: {
      f2: 2500,
      f3: 3000,
      f4: 3500,
      f5: 4000,
      f6: 4500,
      f7: 5000,
    },
    comprehensive: {
      f2: 12000,
      f3: 15000,
      f4: 18000,
      f5: 21000,
      f6: 25000,
      f7: 30000,
    },
    deep: {
      f2: 15000,
      f3: 18000,
      f4: 21000,
      f5: 25000,
      f6: 30000,
      f7: 33000,
    },
    construction: {
      f2: 12000,
      f3: 15000,
      f4: 18000,
      f5: 21000,
      f6: 25000,
      f7: 30000,
    },
    carpet: {
      small: 800,
      medium: 1000,
      large: 1200,
    },
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

  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [step, setStep] = useState(1);
  const [selectedItems, setSelectedItems] = useState<Record<string, string[]>>(
    () => {
      const initialSelections: Record<string, string[]> = {};
      services.forEach((service) => {
        if (service.items.length > 0) {
          initialSelections[service.id] = [...service.items];
        }
      });
      return initialSelections;
    }
  );
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    address: "",
    propertyType: "",
    serviceType: "",
    preferredDate: "",
    preferredTime: "",
    additionalInfo: "",
    selectedItems: [] as string[],
    price: 0,
  });

  const propertyTypes = {
    home: [
      { id: "studio", label: "استوديو" },
      { id: "f2", label: "F2 " },
      { id: "f3", label: "F3" },
      { id: "f4", label: "F4" },
      { id: "f5", label: "F5" },
      { id: "f6", label: "F6" },
      { id: "f7", label: "F7" },
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

  // Calculate price based on service and property type
  const calculatePrice = (serviceType: string, propertyType: string) => {
    if (!serviceType || !propertyType) return 0;

    if (serviceType === "office") return 100; // Per square meter
    if (serviceType === "car") return 1000;
    if (serviceType === "glass") return 0; // Price after inspection

    if (
      serviceType === "carpet" &&
      pricingData.carpet[propertyType as keyof typeof pricingData.carpet]
    ) {
      return pricingData.carpet[
        propertyType as keyof typeof pricingData.carpet
      ];
    }

    if (
      pricingData[serviceType as keyof typeof pricingData] &&
      pricingData[serviceType as keyof typeof pricingData][
        propertyType as keyof typeof pricingData.surface
      ]
    ) {
      return pricingData[serviceType as keyof typeof pricingData][
        propertyType as keyof typeof pricingData.surface
      ];
    }

    return 0;
  };

  // Update price when service or property type changes
  useEffect(() => {
    if (formData.serviceType && formData.propertyType) {
      const price = calculatePrice(formData.serviceType, formData.propertyType);
      setFormData((prev) => ({ ...prev, price }));
    }
  }, [formData.serviceType, formData.propertyType]);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceSelect = (serviceType: string) => {
    setSelectedService(serviceType);
    setFormData((prev) => ({ ...prev, serviceType }));

    setSelectedItems((prev) => {
      if (
        !prev[serviceType] &&
        services.find((s) => s.id === serviceType)?.items.length > 0
      ) {
        return {
          ...prev,
          [serviceType]: [
            ...(services.find((s) => s.id === serviceType)?.items || []),
          ],
        };
      }
      return prev;
    });

    setStep(1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const content = await res.json();
      alert("Data submitted successfully!");

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
        selectedItems: [],
        price: 0,
      });
    } catch (error) {
      alert("Failed to submit. Please try again.");
    }
  };

  const goBack = () => {
    if (step > 1) {
      setStep(step - 1);
    } else {
      setSelectedService(null);
    }
  };

  const toggleItemSelection = (serviceId: string, item: string) => {
    setSelectedItems((prev) => {
      const serviceItems = prev[serviceId] || [];
      const isSelected = serviceItems.includes(item);

      const updatedItems = isSelected
        ? serviceItems.filter((i) => i !== item)
        : [...serviceItems, item];

      setFormData((prevFormData) => ({
        ...prevFormData,
        selectedItems: updatedItems,
      }));

      return {
        ...prev,
        [serviceId]: updatedItems,
      };
    });
  };

  const selectedServiceData = services.find((s) => s.id === selectedService);

  const isFormValid = () => {
    if (step === 1) {
      const currentServiceData = services.find((s) => s.id === selectedService);
      if (currentServiceData && currentServiceData.items.length > 0) {
        return (
          selectedItems[selectedService] &&
          selectedItems[selectedService].length > 0
        );
      }
      return true;
    }

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

  const proceedToNextStep = () => {
    const currentServiceData = services.find((s) => s.id === selectedService);

    if (currentServiceData && currentServiceData.items.length > 0) {
      if (
        !selectedItems[selectedService] ||
        selectedItems[selectedService].length === 0
      ) {
        alert("يرجى اختيار عنصر واحد على الأقل");
        return;
      }

      setFormData((prev) => ({
        ...prev,
        selectedItems: selectedItems[selectedService] || [],
      }));
    }

    setStep(2);
  };

  // Format price to display with currency
  const formatPrice = (price: number) => {
    return `${price} دج`;
  };

  // Get price display for service card
  const getServicePriceDisplay = (service: any) => {
    if (service.id === "office") return "100 دج / متر مربع";
    if (service.id === "car") return "1000 دج";
    if (service.id === "glass") return "بعد المعاينة";

    if (service.id === "carpet") {
      return `${pricingData.carpet.small} - ${pricingData.carpet.large} دج`;
    }

    return `${pricingData[service.id as keyof typeof pricingData]?.f2 || 0} - ${
      pricingData[service.id as keyof typeof pricingData]?.f7 || 0
    } دج`;
  };

  const ChevronRight = (props: any) => <ChevronLeft {...props} />;

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">خدمات التنظيف</h1>

      {!selectedService ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {services.map((service) => (
            <Card
              key={service.id}
              className={cn(
                "transition-all hover:shadow-md cursor-pointer border-2",
                service.id === "car"
                  ? "border-border bg-white hover:border-border opacity-50 grayscale cursor-not-allowed"
                  : "border-border hover:border-primary/50"
              )}
              onClick={
                service.id !== "car"
                  ? () => handleServiceSelect(service.id)
                  : undefined
              }
            >
              <CardHeader className="pb-2 relative">
                <div className="flex items-center justify-between">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </div>
                {service.id === "car" && (
                  <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-md">
                    Coming Soon
                  </span>
                )}
              </CardHeader>
              <CardContent>
                <p className="text-right mb-2">{service.description}</p>
                {service.items.length > 0 && (
                  <div className="flex flex-wrap justify-end gap-1 mb-3">
                    <div className="flex flex-wrap justify-end gap-2 mb-3 w-full">
                      <p className="w-full text-right font-medium mb-2">
                        الخدمة تشمل:
                      </p>
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
                            disabled={service.id === "car"} // Disable interactions for the car card
                            className={cn(
                              "inline-flex items-center text-sm px-3 py-1 rounded-md border transition",
                              service.id === "car"
                                ? "bg-gray-300 text-gray-500 border-gray-300 cursor-not-allowed"
                                : isSelected
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
                  </div>
                )}
                <div className="flex justify-between items-center mt-4">
                  <div className="text-sm font-medium">
                    السعر:{" "}
                    {service.id === "car"
                      ? "غير متاح"
                      : getServicePriceDisplay(service)}
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
                <p className="mb-6">{selectedServiceData?.description}</p>
                {selectedServiceData?.items.length > 0 && (
                  <div className="bg-muted/30 p-4 rounded-lg mb-6">
                    <h4 className="font-medium mb-2">اختر العناصر المطلوبة:</h4>
                    <div className="flex flex-wrap justify-end gap-2 mb-3">
                      {selectedServiceData.items.map(
                        (item: string, index: number) => {
                          const isSelected =
                            selectedItems[selectedService]?.includes(item);

                          return (
                            <button
                              key={index}
                              type="button"
                              onClick={() =>
                                toggleItemSelection(selectedService, item)
                              }
                              className={cn(
                                "inline-flex items-center text-sm px-3 py-1 rounded-md border transition",
                                isSelected
                                  ? "bg-primary text-white border-primary"
                                  : "bg-muted text-muted-foreground border-border hover:border-primary"
                              )}
                            >
                              {item}
                              <span className="ml-2 text-xs">
                                {isSelected ? "✓" : "-"}
                              </span>
                            </button>
                          );
                        }
                      )}
                    </div>
                    <div className="text-sm text-right">
                      <p>
                        العناصر المختارة:{" "}
                        {selectedItems[selectedService]?.length || 0} من{" "}
                        {selectedServiceData.items.length}
                      </p>
                    </div>
                    <div className="flex justify-end gap-2 mt-2">
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          setSelectedItems((prev) => ({
                            ...prev,
                            [selectedService]: [],
                          }));
                        }}
                      >
                        إلغاء تحديد الكل
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          setSelectedItems((prev) => ({
                            ...prev,
                            [selectedService]: [...selectedServiceData.items],
                          }));
                        }}
                      >
                        تحديد الكل
                      </Button>
                    </div>
                  </div>
                )}
                <Button
                  className="w-full"
                  onClick={proceedToNextStep}
                  disabled={
                    selectedServiceData &&
                    selectedServiceData.items.length > 0 &&
                    (!selectedItems[selectedService] ||
                      selectedItems[selectedService].length === 0)
                  }
                >
                  متابعة
                </Button>
              </div>
            )}

            {step === 2 && (
              <div className="py-4">
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
                              {type.label} -{" "}
                              {formatPrice(
                                calculatePrice(selectedService, type.id)
                              )}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {formData.propertyType && (
                      <div className="bg-muted/30 p-4 rounded-lg text-center">
                        <h4 className="font-medium mb-2">السعر المقدر:</h4>
                        <p className="text-2xl font-bold text-primary">
                          {formatPrice(formData.price)}
                        </p>
                      </div>
                    )}

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
                    {selectedService === "office" ||
                    selectedService === "car" ? (
                      <div className="bg-muted/30 p-4 rounded-lg text-center mb-6">
                        <h4 className="font-medium mb-2">السعر المقدر:</h4>
                        <p className="text-2xl font-bold text-primary">
                          {selectedService === "office"
                            ? "100 دج / متر مربع"
                            : "1000 دج"}
                        </p>
                      </div>
                    ) : null}
                    <Button className="w-full" onClick={() => setStep(3)}>
                      متابعة
                    </Button>
                  </div>
                )}
              </div>
            )}

            {step === 3 && (
              <form onSubmit={handleSubmit} className="py-4 space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="fullName">الاسم الكامل</Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="أدخل اسمك الكامل"
                    required
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="phone">رقم الهاتف</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="أدخل رقم هاتفك"
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
                    placeholder="أدخل عنوانك"
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
                    required
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="preferredTime">الوقت المفضل</Label>
                  <Select
                    value={formData.preferredTime}
                    onValueChange={(value) =>
                      setFormData({ ...formData, preferredTime: value })
                    }
                  >
                    <SelectTrigger id="preferredTime" className="text-right">
                      <SelectValue placeholder="اختر الوقت المفضل" />
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
                  <Label htmlFor="additionalInfo">معلومات إضافية</Label>
                  <Textarea
                    id="additionalInfo"
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleInputChange}
                    placeholder="أي معلومات إضافية"
                  />
                </div>

                {formData.price > 0 && (
                  <div className="bg-muted/30 p-4 rounded-lg text-center">
                    <h4 className="font-medium mb-2">السعر النهائي:</h4>
                    <p className="text-2xl font-bold text-primary">
                      {formatPrice(formData.price)}
                    </p>
                  </div>
                )}

                <Button type="submit" className="w-full">
                  تأكيد الحجز
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}

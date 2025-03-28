export  const services = [
    {
      id: "surface",
      title: "تنظيف سطحي المنازل",
      description: "التنظيف السطحي يشمل:",
      items: ["الأرضية", "إزالة الغبار"],
      price: "حسب نوع المنزل",
    },
    {
      id: "comprehensive",
      title: "تنظيف شامل المنازل",
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
      description: "المكاتب حسب حجم المكتب 1 متر مربع ب 100 دج",
      items: [],
      price: "100 دج / متر مربع",
      noPropertyType: true,
    },
    {
      id: "construction",
      title: "تنظيف بعد أعمال البناء",
      description: "تنظيف شامل بعد أعمال البناء والترميم",
      items: [],
      price: "حسب نوع المنزل",
    },
    {
      id: "car",
      title: "تنظيف السيارات المتنقل",
      description: "السيارة ب: 1000 دج",
      items: [],
      price: "1000 دج",
      noPropertyType: true,
    },
    {
      id: "carpet",
      title: "تنظيف الزرابي",
      description: "تنظيف عميق للزرابي بأحدث التقنيات",
      items: [],
      price: "حسب نوع الزربية",
    },
    {
      id: "glass",
      title: "تنظيف الزجاج والواجهات",
      description: "السعر بعد المعاينة",
      items: [],
      price: "بعد المعاينة",
      noPropertyType: true,
    },
  ]




 export  const propertyTypes = {
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
  }
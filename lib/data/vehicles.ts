export type LocaleCode = "ar" | "en" | "tr" | "es" | "de" | "ru";

export interface LocalizedString {
  ar: string;
  en: string;
  tr: string;
  es: string;
  de: string;
  ru: string;
}

export interface VehicleSpecs {
  engine: LocalizedString;
  seats: LocalizedString;
  insurance: LocalizedString;
  transmission?: LocalizedString;
  doors?: LocalizedString;
  luggage?: LocalizedString;
}

export interface Vehicle {
  id: string;
  slug: string;
  category: "sedan" | "suv" | "luxury" | "sports";
  images: string[];
  name: LocalizedString;
  tagline: LocalizedString;
  description?: LocalizedString;
  specs: VehicleSpecs;
  pricePerDay?: {
    amount: number;
    currency: string;
  };
  availability: "available" | "unavailable";
  pickupTimeMinutes: number;
  featured: boolean;
  order: number;
  whatsappMessageTemplate: LocalizedString;
}

export const PHONE_NUMBER = "963912345678";

export const VEHICLES: Vehicle[] = [
  {
    id: "mercedes-e-class",
    slug: "mercedes-e-class",
    category: "luxury",
    images: [
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80"
    ],
    name: {
      ar: "مرسيدس الفئة E",
      en: "Mercedes E-Class",
      tr: "Mercedes E-Serisi",
      es: "Mercedes Clase E",
      de: "Mercedes E-Klasse",
      ru: "Mercedes E-Класс"
    },
    tagline: {
      ar: "راحة وفخامة استثنائية في كل رحلة",
      en: "Unmatched luxury and comfort for every journey",
      tr: "Her yolculukta üstün konfor ve prestij",
      es: "Confort y elegancia sin igual en cada viaje",
      de: "Exzellenter Komfort und Eleganz auf jeder Fahrt",
      ru: "Безупречный комфорт и престиж в каждой поездке"
    },
    description: {
      ar: "تجسد مرسيدس الفئة E أقصى درجات الفخامة الألمانية والتكنولوجيا المتقدمة. مقصورة جلدية فاخرة، نظام قيادة سلسن وعزل صوتي كامل لضمان أعلى مستويات الهدوء والراحة.",
      en: "The Mercedes E-Class embodies German luxury engineering and cutting-edge tech. Premium leather interior, whisper-quiet cabin, and smooth ride dynamics.",
      tr: "Mercedes E-Serisi, Alman lüks mühendisliğini ve yenilikçi teknolojiyi bir araya getiriyor. Deri döşeme, sessiz kabin ve konforlu sürüş.",
      es: "El Mercedes Clase E representa la cúspide del lujo alemán y la tecnología avanzada. Interior en cuero de alta calidad y máxima insonorización.",
      de: "Die Mercedes E-Klasse steht für deutsche Ingenieurskunst und Spitzenkomfort. Edelste Lederausstattung und perfekte Geräuschdämmung.",
      ru: "Mercedes E-Класс воплощает немецкую роскошь и передовые технологии. Премиальный кожаный салон и идеальная шумоизоляция."
    },
    specs: {
      engine: {
        ar: "2.0L تيربو",
        en: "2.0L Turbo",
        tr: "2.0L Turbo",
        es: "2.0L Turbo",
        de: "2.0L Turbo",
        ru: "2.0L Турбо"
      },
      seats: {
        ar: "5 ركاب",
        en: "5 Seats",
        tr: "5 Koltuk",
        es: "5 Plazas",
        de: "5 Sitze",
        ru: "5 Мест"
      },
      insurance: {
        ar: "تأمين شامل",
        en: "Full Insurance",
        tr: "Tam Sigorta",
        es: "Seguro Total",
        de: "Vollkasko",
        ru: "Полная страховка"
      },
      transmission: {
        ar: "أوتوماتيك 9 سرعات",
        en: "9-Speed Auto",
        tr: "9 İleri Otomatik",
        es: "Automático 9 vel.",
        de: "9-Gang-Automatik",
        ru: "9-ступ. АКПП"
      },
      doors: {
        ar: "4 أبواب",
        en: "4 Doors",
        tr: "4 Kapı",
        es: "4 Puertas",
        de: "4 Türen",
        ru: "4 Двери"
      },
      luggage: {
        ar: "3 حقائب كبيرة",
        en: "3 Large Bags",
        tr: "3 Büyük Valiz",
        es: "3 Maletas Grandes",
        de: "3 Große Koffer",
        ru: "3 Больших чемодана"
      }
    },
    availability: "available",
    pickupTimeMinutes: 20,
    featured: true,
    order: 1,
    whatsappMessageTemplate: {
      ar: "مرحباً إنفينيتي كارز، أرغب بحجز سيارة {vehicleName}.",
      en: "Hello Infinity Cars, I would like to book the {vehicleName}.",
      tr: "Merhaba Infinity Cars, {vehicleName} aracını kiralamak istiyorum.",
      es: "Hola Infinity Cars, me gustaría reservar el {vehicleName}.",
      de: "Hallo Infinity Cars, ich möchte den {vehicleName} buchen.",
      ru: "Здравствуйте, Infinity Cars! Я хочу забронировать {vehicleName}."
    }
  },
  {
    id: "range-rover-vogue",
    slug: "range-rover-vogue",
    category: "suv",
    images: [
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80"
    ],
    name: {
      ar: "رينج روفر فوج",
      en: "Range Rover Vogue",
      tr: "Range Rover Vogue",
      es: "Range Rover Vogue",
      de: "Range Rover Vogue",
      ru: "Range Rover Vogue"
    },
    tagline: {
      ar: "قوة الدفع الرباعي مع أعلى معايير الفخامة",
      en: "Commanding luxury SUV with supreme all-terrain power",
      tr: "Üstün arazi gücü ve prestijli SUV konforu",
      es: "Potencia 4x4 con los más altos estándares de lujo",
      de: "Souveräner Luxus-SUV mit Allrad-Performance",
      ru: "Мощный полный привод и высочайший уровень роскоши"
    },
    description: {
      ar: "تعد رينج روفر فوج الرمز الخالد للسيارات الرياضية متعددة الاستخدامات الفاخرة. نظام دفع رباعي ذكي، تصميم مهيب ومقصورة ملكية تلائم جميع رحلاتك.",
      en: "The iconic Range Rover Vogue delivers royal road presence, intelligent AWD performance, and handcrafted interior elegance.",
      tr: "Range Rover Vogue, lüks SUV segmentinin ikonik simgesidir. Akıllı 4x4 sistemi ve prestijli iç tasarımıyla benzersiz bir sürüş sunar.",
      es: "El Range Rover Vogue es el icono indiscutible de los SUV de gran lujo. Sistema 4x4 inteligente e interior de acabado artesanal.",
      de: "Der Range Rover Vogue ist die ultimative Definition eines Luxus-SUV. Intelligenter Allradantrieb und edelste Innenraumverarbeitung.",
      ru: "Range Rover Vogue — легенда среди роскошных внедорожников. Интеллектуальный полный привод и королевский салон."
    },
    specs: {
      engine: {
        ar: "3.0L تيربو مزدوج",
        en: "3.0L Twin Turbo",
        tr: "3.0L Çift Turbo",
        es: "3.0L Biturbo",
        de: "3.0L Twin-Turbo",
        ru: "3.0L Твин-Турбо"
      },
      seats: {
        ar: "5 ركاب",
        en: "5 Seats",
        tr: "5 Koltuk",
        es: "5 Plazas",
        de: "5 Sitze",
        ru: "5 Мест"
      },
      insurance: {
        ar: "تأمين شامل",
        en: "Full Insurance",
        tr: "Tam Sigorta",
        es: "Seguro Total",
        de: "Vollkasko",
        ru: "Полная страховка"
      },
      transmission: {
        ar: "أوتوماتيك 8 سرعات",
        en: "8-Speed Auto",
        tr: "8 İleri Otomatik",
        es: "Automático 8 vel.",
        de: "8-Gang-Automatik",
        ru: "8-ступ. АКПП"
      },
      doors: {
        ar: "5 أبواب",
        en: "5 Doors",
        tr: "5 Kapı",
        es: "5 Puertas",
        de: "5 Türen",
        ru: "5 Дверей"
      },
      luggage: {
        ar: "4 حقائب كبيرة",
        en: "4 Large Bags",
        tr: "4 Büyük Valiz",
        es: "4 Maletas Grandes",
        de: "4 Große Koffer",
        ru: "4 Больших чемодана"
      }
    },
    availability: "available",
    pickupTimeMinutes: 20,
    featured: true,
    order: 2,
    whatsappMessageTemplate: {
      ar: "مرحباً إنفينيتي كارز، أرغب بحجز سيارة {vehicleName}.",
      en: "Hello Infinity Cars, I would like to book the {vehicleName}.",
      tr: "Merhaba Infinity Cars, {vehicleName} aracını kiralamak istiyorum.",
      es: "Hola Infinity Cars, me gustaría reservar el {vehicleName}.",
      de: "Hallo Infinity Cars, ich möchte den {vehicleName} buchen.",
      ru: "Здравствуйте, Infinity Cars! Я хочу забронировать {vehicleName}."
    }
  },
  {
    id: "bmw-7-series",
    slug: "bmw-7-series",
    category: "luxury",
    images: [
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=80"
    ],
    name: {
      ar: "بي إم دبليو الفئة السابعة",
      en: "BMW 7 Series",
      tr: "BMW 7 Serisi",
      es: "BMW Serie 7",
      de: "BMW 7er",
      ru: "BMW 7 Серии"
    },
    tagline: {
      ar: "قمة الفخامة والأداء الديناميكي المتطور",
      en: "The pinnacle of executive luxury and dynamic performance",
      tr: "Lüks ve dinamik performansın zirvesi",
      es: "La cumbre del lujo ejecutivo y el rendimiento dinámico",
      de: "Die Spitze von Luxus und dynamischer Performance",
      ru: "Флагман представительского класса и динамики"
    },
    description: {
      ar: "تجمع بي إم دبليو الفئة السابعة بين الأناقة المطلقة والقيادة الديناميكية. ممتازة لرجل الأعمال والرحلات الرسمية مع مقاعد مساج وشاشات ترفيه خلفية.",
      en: "The BMW 7 Series sets the standard for executive transport. Executive rear seating, massage functions, and effortless performance.",
      tr: "BMW 7 Serisi, üst düzey yönetici konforunun standartlarını belirler. Masajlı koltuklar ve üstün sürüş dinamiği.",
      es: "El BMW Serie 7 establece el estándar de transporte ejecutivo. Asientos con masaje y dinámica de conducción impecable.",
      de: "Der BMW 7er setzt Maßstäbe in der Oberklasse. Erstklassiges Fond-Ambiente, Massagefunktionen und souveräner Antrieb.",
      ru: "BMW 7 Серии — эталон премиального седана. Сиденья с функцией массажа и безупречная динамика."
    },
    specs: {
      engine: {
        ar: "3.0L تيربو 6 سلندر",
        en: "3.0L Turbo I6",
        tr: "3.0L Turbo 6 Silindir",
        es: "3.0L Turbo 6 Cili.",
        de: "3.0L R6-Turbo",
        ru: "3.0L Турбо 6 Цил."
      },
      seats: {
        ar: "5 ركاب",
        en: "5 Seats",
        tr: "5 Koltuk",
        es: "5 Plazas",
        de: "5 Sitze",
        ru: "5 Мест"
      },
      insurance: {
        ar: "تأمين شامل",
        en: "Full Insurance",
        tr: "Tam Sigorta",
        es: "Seguro Total",
        de: "Vollkasko",
        ru: "Полная страховка"
      },
      transmission: {
        ar: "أوتوماتيك 8 سرعات",
        en: "8-Speed Auto",
        tr: "8 İleri Otomatik",
        es: "Automático 8 vel.",
        de: "8-Gang-Automatik",
        ru: "8-ступ. АКПП"
      },
      doors: {
        ar: "4 أبواب",
        en: "4 Doors",
        tr: "4 Kapı",
        es: "4 Puertas",
        de: "4 Türen",
        ru: "4 Двери"
      },
      luggage: {
        ar: "3 حقائب كبيرة",
        en: "3 Large Bags",
        tr: "3 Büyük Valiz",
        es: "3 Maletas Grandes",
        de: "3 Große Koffer",
        ru: "3 Больших чемодана"
      }
    },
    availability: "available",
    pickupTimeMinutes: 20,
    featured: true,
    order: 3,
    whatsappMessageTemplate: {
      ar: "مرحباً إنفينيتي كارز، أرغب بحجز سيارة {vehicleName}.",
      en: "Hello Infinity Cars, I would like to book the {vehicleName}.",
      tr: "Merhaba Infinity Cars, {vehicleName} aracını kiralamak istiyorum.",
      es: "Hola Infinity Cars, me gustaría reservar el {vehicleName}.",
      de: "Hallo Infinity Cars, ich möchte den {vehicleName} buchen.",
      ru: "Здравствуйте, Infinity Cars! Я хочу забронировать {vehicleName}."
    }
  },
  {
    id: "porsche-cayenne",
    slug: "porsche-cayenne",
    category: "sports",
    images: [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80"
    ],
    name: {
      ar: "بورشه كايين",
      en: "Porsche Cayenne",
      tr: "Porsche Cayenne",
      es: "Porsche Cayenne",
      de: "Porsche Cayenne",
      ru: "Porsche Cayenne"
    },
    tagline: {
      ar: "الأداء الرياضي الخالص مع أقصى مستويات الراحة",
      en: "Pure sports car DNA engineered into a luxury SUV",
      tr: "Lüks SUV konforunda saf spor otomobil ruhu",
      es: "ADN de coche deportivo en un SUV de gran lujo",
      de: "Echter Sportwagen-Charakter im Luxus-SUV-Gewand",
      ru: "Спортивный характер в кузове роскошного кроссовера"
    },
    description: {
      ar: "تعتبر بورشه كايين الاختيار المثالي لعشاق القيادة الرياضية المتميزة مع الحفاظ على المساحة والرحابة للركاب. تسارع استثنائي وثبات عالي.",
      en: "The Porsche Cayenne blends exhilarating sports acceleration with spacious everyday luxury.",
      tr: "Porsche Cayenne, heyecan verici performans ile geniş aile konforunu harmanlar.",
      es: "El Porsche Cayenne combina la aceleración deportiva con el confort espacioso para el día a día.",
      de: "Der Porsche Cayenne kombiniert mitreißende Fahrleistungen mit vollwertigem Alltags-Luxus.",
      ru: "Porsche Cayenne объединяет динамику спорткара и комфорт просторного внедорожника."
    },
    specs: {
      engine: {
        ar: "3.0L تيربو V6",
        en: "3.0L Turbo V6",
        tr: "3.0L Turbo V6",
        es: "3.0L Turbo V6",
        de: "3.0L V6-Turbo",
        ru: "3.0L Турбо V6"
      },
      seats: {
        ar: "5 ركاب",
        en: "5 Seats",
        tr: "5 Koltuk",
        es: "5 Plazas",
        de: "5 Sitze",
        ru: "5 Мест"
      },
      insurance: {
        ar: "تأمين شامل",
        en: "Full Insurance",
        tr: "Tam Sigorta",
        es: "Seguro Total",
        de: "Vollkasko",
        ru: "Полная страховка"
      },
      transmission: {
        ar: "أوتوماتيك PDK",
        en: "PDK Automatic",
        tr: "PDK Otomatik",
        es: "PDK Automático",
        de: "PDK-Automatik",
        ru: "АКПП PDK"
      },
      doors: {
        ar: "5 أبواب",
        en: "5 Doors",
        tr: "5 Kapı",
        es: "5 Puertas",
        de: "5 Türen",
        ru: "5 Дверей"
      },
      luggage: {
        ar: "3 حقائب كبيرة",
        en: "3 Large Bags",
        tr: "3 Büyük Valiz",
        es: "3 Maletas Grandes",
        de: "3 Große Koffer",
        ru: "3 Больших чемодана"
      }
    },
    availability: "available",
    pickupTimeMinutes: 20,
    featured: true,
    order: 4,
    whatsappMessageTemplate: {
      ar: "مرحباً إنفينيتي كارز، أرغب بحجز سيارة {vehicleName}.",
      en: "Hello Infinity Cars, I would like to book the {vehicleName}.",
      tr: "Merhaba Infinity Cars, {vehicleName} aracını kiralamak istiyorum.",
      es: "Hola Infinity Cars, me gustaría reservar el {vehicleName}.",
      de: "Hallo Infinity Cars, ich möchte den {vehicleName} buchen.",
      ru: "Здравствуйте, Infinity Cars! Я хочу забронировать {vehicleName}."
    }
  },
  {
    id: "audi-q8",
    slug: "audi-q8",
    category: "suv",
    images: [
      "https://images.unsplash.com/photo-1610882648335-ced8fc8fa6b6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1200&q=80"
    ],
    name: {
      ar: "أودي Q8",
      en: "Audi Q8",
      tr: "Audi Q8",
      es: "Audi Q8",
      de: "Audi Q8",
      ru: "Audi Q8"
    },
    tagline: {
      ar: "تصميم كوبيه هجومي مع تقنيات كوواترو المتقدمة",
      en: "Expressive SUV coupe design powered by Quattro intelligence",
      tr: "Quattro teknolojisi ve etkileyici SUV-Coupe tasarımı",
      es: "Diseño SUV cupé expresivo con la tecnología Quattro",
      de: "Ausdrucksstarkes SUV-Coupé-Design mit Quattro-Antrieb",
      ru: "Агрессивный дизайн купе-кроссовера и полный привод Quattro"
    },
    description: {
      ar: "تدمج أودي Q8 أنشطة الكوبيه الرياضية مع فخامة سيارات SUV الكبيرة. إضاءة ماتريكس ليد الذكية ونظام الدفع الكلي كواترو لثبات مثالي.",
      en: "The Audi Q8 blends sporty coupe aesthetics with premium SUV space. Matrix LED lights and Quattro AWD performance.",
      tr: "Audi Q8, sportif coupe çizgilerini geniş SUV alanı ile birleştirir. Matrix LED farlar ve Quattro sürüş güvenliği.",
      es: "El Audi Q8 combina la estética cupé deportiva con el espacio de un SUV de alta gama. Faros Matrix LED y tracción Quattro.",
      de: "Der Audi Q8 verbindet sportliche Coupé-Linien mit großzügigem SUV-Raumangebot. Matrix LED und Quattro Allradantrieb.",
      ru: "Audi Q8 сочетает стремительный силуэт купе и простор внедорожника. Оптика Matrix LED и привод Quattro."
    },
    specs: {
      engine: {
        ar: "3.0L تيربو TFSI",
        en: "3.0L TFSI Turbo",
        tr: "3.0L TFSI Turbo",
        es: "3.0L TFSI Turbo",
        de: "3.0L TFSI-Turbo",
        ru: "3.0L TFSI Турбо"
      },
      seats: {
        ar: "5 ركاب",
        en: "5 Seats",
        tr: "5 Koltuk",
        es: "5 Plazas",
        de: "5 Sitze",
        ru: "5 Мест"
      },
      insurance: {
        ar: "تأمين شامل",
        en: "Full Insurance",
        tr: "Tam Sigorta",
        es: "Seguro Total",
        de: "Vollkasko",
        ru: "Полная страховка"
      },
      transmission: {
        ar: "أوتوماتيك 8 سرعات",
        en: "8-Speed Auto",
        tr: "8 İleri Otomatik",
        es: "Automático 8 vel.",
        de: "8-Gang-Automatik",
        ru: "8-ступ. АКПП"
      },
      doors: {
        ar: "5 أبواب",
        en: "5 Doors",
        tr: "5 Kapı",
        es: "5 Puertas",
        de: "5 Türen",
        ru: "5 Дверей"
      },
      luggage: {
        ar: "4 حقائب كبيرة",
        en: "4 Large Bags",
        tr: "4 Büyük Valiz",
        es: "4 Maletas Grandes",
        de: "4 Große Koffer",
        ru: "4 Больших чемодана"
      }
    },
    availability: "available",
    pickupTimeMinutes: 20,
    featured: false,
    order: 5,
    whatsappMessageTemplate: {
      ar: "مرحباً إنفينيتي كارز، أرغب بحجز سيارة {vehicleName}.",
      en: "Hello Infinity Cars, I would like to book the {vehicleName}.",
      tr: "Merhaba Infinity Cars, {vehicleName} aracını kiralamak istiyorum.",
      es: "Hola Infinity Cars, me gustaría reservar el {vehicleName}.",
      de: "Hallo Infinity Cars, ich möchte den {vehicleName} buchen.",
      ru: "Здравствуйте, Infinity Cars! Я хочу забронировать {vehicleName}."
    }
  },
  {
    id: "cadillac-escalade",
    slug: "cadillac-escalade",
    category: "suv",
    images: [
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80"
    ],
    name: {
      ar: "كاديلاك إسكاليد",
      en: "Cadillac Escalade",
      tr: "Cadillac Escalade",
      es: "Cadillac Escalade",
      de: "Cadillac Escalade",
      ru: "Cadillac Escalade"
    },
    tagline: {
      ar: "حضور ملكي ومساحة رحبة للرحلات الكبيرة",
      en: "Commanding grandeur and ultra-spacious luxury seating",
      tr: "Prestijli görünüm ve geniş aileler için maksimum konfor",
      es: "Presencia imponente y espacio ultraconfortable",
      de: "Imposante Präsenz und riesiger Luxusinnenraum",
      ru: "Внушительный вид и максимальный простор для VIP-поездок"
    },
    description: {
      ar: "تعد كاديلاك إسكاليد خيار الفخامة المطلقة للوفود والعائلات الكبيرة. شاشة منحنية OLED ثلاثية ومقاعد رحبة تتسع لـ 7 ركاب بكل أريحية.",
      en: "The Cadillac Escalade offers unmatched scale, curved OLED displays, and comfortable 7-passenger seating.",
      tr: "Cadillac Escalade, 7 kişilik geniş kapasitesi ve kavisli OLED ekranı ile benzersiz bir VIP deneyimi sunar.",
      es: "El Cadillac Escalade ofrece una escala insuperable, pantallas OLED curvas y espacio confortable para 7 pasajeros.",
      de: "Der Cadillac Escalade überzeugt mit Raumangebot, geschwungenem OLED-Display und 7 edlen Sitzplätzen.",
      ru: "Cadillac Escalade — грандиозный внедорожник для VIP-гостей и больших семей. Изогнутые OLED экраны и 7 мест."
    },
    specs: {
      engine: {
        ar: "6.2L V8",
        en: "6.2L V8",
        tr: "6.2L V8",
        es: "6.2L V8",
        de: "6.2L V8",
        ru: "6.2L V8"
      },
      seats: {
        ar: "7 ركاب",
        en: "7 Seats",
        tr: "7 Koltuk",
        es: "7 Plazas",
        de: "7 Sitze",
        ru: "7 Мест"
      },
      insurance: {
        ar: "تأمين شامل",
        en: "Full Insurance",
        tr: "Tam Sigorta",
        es: "Seguro Total",
        de: "Vollkasko",
        ru: "Полная страховка"
      },
      transmission: {
        ar: "أوتوماتيك 10 سرعات",
        en: "10-Speed Auto",
        tr: "10 İleri Otomatik",
        es: "Automático 10 vel.",
        de: "10-Gang-Automatik",
        ru: "10-ступ. АКПП"
      },
      doors: {
        ar: "5 أبواب",
        en: "5 Doors",
        tr: "5 Kapı",
        es: "5 Puertas",
        de: "5 Türen",
        ru: "5 Дверей"
      },
      luggage: {
        ar: "5 حقائب كبيرة",
        en: "5 Large Bags",
        tr: "5 Büyük Valiz",
        es: "5 Maletas Grandes",
        de: "5 Große Koffer",
        ru: "5 Больших чемоданов"
      }
    },
    availability: "available",
    pickupTimeMinutes: 20,
    featured: false,
    order: 6,
    whatsappMessageTemplate: {
      ar: "مرحباً إنفينيتي كارز، أرغب بحجز سيارة {vehicleName}.",
      en: "Hello Infinity Cars, I would like to book the {vehicleName}.",
      tr: "Merhaba Infinity Cars, {vehicleName} aracını kiralamak istiyorum.",
      es: "Hola Infinity Cars, me gustaría reservar el {vehicleName}.",
      de: "Hallo Infinity Cars, ich möchte den {vehicleName} buchen.",
      ru: "Здравствуйте, Infinity Cars! Я хочу забронировать {vehicleName}."
    }
  }
];

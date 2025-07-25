"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "eng" | "rus" | "uzb"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  eng: {
    home: "Home",
    about: "About",
    products: "Products",
    contact: "Contact",
    subtitle: "Your Health Partner",
    trustedPharmacy: "Trusted Pharmacy",
    qualityMedicines: "Quality Medicines",
    fastDelivery: "Fast Delivery",
    expertConsultation: "Expert Consultation",
    featuredProducts: "Featured Products",
    partners: "Our Partners",
    trustedPartners: "Trusted partners",
    categories: "Categories",
    allProducts: "All Products",
    priceRange: "Price Range",
    searchProducts: "Search products...",
    sortBy: "Sort by",
    productsFound: "products found",
    inStock: "In Stock",
    outOfStock: "Out of Stock",
    viewDetails: "View Details",
    ingredients: "Ingredients",
    dosage: "Dosage",
    warnings: "Warnings",
    sideEffects: "Side Effects",
    manufacturer: "Manufacturer",
    brand: "Brand",
    expiryDate: "Expiry Date",
    batchNumber: "Batch Number",
    storage: "Storage",
    getInTouch: "Get in Touch",
    sendMessage: "Send Message",
    fullName: "Full Name",
    email: "Email",
    subject: "Subject",
    yourMessage: "Your Message",
    submitMessage: "Submit Message",
    phoneNumber: "Phone Number",
    emailAddress: "Email Address",
    officeAddress: "Office Address",
    workingHours: "Working Hours",
    tashkent: "Tashkent",
    samarkand: "Samarkand",
    bukhara: "Bukhara",
    andijan: "Andijan",
  },
  rus: {
    home: "Главная",
    about: "О нас",
    products: "Продукты",
    contact: "Контакты",
    subtitle: "Ваш партнер по здоровью",
    trustedPharmacy: "Надежная аптека",
    qualityMedicines: "Качественные лекарства",
    fastDelivery: "Быстрая доставка",
    expertConsultation: "Экспертная консультация",
    featuredProducts: "Рекомендуемые продукты",
    partners: "Наши партнеры",
    trustedPartners: "Надежные партнеры",
    categories: "Категории",
    allProducts: "Все продукты",
    priceRange: "Диапазон цен",
    searchProducts: "Поиск продуктов...",
    sortBy: "Сортировать по",
    productsFound: "продуктов найдено",
    inStock: "В наличии",
    outOfStock: "Нет в наличии",
    viewDetails: "Подробнее",
    ingredients: "Состав",
    dosage: "Дозировка",
    warnings: "Предупреждения",
    sideEffects: "Побочные эффекты",
    manufacturer: "Производитель",
    brand: "Бренд",
    expiryDate: "Срок годности",
    batchNumber: "Номер партии",
    storage: "Хранение",
    getInTouch: "Связаться с нами",
    sendMessage: "Отправить сообщение",
    fullName: "Полное имя",
    email: "Электронная почта",
    subject: "Тема",
    yourMessage: "Ваше сообщение",
    submitMessage: "Отправить сообщение",
    phoneNumber: "Номер телефона",
    emailAddress: "Адрес электронной почты",
    officeAddress: "Адрес офиса",
    workingHours: "Рабочие часы",
    tashkent: "Ташкент",
    samarkand: "Самарканд",
    bukhara: "Бухара",
    andijan: "Андижан",
  },
  uzb: {
    home: "Bosh sahifa",
    about: "Biz haqimizda",
    products: "Mahsulotlar",
    contact: "Aloqa",
    subtitle: "Sizning sog'liq hamkoringiz",
    trustedPharmacy: "Ishonchli dorixona",
    qualityMedicines: "Sifatli dorilar",
    fastDelivery: "Tez yetkazib berish",
    expertConsultation: "Mutaxassis maslahati",
    featuredProducts: "Tavsiya etilgan mahsulotlar",
    partners: "Bizning hamkorlar",
    trustedPartners: "Ishonchli hamkorlar",
    categories: "Kategoriyalar",
    allProducts: "Barcha mahsulotlar",
    priceRange: "Narx oralig'i",
    searchProducts: "Mahsulotlarni qidirish...",
    sortBy: "Saralash",
    productsFound: "mahsulot topildi",
    inStock: "Mavjud",
    outOfStock: "Mavjud emas",
    viewDetails: "Batafsil",
    ingredients: "Tarkibi",
    dosage: "Dozasi",
    warnings: "Ogohlantirishlar",
    sideEffects: "Yon ta'sirlar",
    manufacturer: "Ishlab chiqaruvchi",
    brand: "Brend",
    expiryDate: "Yaroqlilik muddati",
    batchNumber: "Partiya raqami",
    storage: "Saqlash",
    getInTouch: "Bog'lanish",
    sendMessage: "Xabar yuborish",
    fullName: "To'liq ism",
    email: "Elektron pochta",
    subject: "Mavzu",
    yourMessage: "Sizning xabaringiz",
    submitMessage: "Xabar yuborish",
    phoneNumber: "Telefon raqami",
    emailAddress: "Elektron pochta manzili",
    officeAddress: "Ofis manzili",
    workingHours: "Ish vaqti",
    tashkent: "Toshkent",
    samarkand: "Samarqand",
    bukhara: "Buxoro",
    andijan: "Andijon",
  },
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("eng")

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[Language]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

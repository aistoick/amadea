"use client"

import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, Users, Globe } from "lucide-react"
import Image from "next/image"

export default function ContactPage() {
  const { t } = useLanguage()

  const locations = [
    {
      id: 1,
      city: t("samarkand"),
      image: "/images/sam.jpg",
      hours: "8:00 - 22:00",
      phone: "+998 95 500 15 22 +998 90 251 15 22",
      address: "Mir Said Baraka ko'chasi, 34-uy",
    },
    {
      id: 2,
      city: t("tashkent"),
      image: "/images/tash.jpg",
      hours: "9:00 - 21:00",
      phone: "+998 97 747 75 77",
      address: "Mirzo Ulug‘bek tumani, Sayram ko‘chasi, 39A",
    },
    {
      id: 3,
      city: t("bukhara"),
      image: "/images/buk.jpg",
      hours: "9:00 - 20:00",
      phone: "+998 91 522 00 11",
      address: "Bahovuddin Naqshband 309/2",
    },
    {
      id: 4,
      city: t("andijan"),
      image: "/images/andijan.jpg",
      hours: "8:30 - 21:30",
      phone: "+998 99 526 00 11 +998 90 606 27 94",
      address: "Andijan",
    },

     {
      id: 5,
      city: t("Navoiy "),
      image: "/images/nav.jpg",
      hours: "8:30 - 21:30",
      phone: "+998 90 606 27 92",
      address: "Navoiy viloyati, Zarafshon, 3-mikrorayon, 18-uy",
    },

        {
      id: 6,
      city: t("Surkhandarya"),
      image: "/images/sur.jpg",
      hours: "8:30 - 21:30",
      phone: "+998 90 000 73 07",
      address: "4R100 Surxondaryo viloyati",
    },

        {
      id: 7,
      city: t("Qaraqalpaqstan"),
      image: "/images/qara.jpg",
      hours: "8:30 - 21:30",
      phone: "+998 90 000 73 07",
      address: "Qoraqalpog‘iston Respublikasi, Nukus sh., 11-uy, 61-kvartal",
    },
  ]

  const contactMethods = [
    {
      icon: <Phone className="w-8 h-8 text-blue-600" />,
      title: "Call Us",
      description: "Speak with our pharmacy experts",
      contact: "+998 90 123 45 67",
      available: "24/7 Available",
    },
    {
      icon: <Mail className="w-8 h-8 text-blue-600" />,
      title: "Email Us",
      description: "Send us your questions anytime",
      contact: "info@pharmacare.uz",
      available: "Response within 2 hours",
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-blue-600" />,
      title: "Live Chat",
      description: "Chat with our support team",
      contact: "Start Chat",
      available: "Mon-Fri 8:00-22:00",
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Consultation",
      description: "Book a pharmacist consultation",
      contact: "Book Now",
      available: "Free consultation",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <Badge className="bg-white/20 text-white hover:bg-white/30 px-4 py-2">
              <Globe className="w-4 h-4 mr-2" />
              {t("contact")}
            </Badge>
            <h1 className="text-5xl font-bold">{t("getInTouch")}</h1>
            <p className="text-xl opacity-90">
             We're here to support all your laboratory and chemical supply needs. Contact us anytime for expert guidance and reliable assistance.s
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Contact Methods */}
        {/* <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How Can We Help?</h2>
            <p className="text-xl text-gray-600">Choose the best way to reach us</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className="text-center p-8 hover:shadow-xl transition-all duration-300 border-0 shadow-lg"
              >
                <CardContent className="space-y-4 p-0">
                  <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    {method.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{method.title}</h3>
                  <p className="text-gray-600 text-sm">{method.description}</p>
                  <div className="space-y-2">
                    <div className="font-semibold text-blue-600">{method.contact}</div>
                    <div className="text-sm text-gray-500">{method.available}</div>
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    {method.title === "Call Us"
                      ? "Call Now"
                      : method.title === "Email Us"
                        ? "Send Email"
                        : method.title === "Live Chat"
                          ? "Start Chat"
                          : "Book Now"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section> */}

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <section>
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{t("sendMessage")}</h2>
              <p className="text-gray-600">Fill out the form below and we'll get back to you as soon as possible.</p>
            </div>

            <Card className="shadow-xl border-0">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                      <Input placeholder="Enter your first name" className="h-12" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                      <Input placeholder="Enter your last name" className="h-12" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t("email")}</label>
                    <Input type="email" placeholder="Enter your email" className="h-12" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t("phoneNumber")}</label>
                    <Input type="tel" placeholder="Enter your phone number" className="h-12" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t("subject")}</label>
                    <Input placeholder="What is this regarding?" className="h-12" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t("yourMessage")}</label>
                    <Textarea placeholder="Tell us how we can help you..." className="min-h-32 resize-none" />
                  </div>

                  <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    <Send className="w-5 h-5 mr-2" />
                    {t("submitMessage")}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </section>

          {/* Company Info */}
          <section>
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Visit Our Stores</h2>
              <p className="text-gray-600">Find us at one of our convenient locations across Uzbekistan.</p>
            </div>

            <div className="space-y-6">
              <Card className="shadow-xl border-0">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    {/* <div className="flex items-start space-x-4">
                      <MapPin className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{t("officeAddress")}</h3>
                        <p className="text-gray-600">123 Healthcare Street, Tashkent, Uzbekistan</p>
                      </div>
                    </div> */}

                    <div className="flex items-start space-x-4">
                      <Phone className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{t("phoneNumber")}</h3>
                        <p className="text-gray-600">+998 95 500 15 22</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Mail className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{t("emailAddress")}</h3>
                        <p className="text-gray-600">hulkaroya@gmail.com</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Clock className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{t("workingHours")}</h3>
                        <div className="text-gray-600 space-y-1">
                          <p>Monday - Friday: 8:00 AM - 10:00 PM</p>
                          <p>Saturday - Sunday: 9:00 AM - 8:00 PM</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              {/* <Card className="shadow-xl border-0">
                <CardContent className="p-0">
                  <div className="h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                      <p className="text-gray-600">Interactive Map</p>
                      <p className="text-sm text-gray-500">Find us on the map</p>
                    </div>
                  </div>
                </CardContent>
              </Card> */}
            </div>
          </section>
        </div>

        {/* Locations Section */}
        <section className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Amadea Distributors</h2>
            <p className="text-xl text-gray-600">Find us at any of our trusted distributor locations across the region</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {locations.map((location) => (
              <Card
                key={location.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-lg"
              >
                <div className="flex">
                  <div className="w-1/3">
                    <Image
                      src={location.image || "/placeholder.svg?height=200&width=200&text=" + location.city}
                      alt={location.city}
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="w-2/3 p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{location.city}</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Clock className="w-4 h-4 text-blue-600 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{location.hours}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="w-4 h-4 text-blue-600 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{location.phone}</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <MapPin className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 text-sm">{location.address}</span>
                      </div>
                    </div>
                    <Button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white w-full">Get Directions</Button>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

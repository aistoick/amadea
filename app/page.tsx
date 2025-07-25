"use client"

import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Shield, Users, Pill, Heart, Star, Truck, Phone, MapPin, Play } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  const { t } = useLanguage()

  const features = [
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: t("trustedPharmacy"),
      description: "Licensed and certified pharmacy with years of experience",
    },
    {
      icon: <Pill className="w-8 h-8 text-blue-600" />,
      title: t("qualityMedicines"),
      description: "Only authentic medicines from verified manufacturers",
    },
    {
      icon: <Truck className="w-8 h-8 text-blue-600" />,
      title: t("fastDelivery"),
      description: "Quick and reliable delivery to your doorstep",
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: t("expertConsultation"),
      description: "Professional pharmacist consultation available 24/7",
    },
  ]

  const featuredProducts = [
    {
      id: 1,
      name: "Vitamin D3 Complex",
      price: 32000,
      originalPrice: 38000,
      image: "/placeholder.svg?height=200&width=200&text=Vitamin+D3",
      rating: 4.8,
      reviews: 124,
      category: "Vitamins",
    },
    {
      id: 2,
      name: "Omega-3 Premium",
      price: 65000,
      originalPrice: 75000,
      image: "/placeholder.svg?height=200&width=200&text=Omega+3",
      rating: 4.9,
      reviews: 89,
      category: "Heart Health",
    },
    {
      id: 3,
      name: "Probiotics Complex",
      price: 58000,
      originalPrice: 68000,
      image: "/placeholder.svg?height=200&width=200&text=Probiotics",
      rating: 4.7,
      reviews: 156,
      category: "Digestive Health",
    },
  ]

  const partners = [
    { name: "Elysée", logo: "/images/partner_1.png" },
    { name: "TEGEN", logo: "/images/partner_2.png" },
    { name: "ZZ", logo: "/images/partner_3.png" },
    { name: "999", logo: "/images/partner_4.png" },
    { name: "ABU.UZ", logo: "/images/partner_5.png" },
    { name: "A", logo: "/images/partner_6.png" },
    { name: "ANTRACT", logo: "/images/partner_7.png" },
    { name: "Panda", logo: "/images/partner_8.png" },
    
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-40"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-40"></div>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-40"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 px-4 py-2 text-sm font-medium">
                  <Heart className="w-4 h-4 mr-2" />
                  {t("trustedPharmacy")}
                </Badge>

                <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  High-Quality {" "}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                     Laboratory Reagents for Qualitative Analysis
                  </span>
                </h1>

                <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                  Discover Precision in Every Drop: Laboratory-Grade Reagents for Scientific Excellence.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/products">
                  <Button
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Shop Now
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-4 text-lg border-2 border-gray-300 text-gray-700 hover:bg-gray-50 bg-white/80 backdrop-blur-sm font-semibold"
                >
                  <Play className="mr-2 w-5 h-5" />
                  Get in touch
                </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">10K+</div>
                  <div className="text-sm text-gray-600 font-medium">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">150+</div>
                  <div className="text-sm text-gray-600 font-medium">Products</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">24/7</div>
                  <div className="text-sm text-gray-600 font-medium">Support</div>
                </div>
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="relative">
              <div className="relative">
                {/* Main Hero Image Container */}
                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/20">
                  <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100 p-8">
                    <Image
                      src="/images/herosection.png"
                      alt="Modern Pharmacy"
                      width={500}
                      height={500}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                </div>

                {/* Floating Cards */}
                <div className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-xl p-4 border border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Shield className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Certified</div>
                      <div className="text-sm text-gray-600">Licensed Pharmacy</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4 border border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Truck className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Fast Delivery</div>
                      <div className="text-sm text-gray-600">Same Day Service</div>
                    </div>
                  </div>
                </div>

                <div className="absolute top-1/2 -left-8 bg-white rounded-2xl shadow-xl p-4 border border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Expert Care</div>
                      <div className="text-sm text-gray-600">24/7 Consultation</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Amedea?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
             We deliver reliable laboratory and healthcare supplies with an emphasis on quality, safety, and client trust.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="text-center p-8 hover:shadow-xl transition-all duration-300 border-0 shadow-lg"
              >
                <CardContent className="space-y-4 p-0">
                  <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      {/* <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t("featuredProducts")}</h2>
            <p className="text-xl text-gray-600">Discover our most popular and trusted healthcare products</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg">
                <div className="relative overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 left-4 bg-blue-600 text-white">{product.category}</Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center mb-3">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-2">({product.reviews})</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-blue-600">{product.price.toLocaleString()} UZS</span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through ml-2">
                          {product.originalPrice.toLocaleString()} UZS
                        </span>
                      )}
                    </div>
                    <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent">
                      {t("viewDetails")}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/products">
              <Button
                variant="outline"
                size="lg"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
              >
                View All Products
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section> */}

      {/* Partners Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t("partners")}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t("trustedPartners")} who help us deliver the best healthcare solutions
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {partners.map((partner, index) => (
              <Card
                key={index}
                className="flex items-center justify-center p-6 hover:shadow-lg transition-all duration-300 border border-gray-100 bg-white"
              >
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  width={120}
                  height={60}
                  
                />
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold">Ready to Elevate Your Laboratory Standards?</h2>
            <p className="text-xl opacity-90">
              Thousands of professionals rely on AMADEA for high-quality reagents and lab supplies — join them today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4">
                  <Phone className="mr-2 w-5 h-5" />
                  Call Now
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 bg-transparent"
                >
                  <MapPin className="mr-2 w-5 h-5" />
                  Find Location
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

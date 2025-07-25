"use client"

import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  Star,
  Shield,
  Users,
  Phone,
  Award,
  Microscope,
  Factory,
  FlaskConical,
  Pill,
  Globe,
  CheckCircle,
  ArrowRight,
  Zap,
  Target,
  TrendingUp,
  Building2,
  Beaker,
  Atom,
} from "lucide-react"

export default function HomePage() {
  const { t } = useLanguage()

  const partners = [
    { name: "Elysée", logo: "/placeholder.svg?height=80&width=120&text=Elysée" },
    { name: "TEGEN", logo: "/placeholder.svg?height=80&width=120&text=TEGEN" },
    { name: "ZZ", logo: "/placeholder.svg?height=80&width=120&text=ZZ" },
    { name: "Dorkonalar", logo: "/placeholder.svg?height=80&width=120&text=999" },
    { name: "ABU.UZ", logo: "/placeholder.svg?height=80&width=120&text=ABU.UZ" },
    { name: "Antract", logo: "/placeholder.svg?height=80&width=120&text=A" },
    { name: "ANTRACT", logo: "/placeholder.svg?height=80&width=120&text=ANTRACT" },
    { name: "Panda", logo: "/placeholder.svg?height=80&width=120&text=Panda" },
    { name: "BILLZ", logo: "/placeholder.svg?height=80&width=120&text=BILLZ" },
    { name: "EVOS", logo: "/placeholder.svg?height=80&width=120&text=EVOS" },
    { name: "Kanstik", logo: "/placeholder.svg?height=80&width=120&text=Kanstik" },
    { name: "Texnomart", logo: "/placeholder.svg?height=80&width=120&text=Texnomart" },
    { name: "Payme", logo: "/placeholder.svg?height=80&width=120&text=Payme" },
    { name: "Uzum", logo: "/placeholder.svg?height=80&width=120&text=Uzum" },
    { name: "Click", logo: "/placeholder.svg?height=80&width=120&text=Click" },
  ]

  const featuredProducts = [
    {
      name: "Magniy B6 Strong",
      price: "45,000 UZS",
      originalPrice: "55,000 UZS",
      image: "/placeholder.svg?height=300&width=300&text=Magniy+B6",
      category: "Nevrologiya",
      rating: 4.8,
      reviews: 124,
      inStock: true,
      description: "Advanced neurological support formula",
      icon: <Microscope className="w-5 h-5" />,
    },
    {
      name: "Androvigor",
      price: "85,000 UZS",
      originalPrice: "95,000 UZS",
      image: "/placeholder.svg?height=300&width=300&text=Androvigor",
      category: "Vitaminlar",
      rating: 4.9,
      reviews: 89,
      inStock: true,
      description: "Premium energy enhancement complex",
      icon: <Zap className="w-5 h-5" />,
    },
    {
      name: "Androwell",
      price: "75,000 UZS",
      originalPrice: "85,000 UZS",
      image: "/placeholder.svg?height=300&width=300&text=Androwell",
      category: "Cardiovascular",
      rating: 4.7,
      reviews: 156,
      inStock: true,
      description: "Cardiovascular health optimization",
      icon: <Target className="w-5 h-5" />,
    },
    {
      name: "Vitamin D3 5000",
      price: "32,000 UZS",
      originalPrice: "38,000 UZS",
      image: "/placeholder.svg?height=300&width=300&text=Vitamin+D3",
      category: "Vitaminlar",
      rating: 4.6,
      reviews: 203,
      inStock: true,
      description: "High-potency immune system support",
      icon: <Shield className="w-5 h-5" />,
    },
    {
      name: "Omega-3 Premium",
      price: "65,000 UZS",
      originalPrice: "75,000 UZS",
      image: "/placeholder.svg?height=300&width=300&text=Omega+3",
      category: "Brain Health",
      rating: 4.8,
      reviews: 178,
      inStock: true,
      description: "Advanced brain and heart support",
      icon: <FlaskConical className="w-5 h-5" />,
    },
    {
      name: "Probiotics Complex",
      price: "58,000 UZS",
      originalPrice: "68,000 UZS",
      image: "/placeholder.svg?height=300&width=300&text=Probiotics",
      category: "Digestive Health",
      rating: 4.5,
      reviews: 92,
      inStock: true,
      description: "Advanced digestive system support",
      icon: <Beaker className="w-5 h-5" />,
    },
  ]

  const stats = [
    { number: "25+", label: "Years of Innovation", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "500M+", label: "Doses Manufactured", icon: <Factory className="w-6 h-6" /> },
    { number: "50+", label: "Countries Served", icon: <Globe className="w-6 h-6" /> },
    { number: "1000+", label: "Research Projects", icon: <Microscope className="w-6 h-6" /> },
  ]

  const features = [
    {
      icon: Factory,
      title: "Advanced Manufacturing",
      description: "State-of-the-art facilities with cutting-edge technology and automated production lines",
    },
    {
      icon: FlaskConical,
      title: "Research & Development",
      description: "Dedicated R&D centers with world-class scientists developing breakthrough formulations",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Rigorous testing protocols and international certifications ensuring product excellence",
    },
    {
      icon: Globe,
      title: "Global Distribution",
      description: "Worldwide supply chain network delivering pharmaceutical solutions across continents",
    },
  ]

  const capabilities = [
    {
      icon: <Pill className="w-8 h-8" />,
      title: "Tablet Manufacturing",
      description: "High-speed tablet production with precision coating and packaging systems",
    },
    {
      icon: <FlaskConical className="w-8 h-8" />,
      title: "Liquid Formulations",
      description: "Advanced liquid processing for syrups, suspensions, and injectable solutions",
    },
    {
      icon: <Atom className="w-8 h-8" />,
      title: "API Development",
      description: "Active pharmaceutical ingredient synthesis and purification capabilities",
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Contract Manufacturing",
      description: "Full-service manufacturing solutions for pharmaceutical companies worldwide",
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl floating-animation"></div>
          <div
            className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl floating-animation"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl floating-animation"
            style={{ animationDelay: "4s" }}
          ></div>
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge className="bg-[#0068E4]/20 text-[#0068E4] border-[#0068E4]/30 backdrop-blur-sm">
                  <Microscope className="w-4 h-4 mr-2" />
                  Leading Pharmaceutical Manufacturer
                </Badge>

                <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                  Advancing
                  <span className="block bg-gradient-to-r from-[#0068E4] to-[#4A9EFF] bg-clip-text text-transparent">
                    Healthcare
                  </span>
                  Innovation
                </h1>

                <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                  Pioneering pharmaceutical manufacturing with cutting-edge technology, rigorous quality standards, and
                  a commitment to improving global health outcomes through innovative drug development.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/products">
                  <Button
                    size="lg"
                    className="bg-[#0068E4] hover:bg-[#0052B8] text-white px-8 py-4 text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
                  >
                    <Factory className="w-5 h-5 mr-2" />
                    Explore Products
                  </Button>
                </Link>
                <Link href="/about">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg backdrop-blur-sm bg-transparent"
                  >
                    <FlaskConical className="w-5 h-5 mr-2" />
                    Our Research
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-8">
                <div className="glass-effect rounded-2xl p-6">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-10 h-10 bg-[#0068E4] rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-white font-semibold">FDA Approved</span>
                  </div>
                  <p className="text-gray-300 text-sm">All facilities meet international regulatory standards</p>
                </div>

                <div className="glass-effect rounded-2xl p-6">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-10 h-10 bg-[#0068E4] rounded-full flex items-center justify-center">
                      <Globe className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-white font-semibold">Global Reach</span>
                  </div>
                  <p className="text-gray-300 text-sm">Serving healthcare providers in 50+ countries</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 pulse-glow">
                  <img
                    src="/placeholder.svg?height=600&width=500&text=Pharmaceutical+Manufacturing"
                    alt="Pharmaceutical Manufacturing"
                    className="w-full rounded-2xl shadow-2xl"
                  />
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#0068E4] rounded-2xl flex items-center justify-center shadow-2xl floating-animation">
                <Microscope className="w-12 h-12 text-white" />
              </div>

              <div
                className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-2xl floating-animation"
                style={{ animationDelay: "1s" }}
              >
                <FlaskConical className="w-10 h-10 text-white" />
              </div>

              <div
                className="absolute top-1/2 -left-8 w-16 h-16 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center shadow-2xl floating-animation"
                style={{ animationDelay: "3s" }}
              >
                <Atom className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-indigo-50/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Pharmaceutical Excellence by Numbers</h2>
            <p className="text-xl text-gray-600">Trusted by healthcare professionals worldwide</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-[#0068E4] to-[#0052B8] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <div className="text-white">{stat.icon}</div>
                </div>
                <div className="text-4xl font-bold text-[#0068E4] mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Capabilities */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#0068E4] to-[#0052B8] rounded-2xl mb-6 shadow-lg">
              <Factory className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Manufacturing Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced pharmaceutical manufacturing solutions with state-of-the-art technology and quality assurance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#E6F2FF] to-[#0068E4]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-[#0068E4]">{capability.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-[#0068E4] transition-colors">
                    {capability.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{capability.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose PharmaCare Manufacturing?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leading the pharmaceutical industry with innovation, quality, and reliability
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group text-center hover:shadow-2xl transition-all duration-500 border-0 shadow-lg"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#0068E4] to-[#0052B8] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-[#0068E4] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#0068E4] to-[#0052B8] rounded-2xl mb-6 shadow-lg">
              <Pill className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Pharmaceutical Products</h2>
            <p className="text-xl text-gray-600">Innovative formulations developed with cutting-edge research</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-[#0068E4] text-white shadow-lg">
                      <div className="mr-2">{product.icon}</div>
                      {product.category}
                    </Badge>
                  </div>
                  {product.originalPrice && (
                    <Badge className="absolute top-4 right-4 bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-lg">
                      Limited Offer
                    </Badge>
                  )}
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-[#0068E4] transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">{product.description}</p>

                  <div className="flex items-center mb-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-2">
                      ({product.reviews} {t("reviews")})
                    </span>
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <div className="space-y-1">
                      <div className="text-2xl font-bold text-[#0068E4]">{product.price}</div>
                      {product.originalPrice && (
                        <div className="text-sm text-gray-500 line-through">{product.originalPrice}</div>
                      )}
                    </div>
                    <Badge
                      variant={product.inStock ? "default" : "destructive"}
                      className="bg-green-100 text-green-800"
                    >
                      {product.inStock ? t("inStock") : t("outOfStock")}
                    </Badge>
                  </div>

                  <Button className="w-full bg-[#0068E4] hover:bg-[#0052B8] text-white shadow-lg hover:shadow-xl transition-all duration-300">
                    <ArrowRight className="w-4 h-4 mr-2" />
                    {t("addToCart")}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/products">
              <Button
                size="lg"
                className="bg-[#0068E4] hover:bg-[#0052B8] text-white px-8 py-4 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <Factory className="w-5 h-5 mr-2" />
                View All Products
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#0068E4] to-[#0052B8] rounded-2xl mb-6 shadow-lg">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Global Manufacturing Partners</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Trusted partnerships with leading healthcare organizations and technology providers worldwide
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#0068E4]/20"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#0068E4]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative flex items-center justify-center h-16">
                  <img
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    className="max-h-12 max-w-full object-contain opacity-70 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="inline-flex items-center space-x-2 text-gray-600 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full px-6 py-3 shadow-md">
              <Award className="w-5 h-5 text-[#0068E4]" />
              <span className="font-medium">ISO 9001:2015 Certified Manufacturing Partners</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#0068E4] via-[#0052B8] to-[#003D8A] text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl floating-animation"></div>
          <div
            className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl floating-animation"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-8 backdrop-blur-sm">
              <Factory className="w-10 h-10 text-white" />
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Partner with Us?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
              Join leading pharmaceutical companies who trust PharmaCare for their manufacturing needs. Let's advance
              healthcare together.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products">
                <Button
                  size="lg"
                  className="bg-white text-[#0068E4] hover:bg-gray-100 px-8 py-4 shadow-2xl hover:shadow-white/25 transition-all duration-300"
                >
                  <Microscope className="w-5 h-5 mr-2" />
                  Start Manufacturing
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 px-8 py-4 backdrop-blur-sm bg-transparent"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Contact Our Team
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

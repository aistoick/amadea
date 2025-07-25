"use client"

import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Shield,
  Users,
  Award,
  Heart,
  Target,
  Globe,
  CheckCircle,
  Star,
  TrendingUp,
  Clock,
  Pill,
  Stethoscope,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
  const { t } = useLanguage()

  const values = [
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Quality Assurance",
      description:
        "We ensure all medications meet the highest quality standards and are sourced from certified manufacturers.",
    },
    {
      icon: <Heart className="w-8 h-8 text-blue-600" />,
      title: "Patient Care",
      description:
        "Your health and well-being are our top priorities. We provide personalized care for every customer.",
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Expert Team",
      description:
        "Our licensed pharmacists and healthcare professionals are here to provide expert guidance and support.",
    },
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: "Accessibility",
      description: "We make healthcare accessible to everyone with convenient locations and affordable pricing.",
    },
  ]

  const achievements = [
    {
      icon: <Award className="w-12 h-12 text-yellow-500" />,
      title: "Licensed Pharmacy",
      description: "Fully licensed and certified by health authorities",
    },
    {
      icon: <Users className="w-12 h-12 text-blue-500" />,
      title: "10,000+ Customers",
      description: "Trusted by thousands of satisfied customers",
    },
    {
      icon: <Clock className="w-12 h-12 text-green-500" />,
      title: "24/7 Support",
      description: "Round-the-clock customer support and consultation",
    },
    {
      icon: <Globe className="w-12 h-12 text-purple-500" />,
      title: "Multiple Locations",
      description: "Convenient locations across Uzbekistan",
    },
  ]

 

  const milestones = [
    {
      year: "2019",
      title: "Founded",
      description: "PharmaCare was established with a mission to provide quality healthcare",
    },
    {
      year: "2022",
      title: "First Expansion",
      description: "Opened our second location in another regions",
    },
    {
      year: "2023",
      title: "Digital Platform",
      description: "Launched our online platform for convenient ordering",
    },
    {
      year: "2024",
      title: "10,000 Customers",
      description: "Reached the milestone of serving 10,000+ customers",
    },
    {
      year: "2025",
      title: "Award Recognition",
      description: "Received the Healthcare Excellence Award",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="bg-white/20 text-white hover:bg-white/30 px-4 py-2">
              <Stethoscope className="w-4 h-4 mr-2" />
              {t("about")}
            </Badge>
            <h1 className="text-5xl font-bold">About Amadea</h1>
            <p className="text-xl opacity-90 leading-relaxed">
              AMADEA is committed to supplying high-quality laboratory reagents and consumables for scientific, industrial, and medical use. Since 2019, we have been building strong partnerships with laboratories across the region, focusing on quality, safety, and service you can rely on
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  To provide reliable, high-quality laboratory reagents and consumables that support scientific research, diagnostics, and innovation. At AMADEA, we aim to become a trusted partner for laboratories by offering certified products, responsive service, and consistent quality.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-4">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                    <span className="text-gray-700">Certified reagents from trusted manufacturers</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                    <span className="text-gray-700">Expert support for product selection and application</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                    <span className="text-gray-700">Fast and reliable delivery for uninterrupted lab work</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
             <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 max-w-md lg:max-w-lg mx-auto">
                <Image
                  src="/images/about_us.jpg"
                  alt="Our Mission"
                  width={400}
                  height={400}
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These values guide everything we do and reflect our dedication to quality, reliability, and scientific integrity in every product we deliver.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center p-8 hover:shadow-xl transition-all duration-300 border-0 shadow-lg"
              >
                <CardContent className="space-y-4 p-0">
                  <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Achievements</h2>
            <p className="text-xl text-gray-600">Milestones that reflect our commitment to excellence</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="text-center p-8 hover:shadow-xl transition-all duration-300 border-0 shadow-lg"
              >
                <CardContent className="space-y-4 p-0">
                  <div className="mx-auto w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center">
                    {achievement.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{achievement.title}</h3>
                  <p className="text-gray-600">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      {/* <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Expert Team</h2>
            <p className="text-xl text-gray-600">
              Our licensed pharmacists and healthcare professionals are here to serve you
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="relative mb-6">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={128}
                      height={128}
                      className="w-32 h-32 rounded-full mx-auto object-cover"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-blue-600 rounded-full p-2">
                      <Pill className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                  <div className="space-y-1 text-sm text-gray-600">
                    <p>{member.experience} experience</p>
                    <p>Specializes in {member.specialization}</p>
                  </div>
                  <div className="flex justify-center mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">Key milestones in our growth and development</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center mb-12 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                    <Card className="shadow-lg border-0">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-2 mb-2">
                          <TrendingUp className="w-5 h-5 text-blue-600" />
                          <span className="text-2xl font-bold text-blue-600">{milestone.year}</span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                </div>
              ))}
            </div>
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
              <Link href="/products">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4">
                  <Pill className="mr-2 w-5 h-5" />
                  Browse Products
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 bg-transparent"
                >
                  <Users className="mr-2 w-5 h-5" />
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

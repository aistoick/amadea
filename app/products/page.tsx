"use client"

import React from "react"
import type { ReactNode } from "react"
import { useState, useMemo, useCallback } from "react"
import { useLanguage } from "@/components/language-provider"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Search,
  Filter,
  Star,
  Heart,
  Pill,
  FlaskConical,
  Microscope,
  Zap,
  Target,
  Shield,
  Info,
  AlertTriangle,
} from "lucide-react"
import Image from "next/image"

interface Product {
  id: number
  name: string
  category: string
  categoryName: string
  price: number
  originalPrice?: number
  image: string
  rating: number
  reviews: number
  inStock: boolean
  description: string
  brand: string
  isNew: boolean
  isSale: boolean
  icon: ReactNode
  ingredients: string[]
  dosage: string
  sideEffects: string[]
  warnings: string[]
  storage: string
  manufacturer: string
  expiryDate: string
  batchNumber: string
}

const ProductCard = React.memo(({ product, t }: { product: Product; t: (key: string) => string }) => {
  return (
    <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden h-full flex flex-col">
      {/* Product Image - Full Coverage */}
      <div className="relative h-64 bg-white overflow-hidden">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          width={300}
          height={300}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />

        <div className="absolute top-4 left-4">
          <Badge className="bg-blue-600 text-white text-xs shadow-lg">
            <div className="mr-2">{product.icon}</div>
            {product.categoryName}
          </Badge>
        </div>
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          {product.isNew && (
            <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs shadow-lg">New</Badge>
          )}
          {product.isSale && (
            <Badge className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs shadow-lg">Sale</Badge>
          )}
        </div>
        <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white rounded-full p-3 shadow-xl z-10">
          <Heart className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      <CardContent className="p-6 flex-1 flex flex-col">
        <h3 className="text-lg font-bold mb-2 text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors min-h-[3.5rem]">
          {product.name}
        </h3>
        <p className="text-gray-600 mb-3 text-sm line-clamp-2 min-h-[2.5rem] flex-1">{product.description}</p>

        <div className="flex items-center mb-3">
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600 ml-2 font-medium">({product.reviews})</span>
        </div>

        <div className="flex items-center justify-between mb-4">
          <Badge
            variant={product.inStock ? "default" : "destructive"}
            className="bg-green-100 text-green-800 font-semibold"
          >
            {product.inStock ? t("inStock") : t("outOfStock")}
          </Badge>
        </div>

        <div className="mt-auto">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                {t("viewDetails")}
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-gray-900 flex items-center">
                  <div className="mr-3">{product.icon}</div>
                  {product.name}
                </DialogTitle>
              </DialogHeader>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Product Image */}
                <div className="space-y-4">
                  <div className="relative">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={400}
                      height={320}
                      className="w-full h-80 object-cover rounded-xl shadow-lg"
                    />
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                      {product.isNew && <Badge className="bg-green-500 text-white">New</Badge>}
                      {product.isSale && <Badge className="bg-red-500 text-white">Sale</Badge>}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                        />
                      ))}
                      <span className="ml-2 text-gray-600">({product.reviews})</span>
                    </div>
                  </div>
                </div>

                {/* Product Details */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Description</h3>
                    <p className="text-gray-600 leading-relaxed">{product.description}</p>
                  </div>

                  <Tabs defaultValue="ingredients" className="w-full">
                    <TabsList className="grid w-full grid-cols-4">
                      <TabsTrigger value="ingredients" className="text-xs">
                        <FlaskConical className="w-4 h-4 mr-1" />
                        Components
                      </TabsTrigger>
                      <TabsTrigger value="dosage" className="text-xs">
                        <Pill className="w-4 h-4 mr-1" />
                        Protocol
                      </TabsTrigger>
                      <TabsTrigger value="warnings" className="text-xs">
                        <AlertTriangle className="w-4 h-4 mr-1" />
                        Precautions
                      </TabsTrigger>
                      <TabsTrigger value="info" className="text-xs">
                        <Info className="w-4 h-4 mr-1" />
                        Info
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="ingredients" className="mt-4">
                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-900">Kit Components:</h4>
                        <ul className="space-y-1">
                          {product.ingredients.map((ingredient, index) => (
                            <li key={index} className="text-sm text-gray-600 flex items-center">
                              <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                              {ingredient}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </TabsContent>

                    <TabsContent value="dosage" className="mt-4">
                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-900">Protocol:</h4>
                        <p className="text-sm text-gray-600 bg-blue-50 p-3 rounded-lg">{product.dosage}</p>
                        <div className="mt-3">
                          <h5 className="font-medium text-gray-900 mb-2">Technical Notes:</h5>
                          <ul className="space-y-1">
                            {product.sideEffects.map((effect, index) => (
                              <li key={index} className="text-sm text-gray-600 flex items-center">
                                <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                                {effect}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="warnings" className="mt-4">
                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-900 text-red-600">Precautions:</h4>
                        <ul className="space-y-2">
                          {product.warnings.map((warning, index) => (
                            <li key={index} className="text-sm text-red-600 bg-red-50 p-2 rounded flex items-start">
                              <AlertTriangle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                              {warning}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </TabsContent>

                    <TabsContent value="info" className="mt-4">
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-gray-50 p-3 rounded-lg">
                            <div className="text-sm font-medium text-gray-900">Manufacturer:</div>
                            <div className="text-sm text-gray-600">{product.manufacturer}</div>
                          </div>
                          <div className="bg-gray-50 p-3 rounded-lg">
                            <div className="text-sm font-medium text-gray-900">Brand:</div>
                            <div className="text-sm text-gray-600">{product.brand}</div>
                          </div>
                          <div className="bg-gray-50 p-3 rounded-lg">
                            <div className="text-sm font-medium text-gray-900">Expiry Date:</div>
                            <div className="text-sm text-gray-600">{product.expiryDate}</div>
                          </div>
                          <div className="bg-gray-50 p-3 rounded-lg">
                            <div className="text-sm font-medium text-gray-900">Batch Number:</div>
                            <div className="text-sm text-gray-600">{product.batchNumber}</div>
                          </div>
                        </div>
                        <div className="bg-blue-50 p-3 rounded-lg">
                          <div className="text-sm font-medium text-gray-900 mb-1">Storage:</div>
                          <div className="text-sm text-gray-600">{product.storage}</div>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>

                  <div className="flex gap-3 pt-4">
                    <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent">
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </CardContent>
    </Card>
  )
})

ProductCard.displayName = "ProductCard"

export default function ProductsPage() {
  const { t } = useLanguage()
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [priceRange, setPriceRange] = useState([0, 500000])
  const [sortBy, setSortBy] = useState("name")

  const categories = [
    { id: "all", name: t("allProducts"), count: 6, icon: <Pill className="w-4 h-4" /> },
    { id: "elisa-kits", name: "ELISA Kits", count: 5, icon: <FlaskConical className="w-4 h-4" /> },
    { id: "rapid-tests", name: "Rapid Tests", count: 0, icon: <Zap className="w-4 h-4" /> },
    { id: "consumables", name: "Consumables", count: 1, icon: <Target className="w-4 h-4" /> },
    { id: "human-reagents", name: "Human Reagents", count: 0, icon: <Microscope className="w-4 h-4" /> },
    { id: "reagents", name: "Reagents", count: 0, icon: <Shield className="w-4 h-4" /> },
    {
      id: "immunofluorescence",
      name: "Time-resolved immunofluorescence analyzer",
      count: 0,
      icon: <FlaskConical className="w-4 h-4" />,
    },
  ]

  const allProducts: Product[] = [
    {
      id: 1,
      name: "GH-ELISA Hema",
      category: "elisa-kits",
      categoryName: "ELISA Kits",
      price: 285000,
      originalPrice: 320000,
      image: "/images/p1.png",
      rating: 4.9,
      reviews: 87,
      inStock: true,
      description:
        "Growth Hormone ELISA Kit by Hema - High sensitivity quantitative determination of human growth hormone in serum and plasma samples.",
      brand: "Hema",
      isNew: true,
      isSale: true,
      icon: <FlaskConical className="w-4 h-4" />,
      ingredients: [
        "96-well microplate coated with anti-GH antibody",
        "Growth Hormone standards (0-40 ng/mL)",
        "HRP-conjugated detection antibody",
        "TMB substrate solution",
        "Stop solution (2N H2SO4)",
        "Wash buffer concentrate (20x)",
        "Sample diluent buffer",
      ],
      dosage:
        "Add 50μL of standards and samples to wells. Incubate 60 minutes at room temperature. Wash 5 times. Add 100μL HRP conjugate, incubate 30 minutes. Wash 5 times. Add 100μL TMB substrate, incubate 15 minutes in dark. Add 100μL stop solution. Read at 450nm within 30 minutes.",
      sideEffects: [
        "Detection range: 0.5-40 ng/mL",
        "Sensitivity: 0.1 ng/mL",
        "Intra-assay CV: <8%",
        "Inter-assay CV: <12%",
      ],
      warnings: [
        "For research use only, not for diagnostic use",
        "Handle all reagents and samples as potentially infectious",
        "Do not mix reagents from different lots",
        "Avoid contamination of reagents",
      ],
      storage: "Store at 2-8°C. Do not freeze. Stable until expiration date when stored properly.",
      manufacturer: "Hema Diagnostics",
      expiryDate: "08/2025",
      batchNumber: "GH-2024-156",
    },
    {
      id: 2,
      name: "CA 72-4 ELISA",
      category: "consumables",
      categoryName: "ELISA Kits",
      price: 195000,
      originalPrice: 225000,
      image: "/images/p2.png",
      rating: 4.7,
      reviews: 124,
      inStock: true,
      description:
        "Cancer Antigen 72-4 ELISA Kit - Quantitative determination of CA 72-4 tumor marker in human serum for cancer screening and monitoring.",
      brand: "BioAssay",
      isNew: false,
      isSale: true,
      icon: <Target className="w-4 h-4" />,
      ingredients: [
        "96-well microplate pre-coated with CA 72-4 antibody",
        "CA 72-4 calibrators (0-200 U/mL)",
        "Biotin-conjugated anti-CA 72-4 antibody",
        "Streptavidin-HRP conjugate",
        "TMB chromogen solution",
        "Stop solution",
        "Wash buffer (10x concentrate)",
        "Sample diluent",
      ],
      dosage:
        "Pipette 100μL of standards and samples into wells. Incubate 90 minutes at 37°C. Wash 4 times. Add 100μL biotin antibody, incubate 60 minutes at 37°C. Wash 4 times. Add 100μL Streptavidin-HRP, incubate 30 minutes at 37°C. Wash 5 times. Add 90μL TMB solution, incubate 15 minutes at 37°C in dark. Add 50μL stop solution. Read at 450nm immediately.",
      sideEffects: [
        "Measuring range: 2-200 U/mL",
        "Sensitivity: 1.0 U/mL",
        "Specificity: No cross-reactivity with other tumor markers",
        "Precision: CV <10%",
      ],
      warnings: [
        "For in vitro diagnostic use only",
        "Wear protective equipment when handling samples",
        "Dispose of waste according to local regulations",
        "Do not use expired reagents",
      ],
      storage: "Store kit at 2-8°C. Avoid repeated freeze-thaw cycles.",
      manufacturer: "BioAssay Technologies",
      expiryDate: "12/2025",
      batchNumber: "CA72-2024-089",
    },
    {
      id: 3,
      name: "CA 125 ELISA",
      category: "elisa-kits",
      categoryName: "ELISA Kits",
      price: 175000,
      originalPrice: 200000,
      image: "/images/p3.png",
      rating: 4.8,
      reviews: 156,
      inStock: true,
      description:
        "Cancer Antigen 125 ELISA Kit - Reliable quantitative measurement of CA 125 ovarian cancer marker in human serum and plasma.",
      brand: "DiagnoTech",
      isNew: false,
      isSale: true,
      icon: <FlaskConical className="w-4 h-4" />,
      ingredients: [
        "Antibody-coated 96-well microplate",
        "CA 125 reference standards (0-500 U/mL)",
        "Enzyme conjugate (anti-CA 125-HRP)",
        "Substrate solution (TMB)",
        "Stop solution (1M H2SO4)",
        "Concentrated wash solution (20x)",
        "Sample diluent buffer",
        "Positive and negative controls",
      ],
      dosage:
        "Add 25μL sample diluent to each well, then 25μL of standards/samples. Incubate 60 minutes at room temperature with shaking. Wash 5 times. Add 100μL enzyme conjugate, incubate 30 minutes at room temperature. Wash 5 times. Add 100μL substrate solution, incubate 15 minutes in dark. Add 100μL stop solution. Read absorbance at 450nm within 30 minutes.",
      sideEffects: [
        "Detection range: 5-500 U/mL",
        "Analytical sensitivity: 2.5 U/mL",
        "Intra-assay precision: <6%",
        "Inter-assay precision: <8%",
      ],
      warnings: [
        "For professional use only",
        "Handle specimens as potentially infectious material",
        "Use separate pipette tips for each sample",
        "Ensure proper temperature control during incubation",
      ],
      storage: "Store at 2-8°C. Do not freeze microplates. Bring reagents to room temperature before use.",
      manufacturer: "DiagnoTech Solutions",
      expiryDate: "10/2025",
      batchNumber: "CA125-2024-234",
    },
    {
      id: 4,
      name: "HE4 ELISA",
      category: "elisa-kits",
      categoryName: "ELISA Kits",
      price: 220000,
      originalPrice: 250000,
      image: "/images/p4.png",
      rating: 4.6,
      reviews: 98,
      inStock: true,
      description:
        "Human Epididymis Protein 4 ELISA Kit - Advanced biomarker assay for ovarian cancer detection and monitoring with high specificity.",
      brand: "MedLab",
      isNew: true,
      isSale: true,
      icon: <FlaskConical className="w-4 h-4" />,
      ingredients: [
        "HE4 antibody pre-coated microplate (96 wells)",
        "HE4 protein standards (0-1500 pmol/L)",
        "Detection antibody (biotinylated)",
        "Streptavidin-peroxidase conjugate",
        "TMB substrate",
        "Sulfuric acid stop solution",
        "Wash buffer concentrate (25x)",
        "Assay diluent",
        "Quality controls (low/high)",
      ],
      dosage:
        "Dispense 50μL of standards and samples into appropriate wells. Add 50μL assay diluent to each well. Incubate 2 hours at room temperature. Wash 6 times. Add 100μL detection antibody, incubate 1 hour. Wash 6 times. Add 100μL streptavidin-HRP, incubate 30 minutes. Wash 6 times. Add 100μL TMB substrate, incubate 10-20 minutes in dark. Add 100μL stop solution. Read at 450nm immediately.",
      sideEffects: [
        "Measuring range: 15-1500 pmol/L",
        "Lower detection limit: 10 pmol/L",
        "Functional sensitivity: 25 pmol/L",
        "Recovery: 95-105%",
      ],
      warnings: [
        "For research and clinical laboratory use",
        "Avoid microbial contamination of reagents",
        "Do not interchange reagents between different kit lots",
        "Ensure accurate pipetting for reliable results",
      ],
      storage: "Store unopened kit at 2-8°C. Opened reagents stable for 30 days at 2-8°C.",
      manufacturer: "MedLab Diagnostics",
      expiryDate: "06/2026",
      batchNumber: "HE4-2024-167",
    },
    {
      id: 5,
      name: "Free PSA ELISA",
      category: "elisa-kits",
      categoryName: "ELISA Kits",
      price: 165000,
      originalPrice: 185000,
      image: "/images/p5.png",
      rating: 4.7,
      reviews: 203,
      inStock: true,
      description:
        "Free Prostate-Specific Antigen ELISA Kit - Precise quantification of free PSA in serum for prostate cancer screening and diagnosis.",
      brand: "ProDiag",
      isNew: false,
      isSale: true,
      icon: <FlaskConical className="w-4 h-4" />,
      ingredients: [
        "Anti-free PSA coated microplate (96 wells)",
        "Free PSA calibrators (0-25 ng/mL)",
        "Anti-PSA detection antibody (HRP-labeled)",
        "TMB substrate solution",
        "Stop solution (2M H2SO4)",
        "Wash buffer (20x concentrated)",
        "Sample diluent",
        "Calibrator diluent",
        "Control sera (normal/elevated)",
      ],
      dosage:
        "Add 50μL of calibrators and samples to designated wells. Add 100μL of HRP-conjugated antibody to each well. Mix gently and incubate 60 minutes at 37°C. Wash 5 times thoroughly. Add 100μL TMB substrate to each well. Incubate 15 minutes at room temperature in dark. Add 50μL stop solution to each well. Read optical density at 450nm within 15 minutes.",
      sideEffects: [
        "Analytical range: 0.1-25 ng/mL",
        "Detection limit: 0.05 ng/mL",
        "Intra-assay CV: <7%",
        "Inter-assay CV: <9%",
      ],
      warnings: [
        "For in vitro diagnostic use only",
        "Use universal precautions when handling patient samples",
        "Do not use hemolyzed or lipemic samples",
        "Maintain cold chain during transport and storage",
      ],
      storage: "Store at 2-8°C. Do not freeze. Stable until expiration date when stored properly.",
      manufacturer: "ProDiag Laboratories",
      expiryDate: "09/2025",
      batchNumber: "FPSA-2024-145",
    },
    {
      id: 6,
      name: "CEA ELISA",
      category: "elisa-kits",
      categoryName: "ELISA Kits",
      price: 155000,
      originalPrice: 175000,
      image: "/images/p6.png",
      rating: 4.8,
      reviews: 178,
      inStock: true,
      description:
        "Carcinoembryonic Antigen ELISA Kit - Quantitative determination of CEA tumor marker in human serum for cancer monitoring and prognosis.",
      brand: "BioMarker",
      isNew: false,
      isSale: true,
      icon: <FlaskConical className="w-4 h-4" />,
      ingredients: [
        "CEA antibody-coated microplate (96 wells)",
        "CEA standards (0-100 ng/mL)",
        "Biotin-conjugated anti-CEA antibody",
        "Avidin-HRP conjugate",
        "TMB chromogenic substrate",
        "Stop solution (H2SO4)",
        "Wash buffer concentrate (10x)",
        "Sample diluent buffer",
        "Standard diluent",
      ],
      dosage:
        "Pipette 100μL of standards and samples into wells. Incubate 2 hours at room temperature. Wash 4 times. Add 100μL biotin-conjugated antibody to each well. Incubate 1 hour at room temperature. Wash 4 times. Add 100μL Avidin-HRP to each well. Incubate 30 minutes at room temperature. Wash 5 times. Add 100μL TMB substrate. Incubate 15 minutes in dark. Add 100μL stop solution. Read at 450nm immediately.",
      sideEffects: [
        "Standard range: 0.5-100 ng/mL",
        "Minimum detectable dose: 0.3 ng/mL",
        "Specificity: >95%",
        "Linearity: R² >0.99",
      ],
      warnings: [
        "For laboratory professional use only",
        "Treat all samples as potentially infectious",
        "Avoid cross-contamination between samples",
        "Follow proper waste disposal procedures",
      ],
      storage: "Store kit components at 2-8°C. Avoid exposure to light and heat.",
      manufacturer: "BioMarker Technologies",
      expiryDate: "11/2025",
      batchNumber: "CEA-2024-198",
    },
  ]

  const filteredProducts = useMemo(() => {
    const filtered = allProducts.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]

      return matchesSearch && matchesCategory && matchesPrice
    })

    filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price
        case "price-high":
          return b.price - a.price
        case "rating":
          return b.rating - a.rating
        case "newest":
          return b.isNew ? 1 : -1
        default:
          return a.name.localeCompare(b.name)
      }
    })

    return filtered
  }, [searchTerm, selectedCategory, priceRange, sortBy])

  const handleCategoryChange = useCallback((categoryId: string) => {
    setSelectedCategory(categoryId)
  }, [])

  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }, [])

  const handlePriceRangeChange = useCallback((value: number[]) => {
    setPriceRange(value)
  }, [])

  const handleSortChange = useCallback((value: string) => {
    setSortBy(value)
  }, [])

  return (
    <div className="py-8 bg-gradient-to-br from-gray-50 to-blue-50/20 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-80 space-y-6">
            <Card className="shadow-xl border-0 overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900 flex items-center">
                    <Filter className="w-5 h-5 mr-2 text-blue-600" />
                    {t("categories")}
                  </h2>
                </div>

                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => handleCategoryChange(category.id)}
                      className={`w-full flex items-center justify-between p-4 rounded-xl text-left transition-all duration-300 ${
                        selectedCategory === category.id
                          ? "bg-blue-600 text-white shadow-lg"
                          : "hover:bg-blue-50 text-gray-700 hover:shadow-md"
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`${selectedCategory === category.id ? "text-white" : "text-blue-600"}`}>
                          {category.icon}
                        </div>
                        <span className="text-sm font-semibold">{category.name}</span>
                      </div>
                      <Badge
                        variant="secondary"
                        className={`${
                          selectedCategory === category.id ? "bg-white/20 text-white" : "bg-blue-600/10 text-blue-600"
                        }`}
                      >
                        {category.count}
                      </Badge>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Price Range Filter */}
            {/* <Card className="shadow-xl border-0">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-4 flex items-center text-gray-900">
                  <Pill className="w-5 h-5 mr-2 text-blue-600" />
                  {t("priceRange")}
                </h3>
                <div className="space-y-4">
                  <Slider
                    value={priceRange}
                    onValueChange={handlePriceRangeChange}
                    max={500000}
                    min={0}
                    step={5000}
                    className="w-full"
                  />
                  <div className="flex items-center justify-between text-sm text-gray-600 font-medium">
                    <span>{priceRange[0].toLocaleString()} UZS</span>
                    <span>{priceRange[1].toLocaleString()} UZS</span>
                  </div>
                </div>
              </CardContent>
            </Card> */}
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Search and Sort */}
            <div className="mb-8 space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    placeholder={t("searchProducts")}
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="pl-12 h-14 border-gray-300 focus:border-blue-600 shadow-lg rounded-xl font-medium"
                  />
                </div>
                <Select value={sortBy} onValueChange={handleSortChange}>
                  <SelectTrigger className="w-full md:w-48 h-14 shadow-lg rounded-xl border-gray-300">
                    <SelectValue placeholder={t("sortBy")} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="name">Name A-Z</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="newest">Newest First</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center space-x-2 text-gray-600">
                <Microscope className="w-5 h-5 text-blue-600" />
                <span className="font-semibold">{filteredProducts.length}</span>
                <span>{t("productsFound")}</span>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} t={t} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <div className="text-gray-400 mb-4">
                  <Search className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No products found</h3>
                <p className="text-gray-500">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

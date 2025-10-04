"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
<<<<<<< HEAD
import { Heart, Copy, Star, BookOpen, Smile } from "lucide-react"
=======
import { Input } from "@/components/ui/input"
import { Toast } from "@/components/ui/toast"
import { Heart, Copy, Star, BookOpen, Smile, Search, Share2, TrendingUp } from "lucide-react"
>>>>>>> 5e4795c (Primeiro commit - Preparando projeto para Netlify)
import Link from "next/link"
import { useFavorites } from "@/lib/favorites-context"
import { useState, useMemo } from "react"

const allPickupLines = [
<<<<<<< HEAD
=======
  // Românticas
>>>>>>> 5e4795c (Primeiro commit - Preparando projeto para Netlify)
  {
    id: 1,
    text: "Você deve ser uma bênção, porque desde que te vi, minha vida mudou para melhor.",
    category: "Romântica",
    icon: Heart,
    color: "bg-pink-100 text-pink-800",
  },
  {
    id: 2,
<<<<<<< HEAD
    text: "Se Deus criou algo mais belo que você, deve ter guardado só para Ele no céu.",
    category: "Bíblica",
    icon: BookOpen,
    color: "bg-blue-100 text-blue-800",
  },
  {
    id: 3,
    text: "Você é a resposta para todas as minhas orações... literalmente!",
    category: "Engraçada",
    icon: Smile,
    color: "bg-yellow-100 text-yellow-800",
  },
  {
    id: 4,
=======
>>>>>>> 5e4795c (Primeiro commit - Preparando projeto para Netlify)
    text: "Deus deve ter usado todo o Seu amor quando te criou.",
    category: "Romântica",
    icon: Heart,
    color: "bg-pink-100 text-pink-800",
  },
  {
<<<<<<< HEAD
    id: 5,
    text: "Você é como Provérbios 31: uma mulher virtuosa cujo valor excede o de rubis.",
    category: "Bíblica",
    icon: BookOpen,
    color: "bg-blue-100 text-blue-800",
  },
  {
    id: 6,
    text: "Se eu fosse Josué, pediria ao sol para parar só para ter mais tempo contigo.",
    category: "Bíblica",
    icon: BookOpen,
    color: "bg-blue-100 text-blue-800",
  },
  {
    id: 7,
=======
    id: 3,
>>>>>>> 5e4795c (Primeiro commit - Preparando projeto para Netlify)
    text: "Você deve ser um anjo, porque trouxe o céu para a minha vida.",
    category: "Romântica",
    icon: Heart,
    color: "bg-pink-100 text-pink-800",
  },
  {
<<<<<<< HEAD
    id: 8,
    text: "Deus realmente se superou quando te criou... e olha que Ele já tinha feito o pôr do sol!",
    category: "Engraçada",
    icon: Smile,
    color: "bg-yellow-100 text-yellow-800",
  },
  {
    id: 9,
    text: "Você é como a fé: não posso ver, mas sei que é real e transforma tudo.",
    category: "Inspiradora",
    icon: Star,
    color: "bg-purple-100 text-purple-800",
  },
  {
    id: 10,
    text: "Se o amor é paciente e bondoso, então você deve ser a definição perfeita do amor.",
    category: "Bíblica",
    icon: BookOpen,
    color: "bg-blue-100 text-blue-800",
  },
  {
    id: 11,
    text: "Você é como o fruto do Espírito: amor, alegria, paz... tudo em uma pessoa só.",
    category: "Bíblica",
    icon: BookOpen,
    color: "bg-blue-100 text-blue-800",
  },
  {
    id: 12,
    text: "Se eu pudesse reescrever o Gênesis, começaria com 'No princípio, Deus criou você'.",
    category: "Engraçada",
    icon: Smile,
    color: "bg-yellow-100 text-yellow-800",
  },
  {
    id: 13,
    text: "Você é como a prova de que Deus tem um senso de humor perfeito e um coração cheio de amor.",
    category: "Inspiradora",
    icon: Star,
    color: "bg-purple-100 text-purple-800",
  },
  {
    id: 14,
    text: "Como Rute seguiu Noemi, eu seguiria você até o fim do mundo.",
    category: "Bíblica",
    icon: BookOpen,
    color: "bg-blue-100 text-blue-800",
  },
  {
    id: 15,
=======
    id: 4,
>>>>>>> 5e4795c (Primeiro commit - Preparando projeto para Netlify)
    text: "Você é como um salmo: cada palavra sua traz paz ao meu coração.",
    category: "Romântica",
    icon: Heart,
    color: "bg-pink-100 text-pink-800",
  },
  {
<<<<<<< HEAD
    id: 16,
=======
    id: 5,
>>>>>>> 5e4795c (Primeiro commit - Preparando projeto para Netlify)
    text: "Se Deus pintou o arco-íris, imagino que cores Ele usou para pintar seus olhos.",
    category: "Romântica",
    icon: Heart,
    color: "bg-pink-100 text-pink-800",
  },
  {
<<<<<<< HEAD
    id: 17,
    text: "Você deve ser uma parábola, porque cada momento contigo ensina algo sobre o amor.",
    category: "Inspiradora",
    icon: Star,
    color: "bg-purple-100 text-purple-800",
  },
  {
    id: 18,
    text: "Se eu fosse Moisés, pediria para Deus abrir o mar só para caminhar até você.",
    category: "Engraçada",
    icon: Smile,
    color: "bg-yellow-100 text-yellow-800",
  },
  {
    id: 19,
    text: "Você é como a graça de Deus: imerecida, mas transformadora.",
=======
    id: 6,
    text: "Se o amor move montanhas, o seu sorriso deve mover continentes.",
    category: "Romântica",
    icon: Heart,
    color: "bg-pink-100 text-pink-800",
  },
  {
    id: 7,
    text: "Você é a melodia mais bonita que Deus já compôs.",
    category: "Romântica",
    icon: Heart,
    color: "bg-pink-100 text-pink-800",
  },
  {
    id: 8,
    text: "Seu sorriso ilumina meu dia como o sol ilumina a manhã.",
    category: "Romântica",
    icon: Heart,
    color: "bg-pink-100 text-pink-800",
  },
  {
    id: 9,
    text: "Você é como uma estrela: mesmo de longe, ilumina minha vida.",
    category: "Romântica",
    icon: Heart,
    color: "bg-pink-100 text-pink-800",
  },
  {
    id: 10,
    text: "Deus criou as flores, mas você é a mais bela de todas.",
    category: "Romântica",
    icon: Heart,
    color: "bg-pink-100 text-pink-800",
  },
  {
    id: 11,
    text: "Seu olhar é como um abraço que aquece minha alma.",
    category: "Romântica",
    icon: Heart,
    color: "bg-pink-100 text-pink-800",
  },
  {
    id: 12,
    text: "Você é a prova de que Deus é um artista perfeito.",
    category: "Romântica",
    icon: Heart,
    color: "bg-pink-100 text-pink-800",
  },
  {
    id: 13,
    text: "Cada momento ao seu lado é um presente de Deus.",
    category: "Romântica",
    icon: Heart,
    color: "bg-pink-100 text-pink-800",
  },
  {
    id: 14,
    text: "Você é como um jardim: cada dia descubro uma nova beleza em você.",
    category: "Romântica",
    icon: Heart,
    color: "bg-pink-100 text-pink-800",
  },
  {
    id: 15,
    text: "Seu coração bondoso é mais precioso que qualquer tesouro.",
    category: "Romântica",
    icon: Heart,
    color: "bg-pink-100 text-pink-800",
  },

  // Bíblicas
  {
    id: 16,
    text: "Se Deus criou algo mais belo que você, deve ter guardado só para Ele no céu.",
    category: "Bíblica",
    icon: BookOpen,
    color: "bg-blue-100 text-blue-800",
  },
  {
    id: 17,
    text: "Você é como Provérbios 31: uma mulher virtuosa cujo valor excede o de rubis.",
    category: "Bíblica",
    icon: BookOpen,
    color: "bg-blue-100 text-blue-800",
  },
  {
    id: 18,
    text: "Se eu fosse Josué, pediria ao sol para parar só para ter mais tempo contigo.",
    category: "Bíblica",
    icon: BookOpen,
    color: "bg-blue-100 text-blue-800",
  },
  {
    id: 19,
    text: "Se o amor é paciente e bondoso, então você deve ser a definição perfeita do amor.",
>>>>>>> 5e4795c (Primeiro commit - Preparando projeto para Netlify)
    category: "Bíblica",
    icon: BookOpen,
    color: "bg-blue-100 text-blue-800",
  },
  {
    id: 20,
<<<<<<< HEAD
    text: "Se o amor move montanhas, o seu sorriso deve mover continentes.",
    category: "Romântica",
    icon: Heart,
    color: "bg-pink-100 text-pink-800",
=======
    text: "Você é como o fruto do Espírito: amor, alegria, paz... tudo em uma pessoa só.",
    category: "Bíblica",
    icon: BookOpen,
    color: "bg-blue-100 text-blue-800",
  },
  {
    id: 21,
    text: "Como Rute seguiu Noemi, eu seguiria você até o fim do mundo.",
    category: "Bíblica",
    icon: BookOpen,
    color: "bg-blue-100 text-blue-800",
  },
  {
    id: 22,
    text: "Você é como a graça de Deus: imerecida, mas transformadora.",
    category: "Bíblica",
    icon: BookOpen,
    color: "bg-blue-100 text-blue-800",
  },
  {
    id: 23,
    text: "Você é como a arca de Noé: um refúgio seguro em meio às tempestades.",
    category: "Bíblica",
    icon: BookOpen,
    color: "bg-blue-100 text-blue-800",
  },
  {
    id: 24,
    text: "Como Ester foi escolhida para um propósito, você foi escolhida para meu coração.",
    category: "Bíblica",
    icon: BookOpen,
    color: "bg-blue-100 text-blue-800",
  },
  {
    id: 25,
    text: "Você é como o maná: um presente diário de Deus para minha vida.",
    category: "Bíblica",
    icon: BookOpen,
    color: "bg-blue-100 text-blue-800",
  },
  {
    id: 26,
    text: "Como Davi encontrou Bate-Seba, eu encontrei você: uma bênção inesperada.",
    category: "Bíblica",
    icon: BookOpen,
    color: "bg-blue-100 text-blue-800",
  },
  {
    id: 27,
    text: "Você é como a sabedoria de Salomão: rara e preciosa.",
    category: "Bíblica",
    icon: BookOpen,
    color: "bg-blue-100 text-blue-800",
  },
  {
    id: 28,
    text: "Como José esperou por seus sonhos, eu esperaria por você.",
    category: "Bíblica",
    icon: BookOpen,
    color: "bg-blue-100 text-blue-800",
  },
  {
    id: 29,
    text: "Você é como a fé de Abraão: forte, constante e inspiradora.",
    category: "Bíblica",
    icon: BookOpen,
    color: "bg-blue-100 text-blue-800",
  },
  {
    id: 30,
    text: "Como o amor de Cristo pela igreja, assim é meu amor por você.",
    category: "Bíblica",
    icon: BookOpen,
    color: "bg-blue-100 text-blue-800",
  },

  // Engraçadas
  {
    id: 31,
    text: "Você é a resposta para todas as minhas orações... literalmente!",
    category: "Engraçada",
    icon: Smile,
    color: "bg-yellow-100 text-yellow-800",
  },
  {
    id: 32,
    text: "Deus realmente se superou quando te criou... e olha que Ele já tinha feito o pôr do sol!",
    category: "Engraçada",
    icon: Smile,
    color: "bg-yellow-100 text-yellow-800",
  },
  {
    id: 33,
    text: "Se eu pudesse reescrever o Gênesis, começaria com 'No princípio, Deus criou você'.",
    category: "Engraçada",
    icon: Smile,
    color: "bg-yellow-100 text-yellow-800",
  },
  {
    id: 34,
    text: "Se eu fosse Moisés, pediria para Deus abrir o mar só para caminhar até você.",
    category: "Engraçada",
    icon: Smile,
    color: "bg-yellow-100 text-yellow-800",
  },
  {
    id: 35,
    text: "Você deve ter um mapa, porque me perdi nos seus olhos!",
    category: "Engraçada",
    icon: Smile,
    color: "bg-yellow-100 text-yellow-800",
  },
  {
    id: 36,
    text: "Se beleza fosse pecado, você precisaria de muito perdão!",
    category: "Engraçada",
    icon: Smile,
    color: "bg-yellow-100 text-yellow-800",
  },
  {
    id: 37,
    text: "Você deve ser o fruto proibido, porque não consigo resistir!",
    category: "Engraçada",
    icon: Smile,
    color: "bg-yellow-100 text-yellow-800",
  },
  {
    id: 38,
    text: "Se eu fosse Adão, você seria minha Eva... mas sem a parte da maçã!",
    category: "Engraçada",
    icon: Smile,
    color: "bg-yellow-100 text-yellow-800",
  },
  {
    id: 39,
    text: "Você é como o WiFi da igreja: todo mundo quer se conectar!",
    category: "Engraçada",
    icon: Smile,
    color: "bg-yellow-100 text-yellow-800",
  },
  {
    id: 40,
    text: "Se eu fosse Sansão, você seria minha força... mas não cortaria meu cabelo!",
    category: "Engraçada",
    icon: Smile,
    color: "bg-yellow-100 text-yellow-800",
  },
  {
    id: 41,
    text: "Você é como o dízimo: 10% não é suficiente, quero dar 100%!",
    category: "Engraçada",
    icon: Smile,
    color: "bg-yellow-100 text-yellow-800",
  },
  {
    id: 42,
    text: "Se eu fosse Noé, construiria uma arca só para nós dois!",
    category: "Engraçada",
    icon: Smile,
    color: "bg-yellow-100 text-yellow-800",
  },

  // Inspiradoras
  {
    id: 43,
    text: "Você é como a fé: não posso ver, mas sei que é real e transforma tudo.",
    category: "Inspiradora",
    icon: Star,
    color: "bg-purple-100 text-purple-800",
  },
  {
    id: 44,
    text: "Você é como a prova de que Deus tem um senso de humor perfeito e um coração cheio de amor.",
    category: "Inspiradora",
    icon: Star,
    color: "bg-purple-100 text-purple-800",
  },
  {
    id: 45,
    text: "Você deve ser uma parábola, porque cada momento contigo ensina algo sobre o amor.",
    category: "Inspiradora",
    icon: Star,
    color: "bg-purple-100 text-purple-800",
  },
  {
    id: 46,
    text: "Você é como a luz: onde você está, as trevas não podem permanecer.",
    category: "Inspiradora",
    icon: Star,
    color: "bg-purple-100 text-purple-800",
  },
  {
    id: 47,
    text: "Sua presença é como uma oração respondida.",
    category: "Inspiradora",
    icon: Star,
    color: "bg-purple-100 text-purple-800",
  },
  {
    id: 48,
    text: "Você é como a esperança: mesmo nos dias difíceis, me faz acreditar em dias melhores.",
    category: "Inspiradora",
    icon: Star,
    color: "bg-purple-100 text-purple-800",
  },
  {
    id: 49,
    text: "Você é como um milagre: algo que só Deus poderia fazer.",
    category: "Inspiradora",
    icon: Star,
    color: "bg-purple-100 text-purple-800",
  },
  {
    id: 50,
    text: "Sua bondade é como uma semente: planta amor onde quer que vá.",
    category: "Inspiradora",
    icon: Star,
    color: "bg-purple-100 text-purple-800",
  },
  {
    id: 51,
    text: "Você é como a paz de Deus: supera todo entendimento.",
    category: "Inspiradora",
    icon: Star,
    color: "bg-purple-100 text-purple-800",
  },
  {
    id: 52,
    text: "Você é como um testemunho vivo do amor de Deus.",
    category: "Inspiradora",
    icon: Star,
    color: "bg-purple-100 text-purple-800",
>>>>>>> 5e4795c (Primeiro commit - Preparando projeto para Netlify)
  },
]

const categories = [
<<<<<<< HEAD
  { name: "Todas", count: allPickupLines.length },
  { name: "Romântica", count: allPickupLines.filter((line) => line.category === "Romântica").length },
  { name: "Bíblica", count: allPickupLines.filter((line) => line.category === "Bíblica").length },
  { name: "Engraçada", count: allPickupLines.filter((line) => line.category === "Engraçada").length },
  { name: "Inspiradora", count: allPickupLines.filter((line) => line.category === "Inspiradora").length },
=======
  { name: "Todas", count: "+52" },
  { name: "Romântica", count: "+15" },
  { name: "Bíblica", count: "+15" },
  { name: "Engraçada", count: "+12" },
  { name: "Inspiradora", count: "+10" },
>>>>>>> 5e4795c (Primeiro commit - Preparando projeto para Netlify)
]

export default function CantadasPage() {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites()
  const [selectedCategory, setSelectedCategory] = useState("Todas")
  const [displayCount, setDisplayCount] = useState(9)
<<<<<<< HEAD

  const filteredLines = useMemo(() => {
    if (selectedCategory === "Todas") {
      return allPickupLines
    }
    return allPickupLines.filter((line) => line.category === selectedCategory)
  }, [selectedCategory])
=======
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState<"default" | "popular">("default")
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" | "info" } | null>(null)

  const filteredLines = useMemo(() => {
    let lines = allPickupLines

    if (selectedCategory !== "Todas") {
      lines = lines.filter((line) => line.category === selectedCategory)
    }

    if (searchQuery.trim()) {
      lines = lines.filter((line) => line.text.toLowerCase().includes(searchQuery.toLowerCase()))
    }

    if (sortBy === "popular") {
      lines = [...lines].sort((a, b) => {
        const aFav = isFavorite(a.text) ? 1 : 0
        const bFav = isFavorite(b.text) ? 1 : 0
        return bFav - aFav
      })
    }

    return lines
  }, [selectedCategory, searchQuery, sortBy, isFavorite])
>>>>>>> 5e4795c (Primeiro commit - Preparando projeto para Netlify)

  const displayedLines = filteredLines.slice(0, displayCount)
  const hasMoreLines = displayCount < filteredLines.length

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
<<<<<<< HEAD
=======
    setToast({ message: "Cantada copiada!", type: "success" })
>>>>>>> 5e4795c (Primeiro commit - Preparando projeto para Netlify)
  }

  const toggleFavorite = (line: any) => {
    if (isFavorite(line.text)) {
      const favoriteId = line.id.toString()
      removeFavorite(favoriteId)
<<<<<<< HEAD
=======
      setToast({ message: "Removido dos favoritos", type: "info" })
>>>>>>> 5e4795c (Primeiro commit - Preparando projeto para Netlify)
    } else {
      addFavorite({
        type: "cantada",
        title: `Cantada ${line.category}`,
        content: line.text,
        category: line.category,
      })
<<<<<<< HEAD
    }
  }

=======
      setToast({ message: "Adicionado aos favoritos!", type: "success" })
    }
  }

  const shareToWhatsApp = (text: string) => {
    const message = encodeURIComponent(`${text}\n\n✨ Via Cantadas Cristãs`)
    window.open(`https://wa.me/?text=${message}`, "_blank")
  }

>>>>>>> 5e4795c (Primeiro commit - Preparando projeto para Netlify)
  const loadMore = () => {
    setDisplayCount((prev) => prev + 9)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <Heart className="h-6 w-6 text-primary" />
              <h1 className="text-xl font-bold text-foreground">Cantadas Cristãs</h1>
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <Link href="/cantadas" className="text-primary font-medium">
                Cantadas
              </Link>
              <Link href="/mensagens" className="text-muted-foreground hover:text-foreground transition-colors">
                Mensagens
              </Link>
              <Link href="/dicas" className="text-muted-foreground hover:text-foreground transition-colors">
                Dicas
              </Link>
              <Link href="/versos" className="text-muted-foreground hover:text-foreground transition-colors">
                Versículos
              </Link>
            </div>
            <Link href="/favoritos">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Favoritos</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4">Biblioteca de Cantadas Cristãs</h2>
<<<<<<< HEAD
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            Cantadas respeitosas que honram os valores cristãos e demonstram interesse genuíno
          </p>
=======
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto mb-8">
            Cantadas respeitosas que honram os valores cristãos e demonstram interesse genuíno
          </p>
          <div className="max-w-2xl mx-auto flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Buscar cantadas..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value)
                  setDisplayCount(9)
                }}
                className="pl-10 bg-background"
              />
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as "default" | "popular")}
              className="px-4 py-2 rounded-md border border-input bg-background text-foreground"
            >
              <option value="default">Padrão</option>
              <option value="popular">Mais Populares</option>
            </select>
          </div>
>>>>>>> 5e4795c (Primeiro commit - Preparando projeto para Netlify)
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {categories.map((category) => (
              <Badge
                key={category.name}
                variant={selectedCategory === category.name ? "default" : "secondary"}
                className="px-4 py-2 text-sm cursor-pointer hover:bg-primary/10 transition-colors"
                onClick={() => {
                  setSelectedCategory(category.name)
                  setDisplayCount(9)
                }}
              >
                {category.name} ({category.count})
              </Badge>
            ))}
          </div>
<<<<<<< HEAD
=======
          <p className="text-center text-muted-foreground text-sm">
            Mostrando {displayedLines.length} de {filteredLines.length} cantadas
          </p>
>>>>>>> 5e4795c (Primeiro commit - Preparando projeto para Netlify)
        </div>
      </section>

      {/* Pickup Lines Grid */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
<<<<<<< HEAD
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
=======
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
>>>>>>> 5e4795c (Primeiro commit - Preparando projeto para Netlify)
            {displayedLines.map((line) => {
              const IconComponent = line.icon
              const isLineFavorite = isFavorite(line.text)
              return (
<<<<<<< HEAD
                <Card key={line.id} className="bg-card border-border hover:shadow-md transition-all duration-200 group">
=======
                <Card
                  key={line.id}
                  className="bg-card border-border hover:shadow-lg transition-all duration-300 group hover:-translate-y-1"
                >
>>>>>>> 5e4795c (Primeiro commit - Preparando projeto para Netlify)
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <Badge className={line.color}>
                        <IconComponent className="h-3 w-3 mr-1" />
                        {line.category}
                      </Badge>
                      <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleFavorite(line)}
                          className={isLineFavorite ? "text-primary" : ""}
<<<<<<< HEAD
                        >
                          <Heart className={`h-4 w-4 ${isLineFavorite ? "fill-current" : ""}`} />
                        </Button>
                        <Button variant="ghost" size="sm" onClick={() => copyToClipboard(line.text)}>
                          <Copy className="h-4 w-4" />
                        </Button>
=======
                          title="Favoritar"
                        >
                          <Heart className={`h-4 w-4 ${isLineFavorite ? "fill-current" : ""}`} />
                        </Button>
                        <Button variant="ghost" size="sm" onClick={() => copyToClipboard(line.text)} title="Copiar">
                          <Copy className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => shareToWhatsApp(line.text)}
                          title="Compartilhar no WhatsApp"
                        >
                          <Share2 className="h-4 w-4" />
                        </Button>
>>>>>>> 5e4795c (Primeiro commit - Preparando projeto para Netlify)
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
<<<<<<< HEAD
                    <blockquote className="text-foreground text-lg leading-relaxed italic">"{line.text}"</blockquote>
=======
                    <blockquote className="text-foreground text-base sm:text-lg leading-relaxed italic">
                      "{line.text}"
                    </blockquote>
>>>>>>> 5e4795c (Primeiro commit - Preparando projeto para Netlify)
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {hasMoreLines && (
            <div className="text-center mt-12">
<<<<<<< HEAD
              <Button variant="outline" size="lg" className="px-8 bg-transparent" onClick={loadMore}>
=======
              <Button
                variant="outline"
                size="lg"
                className="px-8 bg-transparent hover:bg-primary/10 transition-all"
                onClick={loadMore}
              >
                <TrendingUp className="h-4 w-4 mr-2" />
>>>>>>> 5e4795c (Primeiro commit - Preparando projeto para Netlify)
                Carregar Mais Cantadas ({filteredLines.length - displayCount} restantes)
              </Button>
            </div>
          )}
<<<<<<< HEAD
=======

          {filteredLines.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg mb-4">Nenhuma cantada encontrada</p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery("")
                  setSelectedCategory("Todas")
                }}
              >
                Limpar Filtros
              </Button>
            </div>
          )}
>>>>>>> 5e4795c (Primeiro commit - Preparando projeto para Netlify)
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-foreground mb-4">Gostou das cantadas?</h3>
          <p className="text-xl text-muted-foreground mb-8">
            Explore nossas mensagens prontas e dicas para relacionamentos cristãos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
<<<<<<< HEAD
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Ver Mensagens Prontas
            </Button>
            <Button variant="outline" size="lg">
              Dicas de Relacionamento
            </Button>
          </div>
        </div>
      </section>
=======
            <Link href="/mensagens">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Ver Mensagens Prontas
              </Button>
            </Link>
            <Link href="/dicas">
              <Button variant="outline" size="lg">
                Dicas de Relacionamento
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Toast Notifications */}
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
>>>>>>> 5e4795c (Primeiro commit - Preparando projeto para Netlify)
    </div>
  )
}

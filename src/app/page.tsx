import FilterBar from "@/shared/components/filter-bar"
import Footer from "@/shared/components/footer"
import ImageGallery from "@/subdomains/Galery/components/image-gallery"

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <section className="container mx-auto px-4 py-8 flex-grow">
        <h1 className="text-4xl text-center font-bold mb-8">Galeria de Imagens</h1>
        <ImageGallery />
      </section>
      <Footer />
    </main>
  )
}

"use client"
import { Skeleton } from "@/components/ui/skeleton"
import { ImageData } from "@/shared/@types/image"
import { usePicsum } from "@/shared/api/picsum"
import FilterBar from "@/shared/components/filter-bar"
import ImageCard from "@/shared/components/image-card"
import ImageModal from "@/shared/components/image-modal"
import { useFilteredImages } from "@/shared/hooks/filter-images"
import { useMemo, useState } from "react"

export default function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null)
  const { images, isLoading, error } = usePicsum(12, 1)

  const {filteredImages , setSearchQuery , setSelectedCategory} = useFilteredImages(images)


  if (isLoading)
    return (
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array.from({ length: 12 }).map((_, index) => (
          <div key={index}>
            <Skeleton className="w-full h-64 rounded-lg" />
          </div>
        ))}
      </section>
    )

  if (error) return <p>Erro ao carregar imagens.</p>

  return (
    <>
      <FilterBar
        onSearch={(query) => setSearchQuery(query)}
        onCategoryChange={(category) => setSelectedCategory(category)}
      />

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredImages.map((image) => (
          <div key={image.id} onClick={() => setSelectedImage(image)}>
            <ImageCard image={image} />
          </div>
        ))}
      </section>

      {selectedImage && (
        <ImageModal
          image={selectedImage}
          isOpen={!!selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </>
  )
}

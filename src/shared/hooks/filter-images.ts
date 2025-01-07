import { ImageData } from "@/shared/@types/image"
import { useMemo, useState } from "react"

export function useFilteredImages(images: ImageData[]) {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")

  const filteredImages = useMemo(() => {
    return images.filter((image) => {
      const matchesSearch = image.author
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
      const matchesCategory =
        selectedCategory === "" ||
        image.author.toLowerCase().includes(selectedCategory)
      return matchesSearch && matchesCategory
    })
  }, [images, searchQuery, selectedCategory])

  return {
    filteredImages,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
  }
}

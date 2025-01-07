import { ImageData } from "@/shared/@types/image"
import { Heart } from "lucide-react"
import NextImage from "next/image"

interface ImageCardProps {
  image: ImageData
}

export default function ImageCard({ image }: ImageCardProps) {
  return (
    <aside
      className="relative group"
      role="region"
      aria-labelledby={`image-title-${image.id}`}
      aria-describedby={`image-category-${image.id}`}
    >
      <NextImage
        src={image.download_url}
        alt={`Foto de autoria de ${image.author}`}
        width={400}
        height={300}
        className="w-full h-64 object-cover rounded-lg"
        role="img"
        layout="responsive"
      />
      <div
        className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center"
        role="group"
        aria-label="Botões de interação com a imagem"
      >
        <button
          className="text-white p-2 rounded-full bg-gray-800 bg-opacity-50 hover:bg-opacity-75 transition-colors duration-200"
          aria-label="Curtir imagem"
        >
          <Heart />
        </button>
      </div>
      <div className="mt-2">
        <h3
          id={`image-title-${image.id}`}
          className="text-lg text-center font-semibold"
        >
          {image.author}
        </h3>
        <p id={`image-category-${image.id}`} className="text-sm text-gray-500">
           {image.id}
        </p>
      </div>
    </aside>
  )
}

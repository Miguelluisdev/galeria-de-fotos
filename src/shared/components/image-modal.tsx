import { useClickOutside } from "@/shared/hooks/click-outside"
import { CircleX, Heart } from "lucide-react"
import Image from "next/image"
import { ImageModalProps } from "../@types/modal"

export default function ImageModal({
  image,
  isOpen,
  onClose,
}: ImageModalProps) {
  const modalRef = useClickOutside<HTMLDivElement>(onClose)

  if (!isOpen) return null

  return (
    <section
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      role="dialog"
      aria-labelledby={`modal-title-${image.id}`}
      aria-describedby={`modal-description-${image.id}`}
      aria-modal="true"
    >
      <div
        ref={modalRef}
        className="bg-white p-8 rounded-lg max-w-lg w-full"
        role="document"
      >
        <header className="flex justify-between items-center mb-4">
          <h2 id={`modal-title-${image.id}`} className="text-2xl font-bold">
            {image.author}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
            aria-label="Fechar modal"
          >
            <CircleX />
          </button>
        </header>

        <figure>
          <Image
            src={image.download_url}
            alt={`Foto de autoria de ${image.author}`}
            width={400}
            height={300}
            className="w-full h-auto rounded-lg mb-4"
          />
          <figcaption id={`modal-description-${image.id}`} className="sr-only">
            Imagem de {image.width} largura com {image.height} de altura
          </figcaption>
        </figure>

        <section className="flex justify-between items-center">
          <div>
            <p className="font-semibold">Autor da Imagem: {image.author}</p>
            <p className="text-sm text-gray-500">
              <a
                href={image.download_url}
                target="_blank"
                download
                rel="noreferrer noopener"
              >
                Download
              </a>
            </p>
          </div>
          <button
            className="flex items-center space-x-2 text-gray-700 hover:text-red-500"
            aria-label="Adicionar aos favoritos"
          >
            <Heart />
            <span>Favoritar</span>
          </button>
        </section>
      </div>
    </section>
  )
}

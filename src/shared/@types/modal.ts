export interface ImageProps {
  id: string
  author: string
  width?: number
  height?: number
  url: string
  download_url: string
}

export interface ImageModalProps {
  image: ImageProps
  isOpen: boolean
  onClose: () => void
}

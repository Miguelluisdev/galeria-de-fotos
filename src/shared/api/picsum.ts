import useSWR from "swr"
import { Image } from "../@types/image"

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export const usePicsum = (limit: number, page: number) => {
  const { data, error, isLoading } = useSWR<Image[]>(
    `https://picsum.photos/v2/list?page=${page}&limit=${limit}`,
    fetcher,
  )

  return {
    images: data || [],
    isLoading,
    error,
  }
}

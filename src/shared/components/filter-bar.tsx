import { Search } from "lucide-react"

interface FilterBarProps {
  onSearch: (query: string) => void
  onCategoryChange: (category: string) => void
}

export default function FilterBar({
  onSearch,
  onCategoryChange,
}: FilterBarProps) {
  const categories = ["Alejandro Escamilla", "Paul Jarvis"]

  return (
    <section
      className="mb-8 flex flex-wrap items-center gap-4"
      aria-labelledby="filter-bar-title"
    >
      <h2 id="filter-bar-title" className="sr-only">
        Barra de filtros para imagens
      </h2>

      <div className="relative flex-grow flex items-center">
        <label htmlFor="search-input" className="sr-only">
          Pesquisar imagens
        </label>
        <input
          id="search-input"
          type="text"
          placeholder="Pesquisar imagens..."
          className="w-full px-4 py-2 pl-10 pr-4 border-2 border-gray-600 rounded-md bg-white focus:outline-none focus:border-gray-800 h-10"
          onChange={(e) => onSearch(e.target.value)}
          aria-label="Pesquisar imagens"
        />
        <Search
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
          size={20}
          aria-hidden="true"
        />
      </div>

      <div className="flex items-center">
        <label htmlFor="category-filter" className="sr-only">
          Filtrar por categoria
        </label>
        <select
          id="category-filter"
          className="px-4 py-2 border-2 border-gray-600 rounded-md bg-white focus:outline-none focus:border-gray-800 h-10"
          onChange={(e) => onCategoryChange(e.target.value)}
          aria-label="Filtrar por categoria"
        >
          <option value="">Selecione uma categoria</option>
          {categories.map((category) => (
            <option key={category} value={category.toLowerCase()}>
              {category}
            </option>
          ))}
        </select>
      </div>
    </section>
  )
}

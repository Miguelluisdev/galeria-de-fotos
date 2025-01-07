export default function Footer() {
  return (
    <footer
      className="bg-gray-100 mt-8 py-4"
      aria-label="footer"
      aria-describedby="rodapé da pagina"
      aria-description=" Galeria de Fotos. Todos os direitos reservados."
    >
      <section className="container mx-auto px-4 text-center text-gray-600">
        <p>
          © {new Date().getFullYear()} Galeria de Fotos. Todos os direitos
          reservados.
        </p>
      </section>
    </footer>
  )
}

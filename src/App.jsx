const App = () => {
  return (
    <div className="bg-[url('./assets/images/Recurso1.png')] bg-cover bg-no-repeat bg-white-100 min-h-screen" >
      <header className="container mx-auto px-4">
        <div className="flex justify-center gap-20 justify-items-center px-20">
          <div>
            <button className="grow text-gray-600 text-sm py-4">
              Home
            </button>
          </div>
          <div>
            <button className="grow text-white text-sm py-4">
              About
            </button>
          </div>
          <div>
            <button className="grow text-white text-sm py-4">
              Catalogue
            </button>
          </div>
          <div>
            <button className="grow text-white text-sm py-4">
              Promo
            </button>
          </div>
          <div>
            <button className="grow text-white text-sm py-4">
              Contact
            </button>
          </div>
        </div>
      </header>

    
    </div>


  )
}
export default App;
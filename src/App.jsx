import HeroSection from './components/HeroSection'
import FeaturedProfiles from './components/FeaturedProfiles'

function App() {

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-orange-100">
      <HeroSection className = "bg-gray-100"/>
      <FeaturedProfiles className= "bg-orange-100"/>
    </div>
  )
}

export default App

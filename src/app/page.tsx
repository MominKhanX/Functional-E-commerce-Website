import Hero from './components/Hero'
import ChooseTechHub from './components/ChooseTechHub'
import TechTrends from './components/TechTrends'
import Advantages from './components/Advantages'
import Shop from './components/Shop'
import Newsletter from './components/Newsletter'

export default function Home() {
  return (
    <div className="space-y-16">
      <Hero />
      <ChooseTechHub />
      <TechTrends />
      <Advantages />
      <Shop />
      <Newsletter />
    </div>
  )
}


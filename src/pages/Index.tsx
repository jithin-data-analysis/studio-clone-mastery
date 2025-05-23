
import { Navbar } from "@/components/Navbar";
import { FeaturedStream } from "@/components/FeaturedStream";
import { StreamGrid } from "@/components/StreamGrid";
import { CategoryCard } from "@/components/CategoryCard";

const FEATURED_STREAM = {
  id: "featured1",
  title: "CHAMPIONSHIP FINALS! Team Alpha vs Team Omega",
  streamer: "ProGamer",
  thumbnailUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop",
  category: "League of Legends",
  viewers: 154823,
  description: "Watch the championship finals where Team Alpha and Team Omega battle it out for the grand prize of $1 million. Who will be crowned the champion?"
};

const LIVE_STREAMS = [
  {
    id: "stream1",
    title: "Learning React while building a game!",
    streamer: "CodeWithMike",
    thumbnail: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?q=80&w=2070&auto=format&fit=crop",
    category: "Programming",
    viewers: 1245,
  },
  {
    id: "stream2",
    title: "Late night racing with friends",
    streamer: "SpeedRunner",
    thumbnail: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?q=80&w=2070&auto=format&fit=crop",
    category: "Forza Horizon 5",
    viewers: 4521,
  },
  {
    id: "stream3",
    title: "Drawing commission requests live!",
    streamer: "ArtistPro",
    thumbnail: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2071&auto=format&fit=crop",
    category: "Art",
    viewers: 876,
  },
  {
    id: "stream4",
    title: "The Witcher 3 - First Playthrough",
    streamer: "GamerGirl",
    thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop",
    category: "The Witcher 3",
    viewers: 3254,
  },
  {
    id: "stream5",
    title: "Exploring the new expansion!",
    streamer: "MMOmaster",
    thumbnail: "https://images.unsplash.com/photo-1596467745405-53763f000254?q=80&w=2071&auto=format&fit=crop",
    category: "World of Warcraft",
    viewers: 7845,
  },
];

const RECOMMENDED_STREAMS = [
  {
    id: "rec1",
    title: "Chill music stream - Lo-Fi Beats",
    streamer: "MusicMaestro",
    thumbnail: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?q=80&w=2070&auto=format&fit=crop",
    category: "Music",
    viewers: 12543,
  },
  {
    id: "rec2",
    title: "Learning Japanese - Day 45",
    streamer: "LanguageLearner",
    thumbnail: "https://images.unsplash.com/photo-1528164344705-47542687000d?q=80&w=2069&auto=format&fit=crop",
    category: "Just Chatting",
    viewers: 532,
  },
  {
    id: "rec3",
    title: "Professional Valorant Tournament",
    streamer: "ESportsCentral",
    thumbnail: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?q=80&w=2070&auto=format&fit=crop",
    category: "Valorant",
    viewers: 24321,
  },
  {
    id: "rec4",
    title: "Cooking Challenge - Mystery Ingredients",
    streamer: "ChefMaster",
    thumbnail: "https://images.unsplash.com/photo-1556911261-6bd341186b2f?q=80&w=2070&auto=format&fit=crop",
    category: "Food & Drink",
    viewers: 4562,
  },
  {
    id: "rec5",
    title: "Building a PC live - Viewer's Edition",
    streamer: "TechGuru",
    thumbnail: "https://images.unsplash.com/photo-1547082299-de196ea013d6?q=80&w=2070&auto=format&fit=crop",
    category: "Tech",
    viewers: 8745,
  },
];

const POPULAR_CATEGORIES = [
  {
    id: "category1",
    name: "Just Chatting",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=2070&auto=format&fit=crop",
    viewers: 345000,
  },
  {
    id: "category2",
    name: "League of Legends",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop",
    viewers: 230000,
  },
  {
    id: "category3",
    name: "Valorant",
    image: "https://images.unsplash.com/photo-1614294148960-9aa740a3e4f3?q=80&w=2070&auto=format&fit=crop",
    viewers: 185000,
  },
  {
    id: "category4",
    name: "Minecraft",
    image: "https://images.unsplash.com/photo-1533665975635-d26ec811dd42?q=80&w=1974&auto=format&fit=crop",
    viewers: 145000,
  },
  {
    id: "category5",
    name: "Fortnite",
    image: "https://images.unsplash.com/photo-1589241062272-c0a000072437?q=80&w=2074&auto=format&fit=crop",
    viewers: 125000,
  },
  {
    id: "category6",
    name: "Art",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2071&auto=format&fit=crop",
    viewers: 87000,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-6">
        <section className="mb-6">
          <FeaturedStream {...FEATURED_STREAM} />
        </section>
        
        <section>
          <StreamGrid title="Live Channels" streams={LIVE_STREAMS} />
        </section>
        
        <section>
          <h2 className="text-xl font-bold mb-4">Popular Categories</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {POPULAR_CATEGORIES.map((category) => (
              <CategoryCard 
                key={category.id}
                id={category.id}
                name={category.name}
                image={category.image}
                viewers={category.viewers}
              />
            ))}
          </div>
        </section>
        
        <section>
          <StreamGrid title="Recommended Channels" streams={RECOMMENDED_STREAMS} />
        </section>
      </div>
    </div>
  );
};

export default Index;

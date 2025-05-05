
import { Navbar } from "@/components/Navbar";
import { StreamGrid } from "@/components/StreamGrid";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, SlidersHorizontal } from "lucide-react";

const ALL_STREAMS = [
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
  {
    id: "stream6",
    title: "Chill music stream - Lo-Fi Beats",
    streamer: "MusicMaestro",
    thumbnail: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?q=80&w=2070&auto=format&fit=crop",
    category: "Music",
    viewers: 12543,
  },
  {
    id: "stream7",
    title: "Learning Japanese - Day 45",
    streamer: "LanguageLearner",
    thumbnail: "https://images.unsplash.com/photo-1528164344705-47542687000d?q=80&w=2069&auto=format&fit=crop",
    category: "Just Chatting",
    viewers: 532,
  },
  {
    id: "stream8",
    title: "Professional Valorant Tournament",
    streamer: "ESportsCentral",
    thumbnail: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?q=80&w=2070&auto=format&fit=crop",
    category: "Valorant",
    viewers: 24321,
  },
  {
    id: "stream9",
    title: "Cooking Challenge - Mystery Ingredients",
    streamer: "ChefMaster",
    thumbnail: "https://images.unsplash.com/photo-1556911261-6bd341186b2f?q=80&w=2070&auto=format&fit=crop",
    category: "Food & Drink",
    viewers: 4562,
  },
  {
    id: "stream10",
    title: "Building a PC live - Viewer's Edition",
    streamer: "TechGuru",
    thumbnail: "https://images.unsplash.com/photo-1547082299-de196ea013d6?q=80&w=2070&auto=format&fit=crop",
    category: "Tech",
    viewers: 8745,
  },
  {
    id: "stream11",
    title: "Championship Finals! Team Alpha vs Team Omega",
    streamer: "ProGamer",
    thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop",
    category: "League of Legends",
    viewers: 154823,
  },
  {
    id: "stream12",
    title: "Speedrunning World Record Attempts",
    streamer: "SpeedKing",
    thumbnail: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=2070&auto=format&fit=crop",
    category: "Super Mario 64",
    viewers: 9876,
  },
];

const Browse = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <h1 className="text-2xl font-bold">Browse Streams</h1>
          
          <div className="flex gap-3 max-w-md w-full">
            <div className="relative flex-1">
              <Input 
                placeholder="Search Streams" 
                className="bg-stream-lighter border-none pl-10 pr-4 h-10"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
            </div>
            
            <Button variant="outline" size="icon" className="h-10 w-10">
              <SlidersHorizontal className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        <div className="flex gap-4 mb-6 overflow-x-auto py-2">
          {["All", "Games", "Music", "IRL", "Art", "Just Chatting", "Esports", "Creative", "Technology", "Sports"].map((filter) => (
            <Button 
              key={filter} 
              variant={filter === "All" ? "default" : "outline"}
              className={filter === "All" ? "bg-stream hover:bg-stream-hover" : ""}
              size="sm"
            >
              {filter}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {ALL_STREAMS.map((stream) => (
            <StreamCard 
              key={stream.id}
              id={stream.id}
              title={stream.title}
              streamer={stream.streamer}
              thumbnail={stream.thumbnail}
              category={stream.category}
              viewers={stream.viewers}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Browse;

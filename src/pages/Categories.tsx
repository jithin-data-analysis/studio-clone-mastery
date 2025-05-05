
import { Navbar } from "@/components/Navbar";
import { CategoryCard } from "@/components/CategoryCard";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const ALL_CATEGORIES = [
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
  {
    id: "category7",
    name: "Call of Duty: Warzone",
    image: "https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?q=80&w=1974&auto=format&fit=crop",
    viewers: 78000,
  },
  {
    id: "category8",
    name: "Grand Theft Auto V",
    image: "https://images.unsplash.com/photo-1604846887565-640d2147549e?q=80&w=1974&auto=format&fit=crop",
    viewers: 102000,
  },
  {
    id: "category9",
    name: "Apex Legends",
    image: "https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?q=80&w=1974&auto=format&fit=crop",
    viewers: 65000,
  },
  {
    id: "category10",
    name: "Dota 2",
    image: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?q=80&w=2070&auto=format&fit=crop",
    viewers: 94000,
  },
  {
    id: "category11",
    name: "Counter-Strike",
    image: "https://images.unsplash.com/photo-1586182987320-4f376d39d787?q=80&w=2787&auto=format&fit=crop",
    viewers: 112000,
  },
  {
    id: "category12",
    name: "Music",
    image: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?q=80&w=2070&auto=format&fit=crop",
    viewers: 42000,
  },
  {
    id: "category13",
    name: "Pokemon",
    image: "https://images.unsplash.com/photo-1542779283-429940ce8336?q=80&w=2070&auto=format&fit=crop",
    viewers: 35000,
  },
  {
    id: "category14",
    name: "Sports",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=2070&auto=format&fit=crop",
    viewers: 68000,
  },
  {
    id: "category15",
    name: "Science & Technology",
    image: "https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?q=80&w=2070&auto=format&fit=crop",
    viewers: 29000,
  },
  {
    id: "category16",
    name: "Food & Drink",
    image: "https://images.unsplash.com/photo-1556911261-6bd341186b2f?q=80&w=2070&auto=format&fit=crop",
    viewers: 33000,
  },
];

const Categories = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <h1 className="text-2xl font-bold">Browse Categories</h1>
          
          <div className="max-w-md w-full">
            <div className="relative">
              <Input 
                placeholder="Search Categories" 
                className="bg-stream-lighter border-none pl-10 pr-4 h-10"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {ALL_CATEGORIES.map((category) => (
            <CategoryCard 
              key={category.id}
              id={category.id}
              name={category.name}
              image={category.image}
              viewers={category.viewers}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;

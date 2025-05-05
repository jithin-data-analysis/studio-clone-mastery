
import { useParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { ChatBox } from "@/components/ChatBox";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Heart, Share2, MoreVertical, Users } from "lucide-react";
import { StreamGrid } from "@/components/StreamGrid";

// Mock data for demo purposes
const STREAM_DATA = {
  id: "stream1",
  title: "Championship Finals! Team Alpha vs Team Omega",
  streamer: "ProGamer",
  avatarUrl: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=2631&auto=format&fit=crop",
  category: "League of Legends",
  viewers: 154823,
  followers: 2500000,
};

const SIMILAR_STREAMS = [
  {
    id: "similar1",
    title: "Training for the next tournament",
    streamer: "ProPlayer2",
    thumbnail: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071&auto=format&fit=crop",
    category: "League of Legends",
    viewers: 12543,
  },
  {
    id: "similar2",
    title: "Competitive 5v5 matches with subscribers",
    streamer: "GamingLegend",
    thumbnail: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?q=80&w=2070&auto=format&fit=crop",
    category: "League of Legends",
    viewers: 8532,
  },
  {
    id: "similar3",
    title: "Road to Challenger - Solo Queue",
    streamer: "RankClimber",
    thumbnail: "https://images.unsplash.com/photo-1627856013091-fed6e4e30025?q=80&w=2070&auto=format&fit=crop",
    category: "League of Legends",
    viewers: 4321,
  },
  {
    id: "similar4",
    title: "New champion release - First impressions",
    streamer: "MetaAnalyst",
    thumbnail: "https://images.unsplash.com/photo-1580327344181-c1163234e5a0?q=80&w=2071&auto=format&fit=crop", 
    category: "League of Legends",
    viewers: 15762,
  },
];

const Stream = () => {
  const { id } = useParams();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 flex flex-col lg:flex-row">
        <div className="flex-1 overflow-y-auto">
          <div className="bg-black">
            <div className="container mx-auto">
              <AspectRatio ratio={16 / 9} className="bg-stream-dark">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="inline-block animate-pulse-subtle bg-stream-light px-4 py-2 rounded">
                      <span className="live-indicator">LIVE</span>
                      <h3 className="text-lg font-medium mt-2">Stream content would display here</h3>
                      <p className="text-muted-foreground text-sm mt-1">
                        (Video player placeholder)
                      </p>
                    </div>
                  </div>
                </div>
              </AspectRatio>
            </div>
          </div>
          
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stream-lighter pb-4">
              <div className="flex-1">
                <div className="flex items-center gap-4">
                  <img 
                    src={STREAM_DATA.avatarUrl} 
                    alt={STREAM_DATA.streamer} 
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h1 className="text-xl font-bold">{STREAM_DATA.title}</h1>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="font-medium text-stream hover:underline cursor-pointer">
                        {STREAM_DATA.streamer}
                      </span>
                      <span className="text-muted-foreground">
                        {STREAM_DATA.category}
                      </span>
                      <span className="flex items-center text-muted-foreground">
                        <Users className="h-4 w-4 mr-1" />
                        {STREAM_DATA.viewers.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <Heart className="h-4 w-4 mr-2" />
                  Follow
                </Button>
                <Button className="bg-stream hover:bg-stream-hover" size="sm">
                  Subscribe
                </Button>
                <Button variant="ghost" size="icon">
                  <Share2 className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="h-5 w-5" />
                </Button>
              </div>
            </div>
            
            <div className="py-6">
              <div className="bg-stream-light rounded-md p-4">
                <h3 className="font-medium mb-2">About {STREAM_DATA.streamer}</h3>
                <p className="text-muted-foreground text-sm">
                  Professional gamer with over {(STREAM_DATA.followers / 1000000).toFixed(1)}M followers. Streaming daily gameplay, tournaments, and coaching sessions. Subscribe to join our community!
                </p>
              </div>
            </div>
            
            <div className="py-4">
              <StreamGrid title="You may also like" streams={SIMILAR_STREAMS} />
            </div>
          </div>
        </div>
        
        <div className="lg:w-[350px] h-[500px] lg:h-auto">
          <ChatBox 
            streamTitle={`${STREAM_DATA.streamer}'s Chat`}
            viewerCount={STREAM_DATA.viewers} 
          />
        </div>
      </div>
    </div>
  );
};

export default Stream;

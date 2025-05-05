
import { Link } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";

interface FeaturedStreamProps {
  id: string;
  title: string;
  streamer: string;
  thumbnailUrl: string;
  category: string;
  viewers: number;
  description?: string;
}

export const FeaturedStream = ({
  id,
  title,
  streamer,
  thumbnailUrl,
  category,
  viewers,
  description
}: FeaturedStreamProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8">
      <div className="lg:col-span-2">
        <Link to={`/stream/${id}`}>
          <AspectRatio ratio={16 / 9} className="bg-stream-lighter rounded-md overflow-hidden">
            <img 
              src={thumbnailUrl} 
              alt={title}
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-200"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4 flex items-center gap-2">
              <span className="live-indicator">LIVE</span>
              <span className="viewer-count bg-black/70 px-1.5 py-0.5 rounded">
                <Eye className="h-3 w-3" />
                <span>{viewers.toLocaleString()}</span>
              </span>
            </div>
          </AspectRatio>
        </Link>
      </div>
      
      <div className="flex flex-col justify-center">
        <h1 className="text-2xl font-bold line-clamp-2 hover:text-stream transition">
          <Link to={`/stream/${id}`}>{title}</Link>
        </h1>
        
        <div className="mt-2">
          <Link to={`/channel/${streamer.toLowerCase()}`} className="text-lg font-medium hover:text-stream transition">
            {streamer}
          </Link>
          <Link to={`/category/${category.toLowerCase()}`} className="block text-muted-foreground hover:text-foreground transition">
            {category}
          </Link>
        </div>
        
        {description && (
          <p className="mt-4 text-muted-foreground line-clamp-3">{description}</p>
        )}
        
        <div className="mt-6 flex gap-4">
          <Button className="bg-stream hover:bg-stream-hover">Watch Now</Button>
          <Button variant="outline">Follow</Button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedStream;

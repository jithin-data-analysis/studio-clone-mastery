
import { Link } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Eye } from "lucide-react";

interface StreamCardProps {
  id: string;
  title: string;
  streamer: string;
  thumbnail: string;
  category: string;
  viewers: number;
  isLive?: boolean;
}

export const StreamCard = ({ 
  id, 
  title, 
  streamer, 
  thumbnail, 
  category, 
  viewers, 
  isLive = true 
}: StreamCardProps) => {
  return (
    <div className="group">
      <Link to={`/stream/${id}`}>
        <div className="relative">
          <AspectRatio ratio={16 / 9} className="bg-stream-lighter rounded-md overflow-hidden">
            <img 
              src={thumbnail} 
              alt={title}
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-200"
            />
          </AspectRatio>
          
          <div className="absolute bottom-2 left-2 flex items-center gap-2">
            {isLive && <span className="live-indicator">LIVE</span>}
            <span className="viewer-count bg-black/70 px-1.5 py-0.5 rounded text-xs">
              <Eye className="h-3 w-3" />
              <span>{viewers.toLocaleString()}</span>
            </span>
          </div>
        </div>
      </Link>
      
      <div className="mt-2">
        <Link to={`/stream/${id}`} className="line-clamp-1 font-medium hover:text-stream transition">
          {title}
        </Link>
        <Link to={`/channel/${streamer.toLowerCase()}`} className="text-sm text-muted-foreground hover:text-foreground transition">
          {streamer}
        </Link>
        <Link to={`/category/${category.toLowerCase()}`} className="text-sm text-muted-foreground hover:text-foreground transition">
          {category}
        </Link>
      </div>
    </div>
  );
};

export default StreamCard;


import { StreamCard } from "@/components/StreamCard";

interface StreamGridProps {
  title: string;
  streams: Array<{
    id: string;
    title: string;
    streamer: string;
    thumbnail: string;
    category: string;
    viewers: number;
    isLive?: boolean;
  }>;
}

export const StreamGrid = ({ title, streams }: StreamGridProps) => {
  return (
    <div className="py-6">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {streams.map((stream) => (
          <StreamCard 
            key={stream.id}
            id={stream.id}
            title={stream.title}
            streamer={stream.streamer}
            thumbnail={stream.thumbnail}
            category={stream.category}
            viewers={stream.viewers}
            isLive={stream.isLive}
          />
        ))}
      </div>
    </div>
  );
};

export default StreamGrid;

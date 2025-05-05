
import { Link } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Eye } from "lucide-react";

interface CategoryCardProps {
  id: string;
  name: string;
  image: string;
  viewers: number;
}

export const CategoryCard = ({ id, name, image, viewers }: CategoryCardProps) => {
  return (
    <div className="group">
      <Link to={`/category/${id}`}>
        <div className="relative">
          <AspectRatio ratio={3 / 4} className="bg-stream-lighter rounded-md overflow-hidden">
            <img 
              src={image} 
              alt={name}
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-200"
            />
          </AspectRatio>
        </div>
        
        <div className="mt-2">
          <h3 className="font-medium line-clamp-1 group-hover:text-stream transition">
            {name}
          </h3>
          <div className="flex items-center text-muted-foreground text-sm">
            <Eye className="h-3 w-3 mr-1" />
            <span>{viewers.toLocaleString()} viewers</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CategoryCard;

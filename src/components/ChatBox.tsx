
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Users } from "lucide-react";

interface ChatMessage {
  id: string;
  username: string;
  message: string;
  isSubscriber?: boolean;
  isModerator?: boolean;
}

interface ChatBoxProps {
  streamTitle?: string;
  viewerCount?: number;
}

export const ChatBox = ({ streamTitle, viewerCount = 0 }: ChatBoxProps) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: "1", username: "StreamFan123", message: "Hello everyone!" },
    { id: "2", username: "Moderator", message: "Welcome to the stream", isModerator: true },
    { id: "3", username: "Subscriber", message: "This stream is amazing!", isSubscriber: true },
    { id: "4", username: "NewViewer", message: "First time watching, love the content" },
    { id: "5", username: "GameExpert", message: "Try using the special move!" },
    { id: "6", username: "StreamFan123", message: "LOL that was funny" },
    { id: "7", username: "Subscriber", message: "Can't believe that just happened", isSubscriber: true },
    { id: "8", username: "Moderator", message: "Remember to follow the chat rules", isModerator: true },
  ]);
  
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      const newMessage = {
        id: Date.now().toString(),
        username: "You",
        message: message.trim(),
      };
      setMessages([...messages, newMessage]);
      setMessage("");
    }
  };
  
  return (
    <div className="flex flex-col h-full border-l border-stream-lighter bg-stream-light">
      <div className="p-3 border-b border-stream-lighter bg-stream-light">
        <h3 className="font-medium">{streamTitle || "Stream Chat"}</h3>
        <div className="flex items-center text-sm text-muted-foreground">
          <Users className="h-4 w-4 mr-1" />
          <span>{viewerCount.toLocaleString()} viewers</span>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-3 space-y-2">
        {messages.map((msg) => (
          <div key={msg.id} className="break-words">
            <span className={`font-medium ${
              msg.isModerator ? "text-green-400" : 
              msg.isSubscriber ? "text-stream" : 
              msg.username === "You" ? "text-blue-400" : ""
            }`}>
              {msg.username}:
            </span>{" "}
            <span className="text-sm">{msg.message}</span>
          </div>
        ))}
      </div>
      
      <form onSubmit={handleSendMessage} className="p-3 border-t border-stream-lighter">
        <div className="flex gap-2">
          <Input 
            placeholder="Send a message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="bg-stream-lighter border-none"
          />
          <Button 
            type="submit" 
            size="icon" 
            disabled={!message.trim()}
            className="bg-stream hover:bg-stream-hover"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ChatBox;

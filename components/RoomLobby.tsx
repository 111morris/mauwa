import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { useToast } from "../hooks/use-toast";
import { Copy, Play, Users } from "lucide-react";
import SEO from "./SEO/SEO";

const RoomLobby = () => {
  const { roomId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [name, setName] = useState("");

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(roomId || "");
      toast({ title: "Copied", description: "Room code copied to clipboard" });
    } catch {
      toast({ title: "Copy failed", description: "Unable to copy code" });
    }
  };

  const startGame = () => {
    // Placeholder: navigate to game table for this room
    navigate(`/game/${roomId}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={`Room Lobby – Code ${roomId}`}
        description="Invite friends and get ready to play the online multiplayer card game."
      />
      <header className="border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <h1 className="text-xl font-semibold">Room Lobby</h1>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              onClick={copyCode}
              className="hover-scale"
              aria-label="Copy room code"
            >
              <Copy className="mr-2" /> {roomId}
            </Button>
            <Button onClick={startGame} className="hover-scale">
              <Play className="mr-2" /> Start Game
            </Button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default RoomLobby;

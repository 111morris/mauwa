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

      <main className="container mx-auto px-4 py-8 animate-fade-in">
        <section className="grid gap-6 md:grid-cols-3">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="mr-2" /> Players
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Waiting for players to join… (placeholder list)
              </p>
              <ul className="mt-4 grid grid-cols-2 gap-3">
                {["You", "Player 2", "Player 3", "Player 4"].map((p) => (
                  <li key={p} className="rounded-md border p-3">
                    {p}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Set your name</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Input
                value={name}
                placeholder="Enter display name"
                onChange={(e) => setName(e.target.value)}
              />
              <Button
                onClick={() =>
                  toast({
                    title: "Saved",
                    description: `Name set to ${name || "Player"}`,
                  })
                }
              >
                Save
              </Button>
              <p className="text-sm text-muted-foreground">
                Invite code: <span className="font-mono">{roomId}</span>
              </p>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default RoomLobby;

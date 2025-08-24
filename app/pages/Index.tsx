// app/page.tsx (or page.jsx)
'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import Head from "next/head";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { useToast } from "../../components/ui/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Play, Users } from "lucide-react";
import { FormControl } from "../../components/ui/form";

function randomCode(len = 6) {
 const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ2345679";
 return Array.from({ length: len }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
}

export default function HomePage() {
 const router = useRouter();
 const { toast } = useToast();
 const [code, setCode] = useState("");

 const createRoom = () => {
  const id = randomCode(6);
  router.push(`/room/${id}`);
 };

 const joinRoom = () => {
  if (!code) {
   toast({
    title: "Missing code",
    description: "Please enter a room code",
   });
   return;
  }
  router.push(`/room/${code.toUpperCase()}`);
 };

 return (
  <div className="min-h-screen bg-background">
   <Head>
    <title>Multiplayer Card Game – Play Online</title>
    <meta name="description" content="Create or join a room to play a fast, strategic online multiplayer card game with friends." />
   </Head>

   <header className="border-b">
    <div className="container mx-auto px-4 h-16 flex items-center justify-between">
     <h1 className="text-xl font-semibold">Online Multiplayer Card Game</h1>
    </div>
   </header>

   <main className="container mx-auto px-4 py-16 animate-fade-in">
    <section className="grid gap-6 md:grid-cols-2">
     <Card>
      <CardHeader>
       <CardTitle className="flex items-center">
        <Play className="mr-2" /> Create a Room
       </CardTitle>
      </CardHeader>

      <CardContent className="space-y-3">
       <p className="text-muted-foreground">
        Generate a room and share the code with friends.
       </p>
       <Button onClick={createRoom} className="hover-scale">
        Create Room
       </Button>
      </CardContent>
     </Card>

     <Card>
      <CardHeader>
       <CardTitle className="flex items-center">
        <Users className="mr-2" /> Join a Room
       </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
       <p className="text-muted-foreground">
        Enter a room code to join the lobby.
       </p>
       <div className="flex gap-2">
        <Input
         value={code}
         onChange={(e) => setCode(e.target.value)}
         placeholder="ROOMCODE"
        />
        <Button onClick={joinRoom} className="hover-scale">
         Join
        </Button>
       </div>
      </CardContent>
     </Card>
    </section>
   </main>
  </div>
 );
}

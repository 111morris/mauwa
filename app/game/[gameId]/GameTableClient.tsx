'use client';

import { Button } from '@/components/ui/button';
import { Card as UiCard, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react';
import Head from 'next/head';

type GameTableClientProps = {
 gameId: string;
};

export default function GameTableClient({ gameId }: GameTableClientProps) {
 const { toast } = useToast();

 const draw = () => toast({ title: 'Draw', description: 'You drew a card (placeholder)' });
 const play = () => toast({ title: 'Play', description: 'Played selected cards (placeholder)' });


 return (
  <div className="min-h-screen bg-background">
   <Head>
    <title>Game – Table {gameId}</title>
    <meta name="description" content="Play your cards strategically and be the first to finish." />
   </Head>

   <header className="border-b">
    <div className="container mx-auto px-4 h-16 flex items-center justify-between">
     <h1 className="text-xl font-semibold">Game Table</h1>
     <div className="flex items-center gap-2 text-sm">
      <Badge variant="secondary" className="flex items-center">
       <ChevronRight className="mr-1" /> Direction
      </Badge>
      <Badge variant="secondary" className="flex items-center">
       <RotateCcw className="mr-1" /> No Punish
      </Badge>
     </div>
    </div>
   </header>

   <main className="container mx-auto px-4 py-8 animate-fade-in">
    <section className="grid gap-6 lg:grid-cols-3">
     <UiCard className="lg:col-span-2">
      <CardHeader>
       <CardTitle>Place Board</CardTitle>
      </CardHeader>
      <CardContent>
       <div className="aspect-[3/2] w-full border rounded-md grid place-items-center">
        <div className="text-center">
         <p className="text-muted-foreground">Top card</p>
         <div className="mt-2 inline-flex items-center gap-2">
          <Badge>7H</Badge>
          <Badge variant="outline">Effect: None</Badge>
         </div>
        </div>
       </div>
      </CardContent>
     </UiCard>

     <UiCard>
      <CardHeader>
       <CardTitle>Pick Board</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
       <Button variant="outline" onClick={draw} className="w-full">
        Draw 1
       </Button>
       <div className="text-sm text-muted-foreground">Draw pile: 48 cards (placeholder)</div>
      </CardContent>
     </UiCard>
    </section>

    <section className="mt-6 grid gap-6 lg:grid-cols-3">
     <UiCard className="lg:col-span-2">
      <CardHeader>
       <CardTitle>Your Hand</CardTitle>
      </CardHeader>
      <CardContent>
       <div className="flex flex-wrap gap-2">
        {['4S', '10D', 'QS', 'A♣'].map((c) => (
         <span key={c} className="rounded-md border px-3 py-2 text-sm">
          {c}
         </span>
        ))}
       </div>
       <div className="mt-4 flex gap-2">
        <Button onClick={play}>Play Selected</Button>
        <Button variant="outline">Announce: 1 Card Left</Button>
       </div>
      </CardContent>
     </UiCard>

     <UiCard>
      <CardHeader>
       <CardTitle>Opponents</CardTitle>
      </CardHeader>
      <CardContent>
       <ul className="space-y-2 text-sm">
        {['Player 2 (5)', 'Player 3 (7)', 'Player 4 (3)'].map((o) => (
         <li key={o} className="flex items-center justify-between rounded-md border px-3 py-2">
          <span>{o}</span>
          <ChevronLeft className="opacity-60" />
         </li>
        ))}
       </ul>
      </CardContent>
     </UiCard>
    </section>
   </main>
  </div>
 );
}
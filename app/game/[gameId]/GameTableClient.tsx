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

   
  </div>
 );
}

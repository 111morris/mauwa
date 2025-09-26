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


 
}

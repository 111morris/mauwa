import { notFound } from "next/navigation";
import GameTableClient from "./GameTableClient";

export default async function GamePage({ params }: { params: { gameId: string } }) {
 const gameId = params.gameId;

 // ✅ Simulate fetching game from database or API
 const isValid = await validateGameId(gameId);

 if (!isValid) {
  notFound(); // this shows the 404 page
 }

 return <GameTableClient gameId={gameId} />;
}

// 🔹 Dummy example, replace with your own API/db check
async function validateGameId(gameId: string) {
 // Simulate API or DB check (e.g. fetch(`/api/games/${gameId}`))
 const validIds = ["ABC123", "DEF456"]; // Replace with real logic
 return validIds.includes(gameId);
}

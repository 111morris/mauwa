import RoomLobbyClient from "./RoomLobbyClient";

export function generateStaticParams() {
 return [];
}

export default function RoomLobbyPage({ params }: { params: { roomId: string } }) {
 return <RoomLobbyClient roomId={params.roomId} />;
}


/// <reference types="vite/client" />

interface PlayerData {
  health: number;
  money: number;
  energy: number;
}

interface MissionData {
  gameID: string;
  title: string;
  cost: {};
}

interface MissionTileProps {
  data: MissionData;
}

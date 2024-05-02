/// <reference types="vite/client" />

interface AccountFormData {
  username: string;
  email: string;
  password: string;
}

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

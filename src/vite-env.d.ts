/// <reference types="vite/client" />

interface MissionData {
  gameID: string;
  title: string;
  cost: {};
}

interface MissionTileProps {
  data: MissionData;
}

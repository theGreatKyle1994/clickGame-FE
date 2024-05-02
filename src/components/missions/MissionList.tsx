import "./MissionList.css";
import { default as missionsIn } from "../../data/missions.json";
import { createID } from "../../util/utilityFunctions";
import { useState } from "react";
import MissionTile from "./MissionTile";

const MissionList = () => {
  const [missions] = useState<MissionData[]>(missionsIn);

  return (
    <ul>
      {missions &&
        missions.map((mission) => (
          <MissionTile data={mission} key={createID(mission.gameID)} />
        ))}
    </ul>
  );
};

export default MissionList;

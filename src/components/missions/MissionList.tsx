import { useState } from "react";
import MissionTile from "./MissionTile";
import { default as missionsIn } from "../../util/missions.json";
import "./MissionList.css";

const MissionList = () => {
  const [missions] = useState<MissionData[]>(missionsIn);

  return (
    <ul>
      {missions &&
        missions.map((mission) => (
          <MissionTile data={mission} key={Math.random() * 10000} />
        ))}
    </ul>
  );
};

export default MissionList;

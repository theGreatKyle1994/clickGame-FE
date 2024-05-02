import "./MissionTile.css";

const MissionTile = (props: MissionTileProps) => {
  const { data } = props;

  return (
    <li>
      <h1>Title: {data.title}</h1>
      <p>ID: {data.gameID}</p>
    </li>
  );
};

export default MissionTile;

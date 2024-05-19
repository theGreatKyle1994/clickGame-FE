import "./MissionTile.css";

const MissionTile = (props: MissionTileProps) => {
  const { data } = props;

  return (
    <li>
      <h1>Title: {data.title}</h1>
      <p>ID: {data.gameID}</p>
      <p>Details: {data.description}</p>
      <p>Level: {data.level}</p>
      <div>
        <progress max={data.progressMax} value={data.progress} />
        <span>{data.progress}</span>/<span>{data.progressMax}</span>
      </div>
      <button>Cost: {data.cost}</button>
    </li>
  );
};

export default MissionTile;

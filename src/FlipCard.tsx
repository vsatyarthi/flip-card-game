export const FlipCard = ({ data, checkIfMatched }: any) => {
  const handleClick = () => {
    checkIfMatched(data.id, data.front, !data.flipped);
  };

  return (
    <div
      className={`flip-card w-44 h-52 text-center m-10 group cursor-pointer ${
        data.flipped ? "flipped" : ""
      }`}
      onClick={handleClick}
    >
      <div className="content w-full h-full transition-transform duration-500 ">
        <div className="front absolute w-full h-full">
          <h1 className="text-9xl">?</h1>
        </div>
        <div className="back absolute w-full h-full">
          <h1 className="text-9xl">{data.front}</h1>
        </div>
      </div>
    </div>
  );
};

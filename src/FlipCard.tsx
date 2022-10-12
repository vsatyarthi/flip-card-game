export const FlipCard = ({ data, checkIfMatched, id }: any) => {
  const handleClick = () => {
    checkIfMatched({ ...data, flipped: !data.flipped }, id);
  };

  return (
    <div
      className={`flip-card w-44 h-52 text-center m-10 group cursor-pointer ${
        data.flipped ? "flipped" : ""
      }`}
      onClick={handleClick}
    >
      <div className="content w-full h-full transition-transform duration-1000">
        <div className="front absolute w-full h-full justify-center align-middle rounded-3xl rounded bg-indigo-600 text-indigo-100 border-indigo-700 border-4 rounded">
          <h1 className="text-9xl inline-block">?</h1>
        </div>
        <div className="back absolute w-full h-full justify-center align-middle rounded-3xl rounded bg-amber-700 text-amber-100 border-amber-700 border-4 rounded">
          <h1 className="text-9xl">{data.front}</h1>
        </div>
      </div>
    </div>
  );
};

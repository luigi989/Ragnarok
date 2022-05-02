const GridTitle = ({ name }) => {
    return (
        <div className="text-2xl text-yellow-600 ml-3">
          <h1 className="my-2 first-letter:uppercase">{name}</h1>
          {/* <img src={arrowRight} alt="arrowRight" /> */}
        </div>
      );
}
export default GridTitle;
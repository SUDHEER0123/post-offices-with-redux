const Card = (props) => {
  return (
    <div className="w-[290px] h-[200px] shadow-md flex justify-center items-start flex-col gap-2 bg-gray-100 rounded-md pl-3">
      <div>Post Office Name:{props.Name}</div>
      <div>Region:{props.Region} </div>
      <div>District:{props.District}</div>
      <div>BranchType:{props.BranchType}</div>
      <div>State:{props.State}</div>
    </div>
  );
};

export default Card;

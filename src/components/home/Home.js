import { placesByPincode } from "../../services/bypincode/actions";
import { placesByLocation } from "../../services/byplaces/actions";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Card from "../card";

const Home = (props) => {
  const [placesPin, setPlacesPin] = useState("");
  const [placesLoc, setPlacesLoc] = useState("");
  const [pincode, setPincode] = useState("");
  const [location, setLocation] = useState("");
  const [screen, setScreen] = useState("");
  const dispatch = useDispatch();
  console.log(placesPin);
  const fetchPlacesPin = () => {
    const parsedPincode = parseInt(pincode);
    if (!isNaN(parsedPincode)) {
      dispatch(placesByPincode(parsedPincode)).then((res) => {
        if (res.value.status == 200) {
          setPlacesPin(res.value.data[0].PostOffice);
          toast.success('fetched successfully')
        }else{
          toast.error('Please enter the correct pincode')
        }
      });
    } else {
      toast.error('Please enter the correct pincode')
    }
  };

  const fetchPlacesLoc = () => {
    dispatch(placesByLocation(location)).then((res) => {
      if (res.value.status == 200) {
        setPlacesLoc(res.value.data[0].PostOffice);
        toast.success('fetched successfully')
      }else{
        toast.error('Please enter the correct pincode')
      }
    });
  };

  return (
    <div className="bg-gray-300 min-h-screen">
      <div className="w-full bg-purple-200 flex justify-center items-center flex-col gap-2 pb-3 top-0 z-10 sticky">
        <p className="text-2xl p-2 font-semibold">
          Search Post offices using pincode or location
        </p>
        <div className="flex gap-2 m-5 flex-wrap">
          <button
            className="px-3 py-2 border border-black rounded-md"
            onClick={() => setScreen("pin")}
          >
            Search by Pincode
          </button>
          <button
            className="px-3 py-2 border border-black rounded-md"
            onClick={() => setScreen("loc")}
          >
            Search by Location
          </button>
        </div>
        {screen === "pin" && (
          <>
            <label htmlFor="pin">Enter Pincode :</label>
            <input
              type="number"
              id="pin"
              placeholder="Enter the pincode"
              value={pincode}
              className="p-2 rounded-md"
              onChange={(e) => setPincode(e.target.value)}
              style={{ backgroundColor: "rgba(233, 213, 255, 1)" }}
            />
            <button
              onClick={fetchPlacesPin}
              className="px-3 py-2 border border-black rounded-md"
            >
              Search
            </button>
          </>
        )}
        {screen === "loc" && (
          <>
            <label htmlFor="loc">Enter Location :</label>
            <input
              type="text"
              id="loc"
              placeholder="Enter the location here"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="p-2 rounded-md"
              style={{ backgroundColor: "rgba(233, 213, 255, 1)" }}
            />
            <button
              onClick={fetchPlacesLoc}
              className="px-3 py-2 border border-black rounded-md"
            >
              Search
            </button>
          </>
        )}
      </div>

      <div className="w-full flex justify-center items-center gap-5 flex-wrap py-5">
        {screen === "loc" &&
          placesLoc &&
          placesLoc.map((ele) => (
            <Card
              Name={ele.Name}
              Region={ele.Region}
              District={ele.District}
              BranchType={ele.BranchType}
              State={ele.State}
            />
          ))}
        {screen === "pin" &&
          placesPin &&
          placesPin.map((ele) => (
            <Card
              Name={ele.Name}
              Region={ele.Region}
              District={ele.District}
              BranchType={ele.BranchType}
              State={ele.State}
            />
          ))}
      </div>
      <ToastContainer/>
    </div>
  );
};
export default Home;

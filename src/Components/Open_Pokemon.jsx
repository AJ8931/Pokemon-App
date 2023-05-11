import { useLocation } from 'react-router-dom';

const Open_Pokemon = () => {
  const location = useLocation();
  console.log(location.state.data);
  return (
    <>
      {location.state !== null && location.state !== undefined &&
        <div className="bg-white shadow-md rounded-md overflow-hidden w-full md:w-1/2 lg:w-1/3 mx-2 my-2">
          {/* // your code here */}
        </div>
      }
    </>
  )
}

export default Open_Pokemon

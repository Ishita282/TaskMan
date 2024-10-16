import React from 'react';
import { GrNotes } from "react-icons/gr";
import { PiStarThin } from "react-icons/pi";
import { MdOutlineDoneAll } from "react-icons/md";
import { MdOutlineRemoveDone } from "react-icons/md";

const Sidebar = () => {
    const data = [
        {
            title: "All tasks",
            icon: <GrNotes />,
        },
        {
            title: "Importsant tasks",
            icon: <PiStarThin />,
        },
        {
            title: "Completed tasks",
            icon: <MdOutlineDoneAll />,
        },
        {
            title: "Incomplete tasks",
            icon: <MdOutlineRemoveDone />,
        }
    ];
  return (
    <>
      <div>
        <h2 className='text-x1 front-semibold'> The code master </h2>
        <h4 className='my-1 text-gray-400'>ishitasharma2428@gmail.com</h4>
        <hr />
      </div>
      <div>
        {data.map((items, i) => (
            <div className="my-2 flex items-center"> {items.icon} &nbsp; {items.title}</div>
        ))}
      </div>
      <div>
        <button className="bg-gray-600 w-full p-2 rounded"> log out</button>
      </div> 
    </>
  )
}

export default Sidebar

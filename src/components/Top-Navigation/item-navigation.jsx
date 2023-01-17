import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export function ItemNavigation(props) {
  const [isHover, setHover] = useState(false);
  const handleHover = () => {
    setHover(!isHover);
  };
  return (
    <NavLink
      to={`${props.route}`}
      className={`flex justify-center items-center ${!props.isLast && 'mr-4'} ${props.width}`}
    >
      <div className='flex flex-col items-center' onMouseEnter={handleHover} onMouseLeave={handleHover}>
        {!!props.icon && <props.icon size={30} color={`${isHover ? '#0069a4' : 'white'}`} />}
        <h3 className={`${isHover ? 'text-[#0069a4]' : props.color} text-[16px]`}>{props.name}</h3>
      </div>
    </NavLink>
  );
}
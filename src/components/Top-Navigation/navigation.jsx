import React from 'react';
import { BsFillCartFill, BsFillPersonFill } from 'react-icons/bs';
import { ItemNavigation } from './item-navigation'
import { NavLink } from 'react-router-dom';

export function Navigation() {
  const itemsNavigation = [
    {id: '1', route: '/order', name: 'Корзина', icon: BsFillCartFill, color: "text-white", isLast: false, width: "w-full"},
    {id: '2', route: '/login', name: 'Войти', icon: BsFillPersonFill, color: "text-white", isLast: true, width: "w-full"}
  ].map((element) =>
    <ItemNavigation
      key={element.id}
      route={element.route}
      name={element.name}
      icon={element.icon}
      isLast={element.isLast}
      color={element.color}
      width={element.width}
    />
  );
  const itemsMainNavigation = [
    {id: "1", name: "Питьевая вода", route: "drinking-water", color: "text-[#0069a4]", isLast: true, width: "w-1/5"},
    {id: "2", name: "Минеральная вода", route: "mineral-water", color: "text-[#0069a4]", isLast: true, width: "w-1/5"},
    {id: "3", name: "Оборудование", route: "equipment", color: "text-[#0069a4]", isLast: true, width: "w-1/5"},
    {id: "4", name: "Доставка и оплата", route: "delivery", color: "text-[#0069a4]", isLast: true, width: "w-1/5"},
    {id: "5", name: "Контакты", route: "contacts", color: "text-[#0069a4]", isLast: true, width: "w-1/5"},
  ].map((element) =>
    <ItemNavigation
      key={element.id}
      route={element.route}
      name={element.name}
      isLast={element.isLast}
      color={element.color}
      width={element.width}
    />
  );
  return (
    <>
      <nav className='flex justify-between items-center h-[70px] px-5 bg-gray-500 text-white'>
        <NavLink to=""><h3 className='font-bold'>Water Site</h3></NavLink>
        <div className='flex justify-between'>
          {itemsNavigation}
        </div>
      </nav>
      <nav className='flex items-center h-[70px]'>
        <div className='flex w-full'>
          {itemsMainNavigation}
        </div>
      </nav>
    </>
  );
}
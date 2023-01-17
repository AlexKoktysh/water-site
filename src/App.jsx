import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Top-Navigation/navigation';
import { FavoritePages, MineralWaterPage } from './pages/mineral-water-page';
import { HomePage } from './pages/home-page';
import { ContactsPage } from './pages/contacts-page';
import { DeliveryPage } from './pages/delivery-page';
import { DrinkingWaterPage } from './pages/drinking-water-page';
import { EquipmentPage } from './pages/equipment-page';
import { OrderPage } from './pages/order-page';
import { LoginPage } from './pages/login-page';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={ <HomePage /> } />
        <Route path='/contacts' element={ <ContactsPage /> } />
        <Route path='/delivery' element={ <DeliveryPage /> } />
        <Route path='/drinking-water' element={ <DrinkingWaterPage /> } />
        <Route path='/equipment' element={ <EquipmentPage /> } />
        <Route path='/mineral-water' element={ <MineralWaterPage /> } />
        <Route path='/order' element={ <OrderPage /> } />
        <Route path='/login' element={ <LoginPage /> } />
      </Routes>
    </>
  );
}

export default App;

"use client"
import { useState } from 'react';
import CustomModal from '../../components/CustomModal';
import Header from '../../components/Header'
import Card from '../../components/Card';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cards, setCards] = useState([]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleCardCreate = (newCard) => {
    // Update the cards state with the new card
    setCards([...cards, newCard]);
  };
  const handleDelete = (cardId) => {
    // Implement the logic to delete the card with the given ID
    const updatedCards = cards.filter((card) => card.id !== cardId);
    setCards(updatedCards);
  };

  return (
    <div>
        <Header/>
        <div className='flex justify-center'>
      <button onClick={openModal} className=' mt-5 bg-red-500 text-white py-2 px-6  rounded-md hover:outline hover:bg-transparent hover:text-red-500 hover:transition-all hover:duration-100 font-bold'>Add new category</button>
      </div>

      <CustomModal isOpen={isModalOpen} onRequestClose={closeModal} onCardCreate={handleCardCreate} />

      <div>
        {cards.map((card, index) => (
          <Card key={index} card={card} onDelete={handleDelete}/> 
        ))}
      </div>
    </div>
  );
}

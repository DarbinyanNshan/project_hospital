import React, { useState } from 'react';
import { Pagination } from './Pagination';
import { Card } from './Card';
import { useTranslation } from 'react-i18next';

import "./style.css";


export const CardContainer = () => {
  const { t } = useTranslation();

  const cards = [
    {
      title: t('card.title1'),
      description: t('card.description1'),
      image: 'https://via.placeholder.com/150',
    },
    {
      title: t('card.title2'),
      description: t('card.description2'),
      image: 'https://via.placeholder.com/150',
    },
    {
      title: t('card.title3'),
      description: t('card.description3'),
      image: 'https://via.placeholder.com/150',
    },
    {
      title: t('card.title4'),
      description: t('card.description4'),
      image: 'https://via.placeholder.com/150',
    },
    {
      title: t('card.title5'),
      description: t('card.description5'),
      image: 'https://via.placeholder.com/150',
    },
    {
      title: t('card.title6'),
      description: t('card.description6'),
      image: 'https://via.placeholder.com/150',
    },
    {
      title: t('card.title7'),
      description: t('card.description7'),
      image: 'https://via.placeholder.com/150',
    },
    {
      title: t('card.title8'),
      description: t('card.description8'),
      image: 'https://via.placeholder.com/150',
    },
    {
      title: t('card.title9'),
      description: t('card.description9'),
      image: 'https://via.placeholder.com/150',
    },
    {
      title: t('card.title9'),
      description: t('card.description9'),
      image: 'https://via.placeholder.com/150',
    },
    {
      title: t('card.title9'),
      description: t('card.description9'),
      image: 'https://via.placeholder.com/150',
    },
    {
      title: t('card.title9'),
      description: t('card.description9'),
      image: 'https://via.placeholder.com/150',
    },
    {
      title: t('card.title9'),
      description: t('card.description9'),
      image: 'https://via.placeholder.com/150',
    },
    {
      title: t('card.title9'),
      description: t('card.description9'),
      image: 'https://via.placeholder.com/150',
    },
    {
      title: t('card.title9'),
      description: t('card.description9'),
      image: 'https://via.placeholder.com/150',
    },
    {
      title: t('card.title9'),
      description: t('card.description9'),
      image: 'https://via.placeholder.com/150',
    },
    {
      title: t('card.title9'),
      description: t('card.description9'),
      image: 'https://via.placeholder.com/150',
    },
    {
      title: t('card.title9'),
      description: t('card.description9'),
      image: 'https://via.placeholder.com/150',
    },
    {
      title: t('card.title9'),
      description: t('card.description9'),
      image: 'https://via.placeholder.com/150',
    },
    {
      title: t('card.title9'),
      description: t('card.description9'),
      image: 'https://via.placeholder.com/150',
    },
    {
      title: t('card.title9'),
      description: t('card.description9'),
      image: 'https://via.placeholder.com/150',
    },
    {
      title: t('card.title9'),
      description: t('card.description9'),
      image: 'https://via.placeholder.com/150',
    },
    {
      title: t('card.title9'),
      description: t('card.description9'),
      image: 'https://via.placeholder.com/150',
    },
    {
      title: t('card.title9'),
      description: t('card.description9'),
      image: 'https://via.placeholder.com/150',
    },
    {
      title: t('card.title9'),
      description: t('card.description9'),
      image: 'https://via.placeholder.com/150',
    },
    {
      title: t('card.title9'),
      description: t('card.description9'),
      image: 'https://via.placeholder.com/150',
    }
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;

  const totalPages = Math.ceil(cards.length / cardsPerPage);
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className="card-container">
        {currentCards.map((card, index) => (
          <Card key={index} content={card} />
        ))}
      </div>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    </div>
  );
};

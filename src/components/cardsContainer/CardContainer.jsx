import React, { useState } from 'react';
import "./style.css";

import { Pagination } from './Pagination';
import { Card } from './Card';
import { useTranslation } from 'react-i18next';

import img1 from "../../assets/images/doctors/tnorenPoxaren.jpg"
import img2 from "../../assets/images/doctors/exoSg.jpg"
import img3 from "../../assets/images/doctors/sonografist.jpg"
import img4 from "../../assets/images/doctors/aknabuj.jpg"
import img5 from "../../assets/images/doctors/aknabuj2.jpg"
import img6 from "../../assets/images/doctors/virabuyj.jpg"
import img7 from "../../assets/images/doctors/texTerapevt2.jpg"
import img8 from "../../assets/images/doctors/vnasvatqaban.jpg"
import img9 from "../../assets/images/doctors/urucqaban.jpg"
import img10 from "../../assets/images/doctors/nyardaban.jpg"
import img11 from "../../assets/images/doctors/bjishkRadiolog.jpg"
import img12 from "../../assets/images/doctors/qkaBjishk.jpg"
import img13 from "../../assets/images/doctors/texTerapevt4.jpg"
import img14 from "../../assets/images/doctors/srtaban.jpg"
import img15 from "../../assets/images/doctors/ginekolog.jpg"
import img16 from "../../assets/images/doctors/nerzataban.jpg"
import img17 from "../../assets/images/doctors/ginekolog2.jpg"
import img18 from "../../assets/images/doctors/texTerapevt5.jpg"
import img19 from "../../assets/images/doctors/gastroenterolog.jpg"
import img20 from "../../assets/images/doctors/texTerapevt6.jpg"
import img21 from "../../assets/images/doctors/texTerapevt7.jpg"
import img22 from "../../assets/images/doctors/sonografist2.jpg"
import img23 from "../../assets/images/doctors/nyardaban2.jpg"
import img24 from "../../assets/images/doctors/texTerapevt8.jpg"
import img25 from "../../assets/images/doctors/texTerapevt9.jpg"
import img26 from "../../assets/images/doctors/ginekolog3.jpg"
import img27 from "../../assets/images/doctors/texTerapevt10.jpg"
import img28 from "../../assets/images/doctors/texTerapevt11.jpg"
import img29 from "../../assets/images/doctors/fizoterepevt.jpg"
import img30 from "../../assets/images/doctors/ginekolog4.jpg"
import img31 from "../../assets/images/doctors/texTerapevt12.jpg"
import img32 from "../../assets/images/doctors/texTerapevt.jpg"
import img33 from "../../assets/images/doctors/texTerapevt3.jpg"
import img34 from "../../assets/images/doctors/texTerapevt13.jpg"

import { MdClear } from "react-icons/md";


export const CardContainer = () => {
  const { t } = useTranslation();
  const [fullName, setFullName] = useState("");
  const [profession, setProfession] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 10;
  const cards = [
    {
      title: t('card.fullName1'),
      description: t('card.profession1'),
      image: img1,
    },
    {
      title: t('card.fullName2'),
      description: t('card.profession2'),
      image: img2,
    }, 
    {
      title: t('card.fullName3'),
      description: t('card.profession3'),
      image: img3,
    },
    {
      title: t('card.fullName4'),
      description: t('card.profession4'),
      image: img4,
    },
    {
      title: t('card.fullName5'),
      description: t('card.profession5'),
      image: img5,
    },
    {
      title: t('card.fullName6'),
      description: t('card.profession6'),
      image: img6,
    },
    {
      title: t('card.fullName7'),
      description: t('card.profession7'),
      image: img7,
    },
    {
      title: t('card.fullName8'),
      description: t('card.profession8'),
      image: img8,
    },
    {
      title: t('card.fullName9'),
      description: t('card.profession9'),
      image: img9,
    },
    {
      title: t('card.fullName10'),
      description: t('card.profession10'),
      image: img10,
    },
    {
      title: t('card.fullName11'),
      description: t('card.profession11'),
      image: img11,
    },
    {
      title: t('card.fullName12'),
      description: t('card.profession12'),
      image: img12,
    },
    {
      title: t('card.fullName13'),
      description: t('card.profession13'),
      image: img13,
    },
    {
      title: t('card.fullName14'),
      description: t('card.profession14'),
      image: img14,
    },
    {
      title: t('card.fullName15'),
      description: t('card.profession15'),
      image: img15,
    },
    {
      title: t('card.fullName16'),
      description: t('card.profession16'),
      image: img16,
    },
    {
      title: t('card.fullName17'),
      description: t('card.profession17'),
      image: img17,
    },
    {
      title: t('card.fullName18'),
      description: t('card.profession18'),
      image: img18,
    },
    {
      title: t('card.fullName19'),
      description: t('card.profession19'),
      image: img19,
    },
    {
      title: t('card.fullName20'),
      description: t('card.profession20'),
      image: img20,
    },
    {
      title: t('card.fullName21'),
      description: t('card.profession21'),
      image: img21,
    },
    {
      title: t('card.fullName22'),
      description: t('card.profession22'),
      image: img22,
    },
    {
      title: t('card.fullName23'),
      description: t('card.profession23'),
      image: img23,
    },
    {
      title: t('card.fullName24'),
      description: t('card.profession24'),
      image: img24,
    },
    {
      title: t('card.fullName25'),
      description: t('card.profession25'),
      image: img25,
    },
    {
      title: t('card.fullName26'),
      description: t('card.profession26'),
      image: img26,
    },
    {
      title: t('card.fullName27'),
      description: t('card.profession27'),
      image: img27,
    },
    {
      title: t('card.fullName28'),
      description: t('card.profession28'),
      image: img28,
    },
    {
      title: t('card.fullName29'),
      description: t('card.profession29'),
      image: img29,
    },
    {
      title: t('card.fullName30'),
      description: t('card.profession30'),
      image: img30,
    },
    {
      title: t('card.fullName31'),
      description: t('card.profession31'),
      image: img31,
    },
    {
      title: t('card.fullName32'),
      description: t('card.profession32'),
      image: img32,
    },
    {
      title: t('card.fullName33'),
      description: t('card.profession33'),
      image: img33,
    },
    {
      title: t('card.fullName34'),
      description: t('card.profession34'),
      image: img34,
    }
  ];

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
    setCurrentPage(1); 
  };

  const handleProfessionChange = (event) => {
    setProfession(event.target.value);
    setCurrentPage(1); 
  };

  const clearFullName = () => {
    setFullName('');
  };

  const clearProfession = () => {
    setProfession('');
  };

  const filteredCards = cards.filter(card => {
    const nameMatches = card.title.toLowerCase().includes(fullName.toLowerCase());
    const professionMatches = card.description.toLowerCase().includes(profession.toLowerCase());
    return nameMatches && professionMatches;
  });

  const totalPages = Math.ceil(filteredCards.length / cardsPerPage);
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = filteredCards.slice(indexOfFirstCard, indexOfLastCard);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
    <div className="search-inputs">
      <div className="search-input-container">
        <input
          type="text"
          placeholder={t('search.fullNameInputs')}
          value={fullName}
          onChange={handleFullNameChange}
          className={`search-input ${fullName ? 'active' : ''}`}
        />
        {fullName && (
          <button className="clear-input" onClick={clearFullName}><MdClear/></button>
        )}
      </div>
      <div className="search-input-container">
        <input
          type="text"
          placeholder={t('search.professionInputs')}
          value={profession}
          onChange={handleProfessionChange}
          className={`search-input ${profession ? 'active' : ''}`}
        />
        {profession && (
          <button className="clear-input" onClick={clearProfession}><MdClear/></button>
        )}
      </div>
    </div>
    <div className="card-container">
      {currentCards.length > 0 ? (
        currentCards.map((card, index) => (
          <Card key={index} content={card} />
        ))
      ) : (
        <p className="no-results">{t('noResults.message')}</p>
      )}
    </div>
    {totalPages > 1 && (
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    )}
  </div>
  );
};

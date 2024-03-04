import MainHeading from '../../common/typography/mainheading/mainHeading';
import SubHeading from '../../common/typography/subheading/subHeading';
import styles from './feature.module.css';
import FeatureCard from './featureCard';
import React, { useEffect, useState } from 'react';
import { cardData } from '../../constants/feature/cardData.ts';

const Feature = () => {
  return (
    <>
      <div className='sectionSpacing' id='features'>
        <SubHeading text='features' isFirstSection={false} />
        <MainHeading text='What we do' />

        <div className='row justify-content-center'>
          {cardData.map((card, index) => (
            <div className='col-lg-4 col-md-6 mb-4'>
              <FeatureCard
                key={index}
                heading={card.heading}
                description={card.description}
                iconName={card.icon}
              />
            </div>
          ))}
        </div>
      </div>
      <hr />
    </>
  );
};

export default Feature;

import React from 'react';
import styles from './Sections.module.css';

const Section = ({ title, image, className, style }) => {
  return (
    <div className={`${styles.title-container} ${className || ''}`} style={style}>
      <h1>{title}</h1>
      <img src={image} alt="" />
    </div>
  );
};

export default Section;
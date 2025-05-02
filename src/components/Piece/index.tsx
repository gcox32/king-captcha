import React from 'react';
import styles from './styles.module.css';
import { PieceProps } from '../../types';

export const Piece: React.FC<PieceProps> = ({
  type,
  color,
  position,
  isSelected = false,
  onClick,
  onDragStart,
  onDragEnd,
}) => {

  const svgPath = `/src/images/pieces/${color}/${type}.svg`;

  return (
    <div 
      className={`${styles.piece} ${styles[color]} ${isSelected ? styles.selected : ''}`}
      onClick={onClick}
      draggable={color === 'white'}
      onDragStart={color === 'white' ? onDragStart : undefined}
      onDragEnd={color === 'white' ? onDragEnd : undefined}
      data-position={`${position.x},${position.y}`}
      role="button"
      aria-label={`${color} ${type}`}
    >
      <img 
        src={svgPath} 
        alt={`${color} ${type}`} 
        className={styles.pieceImage}
      />
    </div>
  );
};




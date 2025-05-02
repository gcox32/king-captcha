import { useState } from 'react';
import styles from './styles.module.css';
import { Modal } from '../Modal';
import { Piece } from '../Piece';
import { KingCaptchaProps, BoardPiece } from '../../types';
import { generateBoardConfig, isWinningMove } from '../../utils/board';
import { getValidMoves } from '../../utils/piece';

export const KingCaptcha = ({
  label,
  boardSize = 3,
  description = "White to move. Find mate in one.",
  onSuccess,
  onFailure,
  onClose
}: KingCaptchaProps) => {
  const [boardConfig] = useState(() => generateBoardConfig(boardSize));
  const [board, setBoard] = useState<BoardPiece[][]>(boardConfig.initial);
  const [selectedPiece, setSelectedPiece] = useState<{x: number, y: number} | null>(null);
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
    onClose?.();
  };

  const handleDragStart = (x: number, y: number) => (e: React.DragEvent) => {
    // Store the starting position in the drag event
    e.dataTransfer.setData('text/plain', JSON.stringify({ x, y }));
    setSelectedPiece({ x, y });
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault(); // Necessary to allow dropping
  };

  const handleDrop = (targetX: number, targetY: number) => (e: React.DragEvent) => {
    e.preventDefault();
    const startPos = JSON.parse(e.dataTransfer.getData('text/plain'));
    const piece = board[startPos.y][startPos.x];

    if (piece && piece.color === 'white') {
      // Make the move
      const newBoard = board.map(row => [...row]);
      newBoard[targetY][targetX] = piece;
      newBoard[startPos.y][startPos.x] = null;

      // Check if this is a valid move for this piece
      const validMoves = getValidMoves(piece.type, piece.color, startPos, boardSize, board);
      const isValidMove = validMoves.some(move => move.x === targetX && move.y === targetY);

      if (isValidMove) {
        setBoard(newBoard);
        if (isWinningMove(newBoard, boardConfig.winningConfigs)) {
          setTimeout(() => {
            onSuccess?.();
          }, 300);
        } else {
          setTimeout(() => {
            setBoard(boardConfig.initial);
            onFailure?.();
          }, 300);
        }
      }
      // If invalid move, the piece will return to its original position
      // because we never updated the board state
    }
    setSelectedPiece(null);
  };

  const handleDragEnd = () => {
    setSelectedPiece(null);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title={label}
    >
      <p>{description}</p>
      <div
        className={styles.board}
        style={{
          gridTemplateColumns: `repeat(${boardSize}, 1fr)`
        }}
      >
        {board.map((row, y) =>
          row.map((piece, x) => (
            <div
              key={`${x}-${y}`}
              className={styles.square}
              onDragOver={handleDragOver}
              onDrop={handleDrop(x, y)}
            >
              {piece && (
                <Piece
                  type={piece.type}
                  color={piece.color}
                  position={{ x, y }}
                  isSelected={selectedPiece?.x === x && selectedPiece?.y === y}
                  onDragStart={handleDragStart(x, y)}
                  onDragEnd={handleDragEnd}
                />
              )}
            </div>
          ))
        )}
      </div>
    </Modal>
  );
};



import { PieceType, PieceColor } from '../types';

// Helper function to check if a position is within the board
export const isValidPosition = (x: number, y: number, boardSize: number): boolean => {
    return x >= 0 && x < boardSize && y >= 0 && y < boardSize;
}; 

// Helper function to get valid moves for a piece
export const getValidMoves = (
    type: PieceType,
    color: PieceColor,
    position: { x: number; y: number },
    boardSize: number,
    board: Array<Array<{ type: PieceType; color: PieceColor } | null>>
  ): Array<{ x: number; y: number }> => {
    const moves: Array<{ x: number; y: number }> = [];
    
    // Basic movement patterns
    switch (type) {
      case 'king':
        // King can move one square in any direction
        for (let dx = -1; dx <= 1; dx++) {
          for (let dy = -1; dy <= 1; dy++) {
            if (dx === 0 && dy === 0) continue;
            const newX = position.x + dx;
            const newY = position.y + dy;
            if (isValidPosition(newX, newY, boardSize)) {
              moves.push({ x: newX, y: newY });
            }
          }
        }
        break;
      case 'queen':
        // Queen can move any number of squares in any direction
        for (let dx = -1; dx <= 1; dx++) {
          for (let dy = -1; dy <= 1; dy++) {
            if (dx === 0 && dy === 0) continue;
            for (let i = 1; i < boardSize; i++) { 
              const newX = position.x + dx * i;
              const newY = position.y + dy * i;
              if (!isValidPosition(newX, newY, boardSize)) break;
              moves.push({ x: newX, y: newY });
              if (board[newY][newX]) break;
            }
          }
        }
        break;
      case 'rook':
        // Rook can move any number of squares in any direction
        for (let dx = -1; dx <= 1; dx++) {
          for (let dy = -1; dy <= 1; dy++) {
            if (dx === 0 && dy === 0) continue;
            for (let i = 1; i < boardSize; i++) {
              const newX = position.x + dx * i;
              const newY = position.y + dy * i;
              if (!isValidPosition(newX, newY, boardSize)) break;
              moves.push({ x: newX, y: newY });
              if (board[newY][newX]) break;
            }
          }
        }
        break;    
      case 'bishop':
        // Bishop can move any number of squares diagonally
        for (let dx = -1; dx <= 1; dx += 2) {
          for (let dy = -1; dy <= 1; dy += 2) {
            if (dx === 0 && dy === 0) continue;
            for (let i = 1; i < boardSize; i++) { 
              const newX = position.x + dx * i;
              const newY = position.y + dy * i;
              if (!isValidPosition(newX, newY, boardSize)) break;
              moves.push({ x: newX, y: newY });
              if (board[newY][newX]) break;
            } 
          }
        }
        break;
      case 'knight':
        // Knight can move in an L-shape
        const knightMoves = [
          { dx: 2, dy: 1 },
          { dx: 2, dy: -1 },
          { dx: -2, dy: 1 },
          { dx: -2, dy: -1 },
          { dx: 1, dy: 2 },
          { dx: 1, dy: -2 },
          { dx: -1, dy: 2 },
          { dx: -1, dy: -2 }
        ];
        for (const move of knightMoves) {
          const newX = position.x + move.dx;
          const newY = position.y + move.dy;
          if (isValidPosition(newX, newY, boardSize)) {
            moves.push({ x: newX, y: newY });
          }
        }
        break;
      case 'pawn':
        // Pawn can move one square forward
        const direction = color === 'white' ? 1 : -1; 
        const startRow = color === 'white' ? 6 : 1;
        const forward = direction * 1;
        const forward2 = direction * 2;
        const left = direction * -1;
        const right = direction * 1;
        
        // Forward move
        if (isValidPosition(position.x, position.y + forward, boardSize)) {
          moves.push({ x: position.x, y: position.y + forward });
        }
        
        // Forward two move
        if (isValidPosition(position.x, position.y + forward2, boardSize) && 
            position.y === startRow) {
          moves.push({ x: position.x, y: position.y + forward2 });
        }
        
        // Capture moves  
        if (isValidPosition(position.x + left, position.y + forward, boardSize)) {
          moves.push({ x: position.x + left, y: position.y + forward });
        }
        if (isValidPosition(position.x + right, position.y + forward, boardSize)) {
          moves.push({ x: position.x + right, y: position.y + forward });
        } 
        
        // En passant moves
        if (color === 'white') {
          if (isValidPosition(position.x + left, position.y - 1, boardSize) &&
              board[position.y - 1][position.x + left]?.type === 'pawn' &&
              board[position.y - 1][position.x + left]?.color === 'black') {
            moves.push({ x: position.x + left, y: position.y - 1 });
          }
          if (isValidPosition(position.x + right, position.y - 1, boardSize) &&
              board[position.y - 1][position.x + right]?.type === 'pawn' &&
              board[position.y - 1][position.x + right]?.color === 'black') {
            moves.push({ x: position.x + right, y: position.y - 1 });
          }
        }
        else {
          if (isValidPosition(position.x + left, position.y + 1, boardSize) &&
              board[position.y + 1][position.x + left]?.type === 'pawn' &&
              board[position.y + 1][position.x + left]?.color === 'white') {
            moves.push({ x: position.x + left, y: position.y + 1 });
          }
        }
        break;
      default:
        break;
    }
  
    // Filter out moves that would capture own pieces
    return moves.filter(move => {
      const targetPiece = board[move.y][move.x];
      return !targetPiece || targetPiece.color !== color;
    });
  };
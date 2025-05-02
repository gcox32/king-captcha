export interface KingCaptchaProps {
    label: string;
    boardSize?: 3 | 4 | 5;
    description?: string;
    onSuccess?: () => void;
    onFailure?: () => void;
    onClose?: () => void;
}

// Update the board type to be more specific
export type BoardPiece = {
    type: PieceType;
    color: PieceColor;
} | null;

export interface BoardConfig {
    initial: BoardPiece[][];
    winningConfigs: BoardPiece[][][]; // Array of valid winning board states
  }

export type PieceType = 'king' | 'queen' | 'rook' | 'bishop' | 'knight' | 'pawn';
export type PieceColor = 'white' | 'black';

export interface PieceProps {
    type: PieceType;
    color: PieceColor;
    position: { x: number; y: number };
    isSelected?: boolean;
    onClick?: () => void;
    onDragStart?: (e: React.DragEvent) => void;
    onDragEnd?: (e: React.DragEvent) => void;
}

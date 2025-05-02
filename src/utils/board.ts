import { BoardPiece, BoardConfig } from '../types';
import { BASIC_MATE_CONFIGS } from './configs';
export const initializeBoard = (size: number): BoardPiece[][] => {
    const board: BoardPiece[][] = Array(size).fill(null)
        .map(() => Array(size).fill(null));

    board[0][0] = { type: 'king', color: 'white' };
    board[size - 1][size - 1] = { type: 'king', color: 'black' };

    return board;
}

export const generateBoardConfig = (size: number): BoardConfig => {
    const configs = BASIC_MATE_CONFIGS[size];
    return configs[Math.floor(Math.random() * configs.length)];
};

export const isWinningMove = (currentBoard: BoardPiece[][], winningConfigs: BoardPiece[][][]): boolean => {
    return winningConfigs.some(winningBoard =>
        JSON.stringify(currentBoard) === JSON.stringify(winningBoard)
    );
};
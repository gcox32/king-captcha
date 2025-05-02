import { BoardPiece, BoardConfig } from '../types';
import { BASIC_MATE_CONFIGS } from './configs';

export const generateBoardConfig = (size: number): BoardConfig => {
    const configs = BASIC_MATE_CONFIGS[size];
    return configs[Math.floor(Math.random() * configs.length)];
};

export const isWinningMove = (currentBoard: BoardPiece[][], winningConfigs: BoardPiece[][][]): boolean => {
    return winningConfigs.some(winningBoard =>
        JSON.stringify(currentBoard) === JSON.stringify(winningBoard)
    );
};
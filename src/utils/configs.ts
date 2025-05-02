import { BoardConfig } from '../types';

export const BASIC_MATE_CONFIGS: Record<number, BoardConfig[]> = {
    3: [
        {
            initial: [
                [{ type: 'king', color: 'white' }, null, null],
                [null, null, { type: 'queen', color: 'white' }],
                [{ type: 'king', color: 'black' }, null, null],
            ],
            winningConfigs: [
                [
                    [{ type: 'king', color: 'white' }, null, null],
                    [{ type: 'queen', color: 'white' }, null, null],
                    [{ type: 'king', color: 'black' }, null, null],
                ],
                [
                    [{ type: 'king', color: 'white' }, null, null],
                    [null, { type: 'queen', color: 'white' }, null],
                    [{ type: 'king', color: 'black' }, null, null],
                ],
            ]
        },
        {
            initial: [
                [null, null, { type: 'knight', color: 'white' }],
                [null, null, { type: 'pawn', color: 'black' }],
                [{type: 'bishop', color: 'white' }, {type: 'pawn', color: 'black' }, { type: 'king', color: 'black' }],
            ],
            winningConfigs: [
                [
                    [null, null, null],
                    [{ type: 'knight', color: 'white' }, null, { type: 'pawn', color: 'black' }],
                    [{type: 'bishop', color: 'white' }, {type: 'pawn', color: 'black' }, { type: 'king', color: 'black' }],
                ],
            ]
        },
    ],
4: [
    {
        initial: [
            [{ type: 'king', color: 'white' }, null, null, null],
            [null, { type: 'rook', color: 'black' }, null, null],
            [null, null, null, { type: 'rook', color: 'black' }],
            [null, null, null, { type: 'king', color: 'white' }],
        ],
        winningConfigs: [
            [
                [{ type: 'king', color: 'white' }, null, null, null],
                [null, { type: 'rook', color: 'black' }, null, null],
                [null, null, null, { type: 'rook', color: 'black' }],
                [null, null, null, { type: 'king', color: 'white' }],
            ],
        ]
    },
],
    5: [
        {
            initial: [
                [{ type: 'king', color: 'white' }, null, null, null, null],
                [null, null, null, null, null],
                [null, null, { type: 'queen', color: 'black' }, null, null],
                [null, null, null, null, null],
                [null, null, null, null, { type: 'king', color: 'white' }],
            ],
            winningConfigs: [
                [
                    [{ type: 'king', color: 'white' }, null, null, null, null],
                    [null, null, null, null, null],
                    [null, null, { type: 'queen', color: 'black' }, null, null],
                    [null, null, null, null, null],
                    [null, null, null, null, { type: 'king', color: 'white' }],
                ],
            ]
        },
    ]
};
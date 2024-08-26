import { createArray } from './array.helpers';

export const createMatrix = (size, val = 0) => 
    createArray(size, () => createArray(size, val));

export const setMatrixValue = (matrix, newValue, line, column) => 
    matrix.map((l, lineIndex) =>
        l.map((oldValue, columnIndex) => 
            lineIndex === line && columnIndex === column ? newValue : oldValue
        )
    );

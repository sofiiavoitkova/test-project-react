import React, { useState } from 'react';
import { setMatrixValue, createMatrix } from './matrix.helpers.js';

const useMatrix = (defaultMatrix) => {
    const [matrix, setState] = useState(defaultMatrix);

    const setMatrix = (line, row, value) => 
        setState(setMatrixValue(matrix, value, line, row));

    const resetMatrix = (size, val) => setState(createMatrix(size, val));

    return [matrix, setMatrix, resetMatrix];
};

const defaultMatrix = createMatrix(4, 0);

function App() {
    const [matrix, setMatrix] = useMatrix(defaultMatrix);

    return (
        <div>
            {matrix.map((row, i) => (
                <div key={i}>
                    {row.map((v, k) => (
                        <button key={k} onClick={() => setMatrix(i, k, ++v)}>
                            {v}
                        </button>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default App;

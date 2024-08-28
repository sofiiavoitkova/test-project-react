export const createArray = (size, fill) => {
    return Array.from({ length: size }, typeof fill === 'function' ? fill : () => fill);
};

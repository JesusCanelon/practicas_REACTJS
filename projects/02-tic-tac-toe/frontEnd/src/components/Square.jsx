
export const Square = ({ children, isSelected, updateBoard, index, estado }) => {
    const clase = `square ${isSelected ? 'is-selected' : ''}`;

    const handleClick = () => {
        if (estado) {
            updateBoard(index);
        }
    }

    return (
        <div onClick={handleClick} className={clase}>{children}</div>
    )
}
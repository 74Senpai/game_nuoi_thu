import { useDrag } from "../../utils";

export function Food({ x = 0, y = 0 }) {

    const { position, handleMouseDown } = useDrag({ x, y });

    return (
        <div
            className="food-box"
            onMouseDown={handleMouseDown}
            style={{
                position: 'absolute',
                left: position.x,
                top: position.y,
                color: 'white',
                cursor: 'grab',
                userSelect: 'none',
            }}>
            <img src="/assets/cut.png" />
        </div>
    )
}

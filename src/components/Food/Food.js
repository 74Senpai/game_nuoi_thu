import { useDrag } from "../../utils"

function Food({ x = 0, y = 0 }) {

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


export function FoodsBox() {
    return (
        <div className="foods-box">
            <Food x={40} y={36} />
            <Food x={72} y={45} />
            <Food x={14} y={82} />
        </div>
    )
}
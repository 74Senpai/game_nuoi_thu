import { ImageAnimator } from "../../utils";

export function Pet() {
    const frames = [
        'frame0000.png',
        'frame0001.png',
        'frame0002.png',
        'frame0003.png',
        'frame0004.png',
        'frame0005.png',
        'frame0006.png',
        'frame0007.png',
        'frame0008.png',
        'frame0009.png',
        'frame0010.png',
        'frame0011.png',
        'frame0012.png',
        'frame0013.png',
        'frame0014.png',
        'frame0015.png',
        'frame0016.png',
        'frame0017.png',
        'frame0018.png'
    ];

    return (
        <div>
            <ImageAnimator images={frames} interval={150} />
        </div>
    );
}
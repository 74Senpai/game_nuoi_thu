import { ImageAnimator } from "../../utils";

export function Pet() {
    const frames = [
        'frame0000_cop.png',
        'frame0001_cop.png',
        'frame0002_cop.png',
        'frame0003_cop.png',
        'frame0004_cop.png',
        'frame0005_cop.png',
        'frame0006_cop.png',
        'frame0007_cop.png',
        'frame0008_cop.png',
        'frame0009_cop.png',
        'frame0010_cop.png',
        'frame0011_cop.png',
        'frame0012_cop.png',
        'frame0013_cop.png',
        'frame0014_cop.png',
        'frame0015_cop.png',
        'frame0016_cop.png',
        'frame0017_cop.png',
        'frame0018_cop.png'
    ];

    return (
        <div>
            <ImageAnimator images={frames} interval={150} />
        </div>
    );
}
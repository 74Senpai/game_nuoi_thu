import { ImageAnimator } from "../../utils";

export function Pet() {
    const frames = [
        '/bo_an_frame/frame0000.png',
        '/bo_an_frame/frame0001.png',
        '/bo_an_frame/frame0002.png',
        '/bo_an_frame/frame0003.png',
        '/bo_an_frame/frame0004.png',
        '/bo_an_frame/frame0005.png',
        '/bo_an_frame/frame0006.png',
        '/bo_an_frame/frame0007.png',
        '/bo_an_frame/frame0008.png',
        '/bo_an_frame/frame0009.png',
        '/bo_an_frame/frame0010.png',
        '/bo_an_frame/frame0011.png',
        '/bo_an_frame/frame0012.png',
        '/bo_an_frame/frame0013.png',
        '/bo_an_frame/frame0014.png',
        '/bo_an_frame/frame0015.png',
        '/bo_an_frame/frame0016.png',
        '/bo_an_frame/frame0017.png',
        '/bo_an_frame/frame0018.png',
        '/bo_an_frame/frame0019.png',
    ];

    return (
        <div>
            <ImageAnimator images={frames} interval={150} />
        </div>
    );
}
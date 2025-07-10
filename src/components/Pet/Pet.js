import { ImageAnimator } from "../../utils";
import {PET_EAT_FRAMES} from '../../store';

export function Pet() {

    return (
        <div>
            <ImageAnimator images={PET_EAT_FRAMES} interval={150} />
        </div>
    );
}
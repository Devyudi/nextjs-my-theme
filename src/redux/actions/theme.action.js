import {THEME_CHANGE_MODE} from "@moonlay/src/redux/constants";

export function ChangeTheme(mode = String){
    return {
        type: THEME_CHANGE_MODE,
        mode
    }
}
export const useImage = () => {
    return function changeImage(desc) {
        if (desc === "пасмурно") {
            return "./images/card_icons/mainly__cloudly.svg";
        } else if (desc === "ясно") {
            return "./images/card_icons/sun.svg";
        } else if (desc === "переменная облачность") {
            return "./images/card_icons/mainly__cloudly.svg";
        } else if (desc === "небольшой дождь") {
            return "./images/card_icons/small__rain.svg";
        } else if (desc === "облачно с прояснениями") {
            return "./images/card_icons/small__rain__sun.svg";
        }
    };
};

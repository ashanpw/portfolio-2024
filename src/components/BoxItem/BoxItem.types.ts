export interface BoxItemProps {
    showTextOnMobile?: boolean;
    content: {
        header: string;
        listItems: string[];
        bgImg?: string;
        bgImgAlt?: string;
    };
}

export interface BoxItem {
    header: string;
    listItems: string[];
}

export interface BoxItemProps {
    useDarkMode?: boolean;
    content: {
        header: string;
        listItems: string[];
        bgImg?: string;
        bgImgAlt?: string;
        idx?: number;
    };
}

export interface BoxItem {
    header: string;
    listItems: string[];
}

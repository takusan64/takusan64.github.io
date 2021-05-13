export interface Header {
    title: string,
    logo: string
}

export interface ContentCardDetail {
    title: string,
    discription: string[],
}

export interface ContentCard {
    title: string,
    discription: string,
    src: string,
    url?: string,
    content_card_detail?: ContentCardDetail
}

export interface ContentCards {
    title?: string,
    content_card: Array<ContentCard>
}

export interface ContentTypography {
    title: string,
    discription: string
}

export interface Contents {
    content_typography: Array<ContentTypography>,
    content_cards: Array<ContentCards>
}

export interface Contacts {
    src: string,
    url: string,
    discription: string
}

export interface Footer {
    copy_right: string,
    contacts:Array<Contacts>
}
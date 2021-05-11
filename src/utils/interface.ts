export interface Header {
    title: string
}

export interface ContentCardDetail {
    title: string,
    discription: string[],
}

export interface ContentCard {
    title: string,
    discription: string,
    src: string,
    content_card_detail: ContentCardDetail
}

export interface ContentCards {
    title: string,
    content_card: Array<ContentCard>
}

export interface Contents {
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
export interface Header {
    title: string,
    logo: string
}

export interface ContentCardDetail {
    title: string,
    discription: string[],
}

export interface ContentTable {
    title: string,
    discription: string,
    icon: string
}

export interface ContentCard {
    title: string,
    discription: string,
    src: string,
    url?: string,
    content_card_detail?: ContentCardDetail
}

export interface Content {
    title?: string,
    discription?: string,
    content_card?: Array<ContentCard>
    content_table?: Array<ContentTable>
}

export interface Contents {
    type: string,
    content: Content
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
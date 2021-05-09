export interface Header {
    title: string
}

export interface ContactDetail {
    url: string,
    discription: string
}

export interface Contact {
    [key:string]: ContactDetail
}

export interface Footer {
    copy_right: string,
    contacts:Contact
}
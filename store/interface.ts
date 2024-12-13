export enum TypeLayout {
  Grid,
  List
}
export interface IndustryIdentifiersInterface {
  type: string
  identifier: string
}
export interface IVolumeInfo {
  title: string
  subtitle: string
  authors: Array<string>
  publishedDate: string
  industryIdentifiers: IndustryIdentifiersInterface[]
  readingModes: {
    text: boolean
    image: boolean
  }
  pageCount: number
  printType: string
  maturityRating: string
  allowAnonLogging: boolean
  contentVersion: string
  panelizationSummary: {
    containsEpubBubbles: false
    containsImageBubbles: false
  }
  imageLinks: {
    smallThumbnail: string
    thumbnail: string
  }
  language: string
  previewLink: string
  infoLink: string
  canonicalVolumeLink: string
}
export interface IAccessInfo {
  country: string
  viewability: string
  embeddable: true
  publicDomain: true
  textToSpeechPermission: string
  epub: {
    isAvailable: boolean
    downloadLink: string
  }
  pdf: {
    isAvailable: boolean
  }
  webReaderLink: string
  accessViewStatus: string
  quoteSharingAllowed: boolean
}
export interface IBookApi {
  //
  kind: string
  id: string
  etag: string
  selfLink: string
  volumeInfo: IVolumeInfo
  saleInfo: {
    country: string
    saleability: string
    isEbook: boolean
    buyLink: string
  }
  accessInfo: IAccessInfo
}

export interface IBook {
  id: string
  authors: string
  date: string
  country: string
  imgUrl: string
  title: string
}

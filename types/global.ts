export interface IBreadcrumb {
  name: string
  path?: string
}

export interface IProduct {
    id: number,
    images: string[],
    name: string,
    categoryId: number,
    rating: number,
}

export interface ICategory {
    id: number,
    name: string,
    count?: number
}
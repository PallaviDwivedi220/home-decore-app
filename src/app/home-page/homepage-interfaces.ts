export interface BestsellerProducts {
    name: string,
    image: string,
    price: number,
    link: string
}

export interface HeaderLinks {
    name: string,
    url: string,
    sublinks: string
}

export interface SubHeader {
    name: string,
    url: string
}

export interface BannerCarousel {
    id: number,
    imageUrl: string,
    link: string,
    altText: string
}

export interface FeaturedCategories{
    isNew: boolean,
    name: string,
    image: string,
    backgroundColor: string,
    link: string
}

export interface Features{
    icon: string,
    title: string,
    subtext: string
}

export interface SearchProducts{
    name: string,
    link: string
}

export interface HomepageData {
    headerLinks: HeaderLinks[];
    subHeaderLinks: SubHeader[];
    bestSellers: BestsellerProducts[];
    bannerCarousel: BannerCarousel[];
    featuredCategories: FeaturedCategories[];
    features: Features[];
    searchProducts: SearchProducts[];
  }



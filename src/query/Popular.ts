export const popularQuery = `query GetPopularTitles(
  $backdropProfile: BackdropProfile! = S1920,
  $country: Country! = US,
  $first: Int! = 50,
  $format: ImageFormat! = PNG,
  $language: Language! = en,
  $after: String,
  $popularTitlesFilter: TitleFilter,
  $popularTitlesSortBy: PopularTitlesSorting! = POPULAR,
  $profile: PosterProfile! = S718,
  $sortRandomSeed: Int! = 0,
) {
  popularTitles(
    country: $country
    filter: $popularTitlesFilter
    first: $first
    sortBy: $popularTitlesSortBy
    sortRandomSeed: $sortRandomSeed
    after: $after
  ) {
    results: edges {
      cursor
      info: node {
        ...PopularTitleGraphql
        __typename
      }
    }
    meta: pageInfo {
      startCursor
      endCursor
      hasPreviousPage
      hasNextPage
    }
    totalCount
  }
}

fragment PopularTitleGraphql on MovieOrShow {
  id
  objectId
  objectType
  content(country: $country, language: $language) {
    title
    fullPath
    trailers: clips(providers: [DAILYMOTION]) {
      sourceUrl
      externalId
      provider
      __typename
    }
    posterUrl(profile: $profile, format: $format)
    ... on MovieOrShowOrSeasonContent {
      backdrops(profile: $backdropProfile, format: $format) {
        backdropUrl
        __typename
      }
      __typename
    }
    externalIds {
      tmdbId
      __typename
    }
    isReleased
    runtime
    genres {
      translation(language: $language)
      shortName
    }
    __typename
  }
  __typename
}
`;

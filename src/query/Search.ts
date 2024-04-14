export const searchQuery = `query GetSuggestedTitles(
  $country: Country! = US,
  $language: Language! = en,
  $first: Int! = 20,
  $after: String
  $filter: TitleFilter
  $profile: PosterProfile! = S718
  $backdropProfile: BackdropProfile! = S1920
  $format: ImageFormat! = PNG
) {
  popularTitles(after: $after, country: $country, first: $first, filter: $filter) {
    results: edges {
      cursor
      info: node {
        ...SuggestedTitle
        __typename
      }
      __typename
    }
    meta: pageInfo {
      startCursor
      endCursor
      hasPreviousPage
      hasNextPage
    }
    totalCount
    __typename
  }
}

fragment SuggestedTitle on MovieOrShow {
  id
  objectType
  objectId
  content(country: $country, language: $language) {
    fullPath
    title
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
      imdbId
    }
    isReleased
    originalReleaseYear
    __typename
  }
  __typename
}
`;

export const infoQuery = `query GetUrlTitleDetails(
  $fullPath: String!,
  $country: Country! = US,
  $language: Language! = en,
  $episodeMaxLimit: Int! = 5,
  $format: ImageFormat! = PNG,
  $profile: PosterProfile! = S718
  $backdropProfile: BackdropProfile! = S1920
) {
  result: urlV2(fullPath: $fullPath) {
    id
    info: node {
      ...TitleDetails
      __typename
    }
  }
}

fragment TitleDetails on Node {
  id
  __typename
  ... on MovieOrShowOrSeason {
    objectId
    objectType
    content(country: $country, language: $language) {
      title
      fullPath
      shortDescription
      originalReleaseYear
      originalReleaseDate
      trailers: clips(providers: [DAILYMOTION, VIDEOBUSTER]) {
        ...TrailerClips
        __typename
      }
      posterUrl(profile: $profile, format: $format)
      backdrops(profile: $backdropProfile, format: $format) {
        backdropUrl
        __typename
      }
      externalIds {
        tmdbId
      }
      genres {
        translation(language: $language)
        shortName
      }
      runtime
      isReleased
      upcomingReleases(releaseTypes: DIGITAL) {
        releaseCountDown(country: $country)
        releaseDate
        label
        package {
          id
          packageId
          shortName
          clearName
          __typename
        }
        __typename
      }
      ... on MovieOrShowContent {
        originalTitle
        ageCertification
        productionCountries
        __typename
      }
      ... on SeasonContent {
        seasonNumber
        __typename
      }
      __typename
    }
    __typename
  }
  ... on Show {
    totalSeasonCount
    seasons {
      id
      objectId
      objectType
      totalEpisodeCount
      content(country: $country, language: $language) {
        posterUrl(profile: $profile, format: $format)
        seasonNumber
        fullPath
        title
        upcomingReleases(releaseTypes: DIGITAL) {
          releaseDate
          releaseCountDown(country: $country)
          package {
            id
            shortName
            __typename
          }
          __typename
        }
        isReleased
        originalReleaseYear
        __typename
      }
      show {
        id
        objectId
        objectType
        content(country: $country, language: $language) {
          title
          __typename
        }
        __typename
      }
      __typename
    }
    recentEpisodes: episodes(limit: $episodeMaxLimit, releasedInCountry: $country) {
      id
      objectId
      content(country: $country, language: $language) {
        title
        shortDescription
        episodeNumber
        seasonNumber
        isReleased
        upcomingReleases {
          releaseDate
          label
          __typename
        }
        __typename
      }
      seenlistEntry {
        createdAt
        __typename
      }
      __typename
    }
    __typename
  }
  ... on Season {
    totalEpisodeCount
    episodes(limit: $episodeMaxLimit) {
      id
      objectType
      objectId
      seenlistEntry {
        createdAt
        __typename
      }
      content(country: $country, language: $language) {
        title
        shortDescription
        episodeNumber
        seasonNumber
        isReleased
        upcomingReleases(releaseTypes: DIGITAL) {
          releaseDate
          label
          package {
            id
            packageId
            __typename
          }
          __typename
        }
        __typename
      }
      __typename
    }
    show {
      id
      objectId
      objectType
      totalSeasonCount
      customlistEntries {
        createdAt
        genericTitleList {
          id
          __typename
        }
        __typename
      }
      tvShowTrackingEntry {
        createdAt
        __typename
      }
      fallBackClips: content(country: $country, language: "en") {
        videobusterClips: clips(providers: [VIDEOBUSTER]) {
          ...TrailerClips
          __typename
        }
        dailymotionClips: clips(providers: [DAILYMOTION]) {
          ...TrailerClips
          __typename
        }
        __typename
      }
      content(country: $country, language: $language) {
        title
        ageCertification
        fullPath
        genres {
          shortName
          __typename
        }
        credits {
          role
          name
          characterName
          personId
          __typename
        }
        productionCountries
        externalIds {
          imdbId
          __typename
        }
        upcomingReleases(releaseTypes: DIGITAL) {
          releaseDate
          __typename
        }
        backdrops(profile: $backdropProfile, format: $format) {
          backdropUrl
          __typename
        }
        posterUrl(profile: $profile, format: $format)
        isReleased
        videobusterClips: clips(providers: [VIDEOBUSTER]) {
          ...TrailerClips
          __typename
        }
        dailymotionClips: clips(providers: [DAILYMOTION]) {
          ...TrailerClips
          __typename
        }
        __typename
      }
      seenState(country: $country) {
        progress
        __typename
      }
      watchlistEntryV2 {
        createdAt
        __typename
      }
      dislikelistEntry {
        createdAt
        __typename
      }
      likelistEntry {
        createdAt
        __typename
      }
      __typename
    }
    seenState(country: $country) {
      progress
      __typename
    }
    __typename
  }
}

fragment TrailerClips on Clip {
  sourceUrl
  externalId
  provider
  name
  __typename
}`;

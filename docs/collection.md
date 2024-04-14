# Collection

## Routes

```bash
https://localhost:8080/collection
```

## Query Parameter

| Parameter | Type | Description | Required | Default |
|---|---|---|:---:|:---:|
| after | string  | | No  | `""`  |
| first | number  | The number of results | No  | `50`  |
| language | string | [ISO 639-1 Language Code](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes) | No | `en` |
| sort | [Sort](/src/types/variables.ts?plain=1#L49) | Sort type of the result value | No | `POPULAR` |
| country | [Country](/src/types/country.ts) | ISO 3166 country codes | No | `US` |
| profile | [PosterProfile](/src/types/variables.ts?plain=1#L93) | Poster Size | No | `LARGE` |
| backdropProfile | [BackdropProfile](/src/types/variables.ts?plaint=1#L99) | Backdrop Size | No | `EXTRA_LARGE` |
| format | [ImageFormat](/src/types/variables.ts?plain=1#L106) | Image Type Format | No | `PNG` |
| ageRestriction | [AgeRestriction](/src/types/variables.ts?plain=1#L58) | Filter by age | No | `[]` |
| genres | [Genres](/src/types/variables.ts?plain=1#L70) | Filter by genre | No | `[]` |
| excludeGenres | [Genres](/src/types/variables.ts?plain=1#L70) | Exclude genre from results | No | `[]` |
| provider | [Provider](/src/types/provider.ts) | Filter by providers | No | `[]` |
| type | [Type](/src/types/variables.ts?plain=1#L91) | Filter the result by `MOVIE` or `SHOW`. Leave empty array if you want both. | No | `[]` |

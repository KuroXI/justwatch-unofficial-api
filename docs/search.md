# Search

## Routes

```bash
https://localhost:8080/search/:query
```

## URL Parameter

| Parameter | Type | Description | Required | Default |
|---|---|---|:---:|:---:|
| query | string | Title of the movie/show | Yes | |

## Query Parameter

| Parameter | Type | Description | Required | Default |
|---|---|---|:---:|:---:|
| after | string | | No | `""` |
| first | number | The number of results | No | `20` |
| language | string | [ISO 639-1 Language Code](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes) | No | `en` |
| includeTitlesWithoutUrl | boolean | Include titles that don't have url | No | `false` |
| country | [Country](/src/types/country.ts) | ISO 3166 country codes | No | `US` |
| profile | [PosterProfile](/src/types/variables.ts?plain=1#L93) | Poster Size | No | `LARGE` |
| backdropProfile | [BackdropProfile](/src/types/variables.ts?plaint=1#L99) | Backdrop Size | No | `EXTRA_LARGE` |
| format | [ImageFormat](/src/types/variables.ts?plain=1#L106) | Image Type Format | No | `PNG` |

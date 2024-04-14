# Info

## Routes

```bash
https://localhost:8080/info
```

## Query Parameter

| Parameter | Type | Description | Required | Default |
|---|---|---|:---:|:---:|
| path | string | The path of movie/show | Yes | |
| episodeMaxLimit | number | The number of recent episode | No | `5` |
| language | string | [ISO 639-1 Language Code](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes) | No | `en` |
| profile | [PosterProfile](/src/types/variables.ts?plain=1#L93) | Poster Size | No | `LARGE` |
| backdropProfile | [BackdropProfile](/src/types/variables.ts?plaint=1#L99) | Backdrop Size | No | `EXTRA_LARGE` |
| format | [ImageFormat](/src/types/variables.ts?plain=1#L106) | Image Type Format | No | `PNG` |

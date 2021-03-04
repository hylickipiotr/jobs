# Jobs

Job searcher based on Pracuj.pl

### Search flow

- Scrap offers page
- isSearching = TRUE
- Update meta in state
- If offer exist in db
  - TRUE
    - Update data in db
  - FALSE
    - Add offer to db
- Get offers from db
  - Default sort: expirationDate ASC
  - Where:
    - expirationDate < dateNow
- isSearching = FALSE

## Pracuj.pl URL

https://www.pracuj.pl/praca

### Query params

```typescript
type SearchParams = {
  /** Category */
  cc: string[];
  /** Range distance */
  rd: number; //Przepisac ze stronki
  /** Region */
  r: string[];
};
```

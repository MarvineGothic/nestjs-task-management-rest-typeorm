export class SearchQuery {
  name?: string;
  email?: string;
}

export class GetUserFilterDTO {
  email?: string;
  search?: SearchQuery;
}

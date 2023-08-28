/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getWebMetadata = /* GraphQL */ `
  query GetWebMetadata($url_name: String!) {
    getWebMetadata(url_name: $url_name) {
      url_name
      date_created
      page_title
      word_count
      __typename
    }
  }
`;
export const listWebMetadata = /* GraphQL */ `
  query listWebMetadata {
	  listWebMetadata {
	    items {
	      url_name
	      date_created
	      page_title
	      word_count
	    }
  }
}
`;


/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateWebMetadata = /* GraphQL */ `
  subscription OnCreateWebMetadata(
    $url_name: String
    $date_created: String
    $page_title: String
    $word_count: Int
  ) {
    onCreateWebMetadata(
      url_name: $url_name
      date_created: $date_created
      page_title: $page_title
      word_count: $word_count
    ) {
      url_name
      date_created
      page_title
      word_count
      __typename
    }
  }
`;
export const onUpdateWebMetadata = /* GraphQL */ `
  subscription OnUpdateWebMetadata(
    $url_name: String
    $date_created: String
    $page_title: String
    $word_count: Int
  ) {
    onUpdateWebMetadata(
      url_name: $url_name
      date_created: $date_created
      page_title: $page_title
      word_count: $word_count
    ) {
      url_name
      date_created
      page_title
      word_count
      __typename
    }
  }
`;
export const onDeleteWebMetadata = /* GraphQL */ `
  subscription OnDeleteWebMetadata(
    $url_name: String
    $date_created: String
    $page_title: String
    $word_count: Int
  ) {
    onDeleteWebMetadata(
      url_name: $url_name
      date_created: $date_created
      page_title: $page_title
      word_count: $word_count
    ) {
      url_name
      date_created
      page_title
      word_count
      __typename
    }
  }
`;

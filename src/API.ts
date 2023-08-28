/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateWebMetadataInput = {
  url_name: string,
  date_created?: string | null,
  page_title?: string | null,
  word_count?: number | null,
};

export type WebMetadata = {
  __typename: "WebMetadata",
  url_name: string,
  date_created?: string | null,
  page_title?: string | null,
  word_count?: number | null,
};

export type UpdateWebMetadataInput = {
  url_name: string,
  date_created?: string | null,
  page_title?: string | null,
  word_count?: number | null,
};

export type DeleteWebMetadataInput = {
  url_name: string,
};

export type TableWebMetadataFilterInput = {
  url_name?: TableStringFilterInput | null,
  date_created?: TableStringFilterInput | null,
  page_title?: TableStringFilterInput | null,
  word_count?: TableIntFilterInput | null,
};

export type TableStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type TableIntFilterInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  contains?: number | null,
  notContains?: number | null,
  between?: Array< number | null > | null,
};

export type WebMetadataConnection = {
  __typename: "WebMetadataConnection",
  items?:  Array<WebMetadata | null > | null,
  nextToken?: string | null,
};

export type CreateWebMetadataMutationVariables = {
  input: CreateWebMetadataInput,
};

export type CreateWebMetadataMutation = {
  createWebMetadata?:  {
    __typename: "WebMetadata",
    url_name: string,
    date_created?: string | null,
    page_title?: string | null,
    word_count?: number | null,
  } | null,
};

export type UpdateWebMetadataMutationVariables = {
  input: UpdateWebMetadataInput,
};

export type UpdateWebMetadataMutation = {
  updateWebMetadata?:  {
    __typename: "WebMetadata",
    url_name: string,
    date_created?: string | null,
    page_title?: string | null,
    word_count?: number | null,
  } | null,
};

export type DeleteWebMetadataMutationVariables = {
  input: DeleteWebMetadataInput,
};

export type DeleteWebMetadataMutation = {
  deleteWebMetadata?:  {
    __typename: "WebMetadata",
    url_name: string,
    date_created?: string | null,
    page_title?: string | null,
    word_count?: number | null,
  } | null,
};

export type GetWebMetadataQueryVariables = {
  url_name: string,
};

export type GetWebMetadataQuery = {
  getWebMetadata?:  {
    __typename: "WebMetadata",
    url_name: string,
    date_created?: string | null,
    page_title?: string | null,
    word_count?: number | null,
  } | null,
};

export type ListWebMetadataQueryVariables = {
  filter?: TableWebMetadataFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListWebMetadataQuery = {
  listWebMetadata?:  {
    __typename: "WebMetadataConnection",
    items?:  Array< {
      __typename: "WebMetadata",
      url_name: string,
      date_created?: string | null,
      page_title?: string | null,
      word_count?: number | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateWebMetadataSubscriptionVariables = {
  url_name?: string | null,
  date_created?: string | null,
  page_title?: string | null,
  word_count?: number | null,
};

export type OnCreateWebMetadataSubscription = {
  onCreateWebMetadata?:  {
    __typename: "WebMetadata",
    url_name: string,
    date_created?: string | null,
    page_title?: string | null,
    word_count?: number | null,
  } | null,
};

export type OnUpdateWebMetadataSubscriptionVariables = {
  url_name?: string | null,
  date_created?: string | null,
  page_title?: string | null,
  word_count?: number | null,
};

export type OnUpdateWebMetadataSubscription = {
  onUpdateWebMetadata?:  {
    __typename: "WebMetadata",
    url_name: string,
    date_created?: string | null,
    page_title?: string | null,
    word_count?: number | null,
  } | null,
};

export type OnDeleteWebMetadataSubscriptionVariables = {
  url_name?: string | null,
  date_created?: string | null,
  page_title?: string | null,
  word_count?: number | null,
};

export type OnDeleteWebMetadataSubscription = {
  onDeleteWebMetadata?:  {
    __typename: "WebMetadata",
    url_name: string,
    date_created?: string | null,
    page_title?: string | null,
    word_count?: number | null,
  } | null,
};

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CardData, CardSendData } from '../../utils/mesto-api';

// import {MESTO_SERVER} from '../../utils/constants';

export const cardsApi = createApi({
  reducerPath: 'cardsApi',
  tagTypes: ['Cards'],
  baseQuery: fetchBaseQuery({
    baseUrl: `${MESTO_SERVER.address}/${MESTO_SERVER.groupId}`,
    prepareHeaders: (headers) => {
      headers.set('authorization', MESTO_SERVER.token);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCards: builder.query<CardData[], void>({
      query: () => ({ url: 'cards' }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ _id: id }) => ({ type: 'Cards', id } as const)),
              { type: 'Cards', id: 'LIST' },
            ]
          : [{ type: 'Cards', id: 'LIST' }],
    }),
    addCard: builder.mutation<CardData, CardSendData>({
      query: (body) => ({
        url: `cards`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Cards', id: 'LIST' }],
    }),
  }),
});

export const { useGetCardsQuery, useAddCardMutation } = cardsApi;

import { transport } from '../../plugins/axios';
import { normalize } from 'normalizr';

// import { commentsEntity } from "@entities/comments";
// import { formatComments } from "@utils-entity/comments";

import { API_URL } from '../../constants/index';

import mockBurgers from './__mocks__/burgers.json';

import type { Resolver } from '../types';
import type { BurgersRaw } from './types';

// import type { CommentId } from "@entities/comments/types";

export const resolveBurgers: Resolver<void, void> = async () => {
  try {
    // const raw = await transport.get(`${API_URL}/burgers`);
    const raw = mockBurgers;
    const formatted = console.log(raw);
  } catch (error) {
    console.log(error);
  }
};

// .then(({ data }) => formatComments(data))
// .then(({ total, rows }) => {
//   return { ...normalize(rows, commentsEntity), ...{ total: total } };
// });

// export const resolveComments: Resolver<
//   CommentsFilter,
//   ResolveCommentsResult
// > = ({ limit = TOPIC_COMMENTS_RECORD_LIMIT, offset, topicId }) =>
//   axios
//     .get(`${API_HOST}/forum/topics/${topicId}/all`, {
//       params: {
//         limit,
//         offset,
//       },
//       withCredentials: true,
//     })
//     .then(({ data }) => formatComments(data))
//     .then(({ total, rows }) => {
//       return { ...normalize(rows, commentsEntity), ...{ total: total } };
//     });

// export const resolveAddComment: Resolver<NewComment, NewCommentResult> = ({
//   message,
//   topicId,
// }) =>
//   axios
//     .post(
//       `${API_HOST}/forum/topics/${topicId}`,
//       { message },
//       {
//         withCredentials: true,
//       }
//     )
//     .then(({ data }) => data);

// export const resolveSetLike: Resolver<CommentId, void> = (commentId) =>
//   axios
//     .post(
//       `${API_HOST}/forum/comments/${commentId}/like`,
//       {},
//       {
//         withCredentials: true,
//       }
//     )
//     .then(({ data }) => data);

// export const resolveResetLike: Resolver<CommentId, void> = (commentId) =>
//   axios
//     .delete(`${API_HOST}/forum/comments/${commentId}/like`, {
//       withCredentials: true,
//     })
//     .then(({ data }) => data);

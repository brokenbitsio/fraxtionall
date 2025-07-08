export const queryKeys = {
  users: {
    all: ['users'] as const,
    details: (id: string) => ['users', 'details', id] as const,
    single: (id: string) => ['users', 'single', id] as const,
  },
  posts: {
    all: ['posts'] as const,
    details: (id: string) => ['posts', 'details', id] as const,
  },
  comments: {
    all: ['comments'] as const,
    byPost: (postId: string) => ['comments', 'byPost', postId] as const,
  },
};

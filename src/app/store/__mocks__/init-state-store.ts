export const initStateStore = {
  collections: {
    ingredients: {
      entities: {
        ingredients: {},
      },
      result: [],
      status: 'pending',
    },
    order: {
      entity: {
        name: '',
        order: {
          number: '',
        },
        success: false,
      },
      status: 'pending',
    },
    socket: {
      error: '',
      isConnect: false,
      isLoadingWs: true,
      orders: [],
      success: false,
      total: null,
      totalToday: null,
    },
    user: {
      _persist: {
        rehydrated: true,
        version: -1,
      },
      entity: {
        accessToken: '',
        refreshToken: '',
        success: false,
        user: {
          email: '',
          name: '',
        },
      },
      errorMessage: '',
      isForgot: false,
      status: 'pending',
    },
  },
  widgets: {
    burgerConstructor: {
      modalIsOpen: false,
      order: {
        bun: null,
        ingredients: [],
      },
    },
    burgerIngredients: {
      ingredient: {
        actual: null,
      },
      list: {
        actual: 'bun',
        types: ['bun', 'main', 'sauce'],
      },
    },
  },
};

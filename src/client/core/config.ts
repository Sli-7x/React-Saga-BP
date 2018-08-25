export default {
  apiUrl: 'http://localhost:3000/api/',

  // limits for  data portions (paging, etc...)
  pageSizes: {
    default: {
      list: 12,
      newest: 20,
      listPhotos: 5,
    },
  },

  // default, path to default, size for thumbs
  // images folders
  photos: {
    ads: {
      folder: 'ads',
      default: 'default_ad.jpg', // path to default
      thumbSize: {
        w: 70,
        h: 70,
      },
    },
    users: {
      folder: 'users',
      default: 'default_user.png',
    },
    companies: {
      folder: 'companies',
      default: 'default_user.png',
    },
  },
};

/**
 * Define all of your application routes here
 * for more information on routes, see the
 * official documentation https://router.vuejs.org/en/
 */
export default [
  {
    path: '/',
    // Relative to /src/views
    view: 'Home',
    props: false,
  },
  {
    path: '/details',
    name: 'details',
    view: 'Details',
    props: true,
  },
  {
    path: '/post',
    name: 'post',
    view: 'Post',
    props: false,
  },
]
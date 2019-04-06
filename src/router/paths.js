/**
 * Define all of your application routes here
 * for more information on routes, see the
 * official documentation https://router.vuejs.org/en/
 */
export default [
  {
    path: '/',
    url: 'views/Home',
    name: 'home',
    props: false
  },
  {
    path: '/details',
    url: 'views/Details',
    name: 'details',
    props: true
  },
  {
    path: '/post',
    url: 'views/Post',
    name: 'post',
    props: true
  },
  {
    path: '/camera',
    url: 'components/widgets/Camera',
    name: 'camera',
    props: true
  }
]

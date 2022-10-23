const config = {
  development: {
    baseUrl: 'http://129.211.51.16:8080',
  },
  production: {
    baseUrl: 'http://129.211.51.16:8080',
  },
}
const env = config[process.env.NODE_ENV]

export default env
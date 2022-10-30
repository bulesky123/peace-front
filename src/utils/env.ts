const config = {
  development: {
    baseUrl: 'https://zfeasy.com',
  },
  production: {
    baseUrl: 'https://zfeasy.com',
  },
}
const env = config[process.env.NODE_ENV]

export default env
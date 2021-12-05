module.exports = {
  networks: {
    development: {
      host: '127.0.0.1',
      post: 7545,
      network_id: '*' 
    }
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
}
module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'nodesql',
  define: {
    timestamps: true,
    underscored: true,
  },
};
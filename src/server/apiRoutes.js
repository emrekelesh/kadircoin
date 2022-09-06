const app = require('express')()
const getJobRoutes = require('./jobs/taapiJobs')

app.use('/coin', getJobRoutes)

module.exports = app
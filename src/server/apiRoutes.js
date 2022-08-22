const app = require('express')()
const getJobRoutes = require('./jobs/bianceJobs')

app.use('/coin', getJobRoutes)

module.exports = app
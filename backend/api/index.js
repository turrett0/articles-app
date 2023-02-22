let router = require('express').Router()
let assign = require('object-assign')
let mocks = require('./mock')
let rndm = require('rndm')
const moment = require('moment')
const paginate = require('./tools/paginate')

let ID_LENGTH = 24

router.get('/articles', function (req, res, next) {
  const { page, count, title, endDate, startDate } = req?.query || {};
  if (page && count) {
    let articles = title ? mocks.articles.filter(article => article.title.toLowerCase().includes(title.toLowerCase())) : mocks.articles.map(function (article) {
      return assign({}, article, {
        text: undefined,
      })
    })

    if (startDate && endDate) {
      articles = articles.filter(article => {

        const articleDate = moment(article.date);
        return articleDate.isAfter(startDate) && articleDate.isBefore(endDate)
      }
      )

    }

    const paginatedArticles = paginate(articles, count, page);
    res.json({ total: articles.length, data: paginatedArticles })
  } else {
    res.status(500).json({ error: 'Internal server error' })
  }

})

router.get('/articles/:id', function (req, res, next) {
  let article = mocks.articles.filter(function (article) {
    return article.id == req.params.id
  })[0]
  if (article) return res.json(article)

  res.status(404).json({ error: 'not found' })
})

router.delete('/articles/:id', function (req, res, next) {
  mocks.articles.filter(function (article) {
    return article.id !== req.params.id
  })

  res.status(200)
  // res.status(404).json({ error: 'not found' })
})

router.post('/articles', function (req, res, next) {
  let body = req.body
  let article = {
    text: body.text,
    title: body.title,
    id: rndm(ID_LENGTH),
    user: body.user,
    date: new Date(),
  }
  mocks.articles.push(article)

  res.json(article)
})

router.get('/comments', function (req, res, next) {
  let { article: aid, page, count } = req.query || {}
  let comments =
    aid !== null
      ? mocks.comments.filter(function (comment) {
        return comment.article === aid
      })
      : mocks.comments

  const paginatedComments = paginate(comments, count, page)
  res.json({
    data: paginatedComments, total: comments.length
  })
})

router.post('/comments', function (req, res, next) {
  let comment = {
    id: Date.now(),
    text: req.body.text,
    user: req.body.user,
    article: req.body.article,
  }
  mocks.comments.push(comment)
  res.json(comment)
})

module.exports = router

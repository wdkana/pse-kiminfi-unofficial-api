const paginate = require('../helpers/paginate')
const domestik = require('../domestik.json')
const asing = require('../asing.json')

const err = {
  "data": [
    {
      error: "not found"
    },
  ]
}

function main(option) {
  const { limit, page } = req.query
  const { data, limits, pageCount, pages, total } = paginate(option == "asing" ? asing : option == "domestik" ? domestik : err, limit, page);
  res.json({
    data,
    option: option,
    meta: {
      page: {
        currentPage: pages,
        perPage: limits,
        total: total,
        pageCount: pageCount,
      }
    }
  });
};

exports.main = main

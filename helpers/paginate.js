const paginate = (asing, limit, page) => {
  const totalData = parseInt(asing.data.length)
  let limits = parseInt(limit)

  const pageCount = Math.ceil(totalData / limits);

  let pages = parseInt(page);
  if (pages > pageCount) pages = pageCount;
  if (pages < 1) pages = 1;


  const newFrom = pages * limits - limits;
  const newTo = newFrom + limits;

  let data = []
  if (pages == 1) {
    for (let index = pages - 1; index < limits; index++) {
      data.push(asing.data[index]);
    }
  } else {
    for (let index = newFrom; index < newTo; index++) {
      data.push(asing.data[index]);
    }
  }

  return { data, pageCount, limits, pages, total: totalData };
}

module.exports = paginate
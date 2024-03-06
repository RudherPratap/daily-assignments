const movie = require('./db.js');

async function getMovies() {
  const db = await movie();
  const collect = await db.collection("moviesData");

  const aggree1 = await collect.aggregate([{
    $sort: { year: 1 }
  },
  { $limit: 4 }
  ]).toArray();
  console.dir(aggree1);

  const aggree3 = await collect.aggregate([{
    $group: { _id: '$genres' }
  },
  { $limit: 4 }
  ]).toArray();
  console.dir(aggree3);

  const aggree4 = await collect.aggregate([
    {
      $group: {
        _id: '$genres',
        count: { $sum: 1 }
      }
    },
    { $limit: 4 }
  ]).toArray();
  console.dir(aggree4);

  const aggree5 = await collect.aggregate([
    {
      $sort: { year: -1 }
    },
    {
      $group: {
        _id: '$genres',
        latestRelease: { $first: '$title' }
      }
    }, { $limit: 4 }
  ]).toArray();
  console.dir(aggree5);//document by genres field and then groupd in latest movies 

  const aggree6 = await collect.aggregate([(Year) => {
    $match: { countries: { "USA" } }
  },
  { $limit: 4 }
  ]).toArray();
  console.dir(aggree6);//movies from country USA

  const aggree7 = await collect.aggregate([{
    $group: { _id: null, avgReleaseYear: { $avg: '$year' } }
  },
  ]).toArray();
  console.dir(aggree7);

  const aggree8 = await collect.aggregate([{
    $group: {
      _id: '$genre',
      avgTitleLength: { $avg: { $strLenCP: '$title' } }
    }
  },
  { $limit: 4 }
  ]).toArray();
  console.dir(aggree8);//gives the average titlelength

  const aggree9 = await collect.aggregate([
    {
      $group: {
        _id: '$genres',
        count: { $sum: 1 }
      }
    },
    {
      $sort: { count: -1 }
    },
    { $limit: 4 }
  ]).toArray();
  console.dir(aggree9);//groups documents by the 'genres' field

  const aggree10 = await collect.aggregate([
    {
      $project: {
        title: 1,
        titleLength: { $strLenCP: '$title' }
      }
    },
    {
      $sort: { titleLength: -1 }
    },
    { $limit: 4 }
  ]).toArray();
  console.dir(aggree10);//for titlelength of upto 4 movies

  const aggree11 = await collect.aggregate([(Genres) => {
    $match: { genres: { $in: Genres } }
  }, { $limit: 4 }
  ]).toArray();
  console.dir(aggree11);//matches the genres of different movies 

  const aggree12 = await collect.aggregate([{
    $group: { _id: null, averageRuntime: { $avg: '$runtime' } }
  },
  ]).toArray();
  console.dir(aggree12);//average runtime 

  const aggree13 = await collect.aggregate([{ $unwind: '$genres' },
  { $group: { _id: null, uniqueGenres: { $addToSet: '$genres' } } },
  { $limit: 4 }
  ]).toArray();
  console.dir(aggree13);//unique genres

  const aggree14 = await collect.aggregate([{ $unwind: '$languages' },
  { $group: { _id: '$languages', count: { $sum: 1 } } },
  { $limit: 10 }
  ]).toArray();
  console.dir(aggree14);//number of movies for each language

  const aggree15 = await collect.aggregate([{
    $group: { _id: '$year', count: { $sum: 1 } }
  }, { $limit: 10 }
  ]).toArray();
  console.dir(aggree15);//number of movies released each year


}
getMovies();

// Workaround - replace POST method with GET to avoid 201 on POST.
module.exports = (req, _res, next) => {
  if (req.method === 'POST'|| req.method === 'PUT' || req.method === 'DELETE') {
    // Is a POST request. Change its method to return something from db.json.
    req.method = 'GET';
    next();
  } else {
    // Not a post request. Let db.json handle it
    next();
  }
};
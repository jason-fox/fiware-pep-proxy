const _ = require('underscore');

function bodyAnalyse(req, res, next) {
  let prefix = '';

  const ids = [];
  const attrs = [];
  const types = [];

  function getAttrs(obj) {
    if (Array.isArray(obj)) {
      obj.forEach((element) => {
        getAttrs(element);
      });
    } else {
      const keys = _.without(_.keys(obj), 'value', 'type', 'id', 'observedAt', 'metadata', 'unitCode');

      keys.forEach((key) => {
        if (Array.isArray(obj[key])) {
          prefix = key + '.';
          getAttrs(obj[key]);
        } else {
          attrs.push(prefix + key);
        }
      });

      if (obj.id) {
        ids.push(obj.id);
      }
      if (obj.type) {
        types.push(obj.type);
      }
    }
  }

  req.locals = req.locals || {};

  if (req.body) {
    getAttrs(JSON.parse(req.body.toString()));
    req.locals.ids = _.uniq(ids);
    req.locals.attrs = _.uniq(attrs);
    req.locals.types = _.uniq(types);

  }
  next();
}

function paramsAnalyse(req, res, next) {
  if (req.params) {
    if (req.params.id) {
      req.locals.ids = req.locals.ids || [];
      if (!req.locals.ids.includes(req.params.id)) {
        req.locals.ids.push(req.params.id);
      }
    }

    if (req.params.attr) {
      req.locals.attr = req.locals.attr || [];
      if (!req.locals.attr.includes(req.params.attr)) {
        req.locals.ids.push(req.params.attr);
      }
    }
  }
  next();
}

function queryAnalyse(req, res, next) {
  if (req.query) {
    if (req.query.ids) {
      req.locals.ids = req.locals.ids || [];
      const ids = req.query.ids.split(',');
      ids.forEach((id) => {
        if (!req.locals.ids.includes(id)) {
          req.locals.ids.push(id);
        }
      });
    }

    if (req.query.type) {
      req.locals.types = req.locals.types || [];
      const types = req.query.type.split(',');
      types.forEach((type) => {
        if (!req.locals.types.includes(type)) {
          req.locals.types.push(type);
        }
      });
    }
  }
  next();
}

exports.bodyAnalyse = bodyAnalyse;
exports.paramsAnalyse = paramsAnalyse;
exports.queryAnalyse = queryAnalyse;

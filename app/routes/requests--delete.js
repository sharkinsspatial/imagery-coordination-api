import Boom from 'boom';
import Joi from 'joi';

import Request from '../models/request-model';
import Task from '../models/task-model';

module.exports = [
  {
    /* Get a request */
    method: 'DELETE',
    path: '/requests/{uuid}',
    config: {
      auth: 'jwt',
      validate: {
        params: {
          uuid: Joi.string().hex()
        }
      }
    },
    handler: (req, reply) => {
      const roles = req.auth.credentials && req.auth.credentials.roles || [];

      if (roles.indexOf('coordinator') === -1) {
        return reply(Boom.unauthorized('Not authorized to perform this action'));
      }

      Request.remove({_id: req.params.uuid})
        .then(res => Task.remove({requestId: req.params.uuid}))
        .then(res => reply({statusCode: 200, message: 'Request deleted', tasksDeleted: res.result.n}))
        .catch(err => reply(Boom.badImplementation(err)));
    }
  }
];

// collections
import { Users } from '../imports/api/users';
import { Logs } from '../imports/api/logs';
import { Vehicles } from '../imports/api/vehicles';

if (Meteor.isServer) {
  // user publications
  Meteor.publish('tasks', () => {
    return Users.find();
  });

  // log publications
  Meteor.publish('logs', () => {
    return Logs.find();
  });

  // vehicle publications
  Meteor.publish('vehicles', (userId) => {
    return Users.find({ user: { userId } });
  });
}

import { Meteor } from 'meteor/meteor';
import { Base, Email } from './base';

export const Users = Meteor.users;
export const User = Base.inherit({
  name: 'User',
  collection: Users,
  fields: {
    username: {
      type: String,
      validators: [
        {
          type: 'required',
        },
        {
          type: 'minLength',
          param: 1,
        },
      ],
    },
    emails: {
      type: [Email],
      default: [],
    },
  },
});

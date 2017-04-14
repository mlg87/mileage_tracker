// REVIEW: does meteor need to be impoted?
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Class } from 'meteor/jagi:astronomy';

export const Base = Class.create({
  name: 'Base',
  fields: {
    createdAt: {
      type: Date,
      immutable: true,
      default: () => new Date(),
      validators: [
        {
          type: 'required',
        },
      ],
    },
  },
});

export const NestedUser = Class.create({
  name: 'NestedUser',
  fields: {
    userId: {
      type: String,
      validators: [
        {
          type: 'required',
        },
      ],
    },
    username: {
      type: String,
      validators: [
        {
          type: 'required',
        },
      ],
    },
  },
});

export const Email = Class.create({
  name: 'Email',
  fields: {
    address: String,
    verified: Boolean,
  },
});

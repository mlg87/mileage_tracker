import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Base, NestedUser } from './base';

export const Vehicles = new Mongo.Collection('vehicles');
export const Vehicle = Base.inherit({
  name: 'Vehicle',
  collection: Vehicles,
  fields: {
    user: {
      type: NestedUser,
      validators: [
        {
          type: 'required',
        },
      ],
    },
    // TODO: add more validation to this
    year: {
      type: Number,
      validators: [
        {
          type: 'required',
        },
        {
          type: 'minLength',
          param: 4,
        },
      ],
    },
    make: {
      type: String,
      validators: [
        {
          type: 'required',
        },
      ],
    },
    model: {
      type: String,
      validators: [
        {
          type: 'required',
        },
      ],
    },
  },
});

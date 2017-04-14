import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Base, NestedUser } from './base';

export const Logs = Mongo.Collection('logs');
export const Log = Base.inherit({
  name: 'Log',
  collection: Logs,
  fields: {
    date: {
      type: Date,
      validators: [
        {
          type: 'required',
        },
        {
          type: 'date',
        },
      ],
    },
    vehicleId: {
      type: String,
      validators: [
        {
          type: 'required',
        },
      ],
    },
    user: {
      type: NestedUser,
      validators: [
        {
          type: 'required',
        },
      ],
    },
    geoLocation: {
      type: String,
      validators: [
        {
          type: 'required',
        },
      ],
    },
    gasPrice: {
      type: Number,
      validators: [
        {
          type: 'required',
        },
        {
          type: 'gt',
          param: 0,
        },
      ],
    },
    tripMiles: {
      type: Number,
      validators: [
        {
          type: 'required',
        },
        {
          type: 'gt',
          param: 0,
        },
      ],
    },
    gallons: {
      type: Number,
      validators: [
        {
          type: 'required',
        },
        {
          type: 'gt',
          param: 0,
        },
      ],
    },
  },
});

import _ from 'lodash';
import metadata from '../metadata.json';

export const getMetadata = (key) => {
  return _.get(metadata, key);
};

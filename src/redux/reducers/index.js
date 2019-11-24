import { combineReducers } from 'redux';
import authReducer from './AuthReducer';
import propertiesReducer from './PropertiesReducer';
import singlePropertyReducer from './SinglePropertyReducer';

export default combineReducers({
  auth: authReducer,
  property: singlePropertyReducer,
  properties: propertiesReducer,
});

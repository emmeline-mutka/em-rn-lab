import 'react-native';
import React from 'react';
// Note: test renderer must be required after react-native.
import DiaryComponent from '../Components/DiaryComponent';
import FeedComponent from '../Components/FeedComponent';
import AppointmentComponent from '../Components/AppointmentComponent';
import MainComponent from '../Components/MainComponent';
import renderer from 'react-test-renderer';

it('renders components correcly', () => {
  renderer.create(<DiaryComponent />);
  renderer.create(<FeedComponent />);
  renderer.create(<AppointmentComponent />);
  renderer.create(<MainComponent />);
});

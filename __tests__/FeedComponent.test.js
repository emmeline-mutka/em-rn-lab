import 'react-native';
import React from 'react';
import FeedComponent from '../Components/FeedComponent';

import { render } from '@testing-library/react-native';

it("Ensure FeedComponent has text element in it", () => {
    const { getByText } = render(<FeedComponent />);
    const element = getByText("Morgon:");
});
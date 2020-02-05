import * as React from 'react';
import {shallow} from 'enzyme';
import {KeepBuilder} from './KeepBuilder';

describe('KeepBuilder', () => {
  it('renders a keep builder', () => {
    const app = shallow(<KeepBuilder />);

    expect(app.find('.KeepBuilder').exists()).toBe(true);
  });
});
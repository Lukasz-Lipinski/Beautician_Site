import { Contact } from "..";
import  renderer  from 'react-test-renderer';

describe('testing Contact component', () => {
  it('should receive snapshot', () => {
    const component = renderer.create(<Contact />).toJSON();
    expect(component).toMatchSnapshot();
  });
  it('should recevie info about contact', () => { });
  it('should show contact form', () => { });
});
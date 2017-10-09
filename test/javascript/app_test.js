import { mount } from 'avoriaz'

import App from 'app'

describe('App', function() {
  it('renders Child properly', function() {
    const component = mount(App)
    expect(component.text()).to.include('Hello, wonderful Rails user!')
  })
})

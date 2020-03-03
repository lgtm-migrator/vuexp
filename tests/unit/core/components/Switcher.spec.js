import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import sinon from 'sinon';
import Switcher from '../../../../src/core/components/Switcher/Switcher';

describe.only('Switcher', () => {
  const checked = false;
  const checkedChange = sinon.spy();
  const clickHandler = sinon.spy(Switcher.methods, 'updateValue');
  const wrapper = mount(Switcher, {
    model: {
      event: 'input',
      prop: 'checked',
    },
    props: {
      checked: {
        type: Boolean,
        default: false,
      },
    },
    propsData: {
      checked,
    },
    listeners: {
      checkedChange,
    },
  });

  describe('the switcher component is an input component and its type is checkbox.', () => {
    it('there is an input field.', () => {
      expect(wrapper.contains('input')).to.equal(true);
    });
    it('the type of the component is checkbox', () => {
      expect(wrapper.find('input').attributes().type).to.equal('checkbox');
    });
  });

  describe('The wrapper component receives given props correctly.', () => {
    it(`checked value of the input is equal to ${checked}`, () => {
      expect(wrapper.vm.checked).to.equal(checked);
    });

    it('checkedChange event listener is passed to the component successfully.', () => {
      expect(wrapper.vm.$listeners.checkedChange).to.not.equal(undefined);
    });
  });

  describe('The wrapper component detects changes in the input field and also throw appropriate events.', () => {
    it(`switcher component gets clicked, it detects the click behaviour and then, changes the value(${checked}) to ${!checked}.`, () => {
      wrapper.trigger('click');
      expect(clickHandler.called).to.equal(true);
      expect(wrapper.find('input').element.checked).to.equal(true);
    });
    it('switcher component emits input and checkedChange events correctly.', () => {
      expect(wrapper.emitted().input.length).to.equal(1);
      expect(wrapper.emitted().input[0][0]).to.equal(true);
      expect(wrapper.emitted().checkedChange.length).to.equal(1);
    });
  });
  describe('The Switcher component applies background props set on implementation.', () => {
    const backgroundColor = 'blue';
    const offBackgroundColor = 'gray';
    let color = 'purple';
    let buttonSize = '30px';
    let wrapper;

    before(() => {
      wrapper = mount(Switcher, {
        propsData: {
          backgroundColor,
          offBackgroundColor,
          color,
          buttonSize,
        },
      });
    });

    it(`background prop should change the background of the component to ${backgroundColor}`, () => {
      expect(wrapper.props().backgroundColor).to.equal(backgroundColor);
    });

    it(`offBackgroundColor prop should change the background of the component to ${offBackgroundColor} on off state`, () => {
      expect(wrapper.props().offBackgroundColor).to.equal(offBackgroundColor);
    });

    it(`color prop should change the color of the circle to ${color}`, () => {
      expect(wrapper.props().color).to.equal(color);
    });

    it(`buttonSize prop should change the button size of the circle to ${buttonSize}`, () => {
      expect(wrapper.props().buttonSize).to.equal(buttonSize);
    });
  });
});

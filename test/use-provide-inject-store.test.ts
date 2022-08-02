import { mount } from '@vue/test-utils';
import Parent from './../docs/demo/useProvideInjectStore/parent.vue';

describe('useProvideStore/useInjectStore', () => {
  it('test data', () => {
    const wrapper = mount(Parent);
    const wrapperVM = wrapper.vm;
    const childRef = wrapper.findComponent({ ref: 'childRef' }).vm;
    expect(wrapperVM.name).toEqual(childRef.name);
    expect(wrapperVM.age).toEqual(childRef.age);
  });

  it('getYounger, test reactive', () => {
    const wrapper = mount(Parent);
    const wrapperVM = wrapper.vm;
    const childRef = wrapper.findComponent({ ref: 'childRef' }).vm;
    expect(wrapperVM.name).toEqual(childRef.name);
    expect(wrapperVM.age).toEqual(childRef.age);
    // 父组件更改数据
    wrapperVM.getYounger();
    expect(wrapperVM.age).toEqual(childRef.age);
    // 子组件更改数据
    childRef.getYounger();
    expect(wrapperVM.age).toEqual(childRef.age);
  });
});

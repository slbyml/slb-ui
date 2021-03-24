import slbButton from './src/index';

/* istanbul ignore next */
slbButton.install = function(Vue) {
  Vue.component(slbButton.name, slbButton);
};

export default slbButton;
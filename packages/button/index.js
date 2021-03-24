import slbButton from './src/index';

slbButton.install = function(Vue) {
  Vue.component(slbButton.name, slbButton);
};

export default slbButton;
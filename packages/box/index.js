import slbBox from './src/index';

slbBox.install = function(Vue) {
  Vue.component(slbBox.name, slbBox);
};

export default slbBox;
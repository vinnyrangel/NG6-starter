import template from './hero.html';
import controller from './hero.controller';
import './hero.sass';

let heroComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller
};

export default heroComponent;

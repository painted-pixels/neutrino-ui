import Enzyme from 'enzyme';

/* eslint-disable global-require */
if (typeof window !== 'undefined') {
  window.resizeTo = (width, height) => {
    window.resizeTo(width ?? window.innerWidth, height ?? window.innerHeight)
    window.dispatchEvent(new Event('resize'));
  };
  window.scrollTo = () => {};
  // ref: https://github.com/ant-design/ant-design/issues/18774
  if (!window.matchMedia) {
    Object.defineProperty(window, 'matchMedia', {
      value: jest.fn(query => ({
        matches: query.includes('max-width'),
        addListener: jest.fn(),
        removeListener: jest.fn(),
      })),
    });
  }

  // Fix css-animation or rc-motion deps on these
  // https://github.com/react-component/motion/blob/9c04ef1a210a4f3246c9becba6e33ea945e00669/src/util/motion.ts#L27-L35
  // https://github.com/yiminghe/css-animation/blob/a5986d73fd7dfce75665337f39b91483d63a4c8c/src/Event.js#L44
  window.AnimationEvent = window.AnimationEvent || (() => {});
  window.TransitionEvent = window.TransitionEvent || (() => {});
}

const Adapter =
  process.env.REACT === '16'
    ? require('enzyme-adapter-react-16') // eslint-disable-line import/no-extraneous-dependencies,import/no-unresolved
    : require('@wojtekmaj/enzyme-adapter-react-17');

Enzyme.configure({ adapter: new Adapter() });

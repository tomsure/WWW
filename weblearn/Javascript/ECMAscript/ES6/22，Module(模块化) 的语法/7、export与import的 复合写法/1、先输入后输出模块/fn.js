var a=1;
//export {a}

import { a} from 'my_module';
export { a };

//export { foo, bar } from './script.js';

// 可以简单理解为。
import { foo, bar } from './script.js';
export { foo, bar };
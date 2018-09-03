const { describe, it, beforeEach, afterEach } = intern.getInterface('bdd');

import { w } from '@dojo/framework/widget-core/d';
import harness from '@dojo/framework/testing/harness';

import Dummy from './../../Dummy';

describe('Dummy', () => {

	it('should construct Dummy', () => {
		const h = harness(() => w(Dummy, {}));
		h.expect(() => null);
	});
});

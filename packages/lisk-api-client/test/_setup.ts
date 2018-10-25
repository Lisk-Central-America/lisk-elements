/*
 * Copyright © 2018 Lisk Foundation
 *
 * See the LICENSE file at the top-level directory of this distribution
 * for licensing information.
 *
 * Unless otherwise agreed in a custom licensing agreement with the Lisk Foundation,
 * no part of this software, including this file, may be copied, modified,
 * propagated, or distributed except according to the terms contained in the
 * LICENSE file.
 *
 * Removal or modification of this copyright notice is prohibited.
 *
 */
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import 'chai/register-expect';
import sinonChai from 'sinon-chai';
import sinon from 'sinon';

process.env.NODE_ENV = 'test';

[sinonChai, chaiAsPromised].forEach(plugin => chai.use(plugin));

// Type declaration for sandbox
declare global {
	namespace NodeJS {
		interface Global {
			sandbox: sinon.SinonSandbox;
		}
	}
	const sandbox: sinon.SinonSandbox;
}

global.sandbox = sinon.createSandbox({
	useFakeTimers: true,
});
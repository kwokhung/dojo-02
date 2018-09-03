import { DNode } from '@dojo/framework/widget-core/interfaces';
import { ThemedMixin, theme } from '@dojo/framework/widget-core/mixins/Themed';
import { WidgetBase } from '@dojo/framework/widget-core/WidgetBase';

import { customElement } from '@dojo/framework/widget-core/decorators/customElement';
import * as css from './styles/dummy.m.css';

/**
 * @type DummyProperties
 *
 * Properties that can be set on Dummy components
 */
export interface DummyProperties { };

export const ThemedBase = ThemedMixin(WidgetBase);


@customElement({
	tag: 'dojo-Dummy',
	attributes: [],
	properties: [],
	events: []
})
@theme(css)
export class Dummy<P extends DummyProperties = DummyProperties> extends ThemedBase<P> {
	protected render(): DNode | DNode[] {
		return null;
	}
}

export default Dummy;

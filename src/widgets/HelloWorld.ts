import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { w } from '@dojo/framework/widget-core/d';
import { Menu } from '../widgets/Menu';
import { MenuItem } from '../widgets/MenuItem';

export class HelloWorld extends WidgetBase {

	private _onSelected(data: any) {
		console.log(data);
	}

	protected render() {
		return w(Menu, { onSelected: this._onSelected }, [
			w(MenuItem, { key: 'a1', title: 'Menu Item A1' }),
			w(MenuItem, { key: 'b1', title: 'Menu Item B1', selected: true }),
			w(MenuItem, { key: 'c1', title: 'Menu Item C1' })
		]);
	}
}

export default HelloWorld;

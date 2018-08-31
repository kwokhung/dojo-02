import { ProjectorMixin } from '@dojo/framework/widget-core/mixins/Projector';
import HelloWorld from './widgets/HelloWorld';

const Projector = ProjectorMixin(HelloWorld);
const projector = new Projector();

projector.append();

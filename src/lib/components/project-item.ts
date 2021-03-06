import { DragSource } from '../models/drag-drop';
import Component from './base-component';
import { autoBind } from '../decorators/autobind';
import { Project } from '../models/project';

// Project Item Class
export class ProjectItem
  extends Component<HTMLUListElement, HTMLLIElement>
  implements DragSource {
  private project: Project;

  get persons() {
    if (this.project.people === 1) {
      return ' 1 person';
    }
    return ` ${this.project.people} people`;
  }

  constructor(hostId: string, project: Project) {
    super('single-project', hostId, false, project.id);
    this.project = project;

    this.configure();
    this.renderContent();
  }

  @autoBind
  dragStartHandler(event: DragEvent) {
    event.dataTransfer!.setData('text/plain', this.project.id);
    event.dataTransfer!.effectAllowed = 'move';
  }

  dragEndHandler(_event: DragEvent) {}

  configure() {
    this.element.addEventListener('dragstart', this.dragStartHandler);
    this.element.addEventListener('dragend', this.dragEndHandler);
  }

  renderContent() {
    this.element.querySelector('h2')!.textContent = this.project.title;
    this.element.querySelector('h3')!.textContent = this.persons + ' assigned';
    this.element.querySelector('p')!.textContent = this.project.description;
  }
}

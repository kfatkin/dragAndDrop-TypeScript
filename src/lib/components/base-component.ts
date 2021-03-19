namespace App {
  // Component Base Class
  export abstract class Component<
    T extends HTMLElement,
    U extends HTMLElement
  > {
    templateElement: HTMLTemplateElement;
    hostElement: T;
    element: U;

    constructor(
      templateId: string,
      hostElementId: string,
      insertAtStart: boolean,
      newElementId?: string,
    ) {
      // Can use either type casting syntax shown below
      this.templateElement = document.getElementById(
        templateId,
      )! as HTMLTemplateElement;
      this.hostElement = <T>document.getElementById(hostElementId)!;

      const importedNode: DocumentFragment = document.importNode(
        this.templateElement.content,
        true,
      );
      this.element = importedNode.firstElementChild as U;
      if (newElementId) {
        this.element.id = newElementId;
      }

      this.attach(insertAtStart);
    }

    private attach(insertAtStart: boolean) {
      this.hostElement.insertAdjacentElement(
        insertAtStart ? 'afterbegin' : 'beforeend',
        this.element,
      );
    }

    abstract configure(): void;
    abstract renderContent(): void;
  }
}

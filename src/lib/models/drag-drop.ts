// Drag & Drop Interfaces
export interface DragSource {
  dragStartHandler(event: DragEvent): void;
  dragEndHandler(event: DragEvent): void;
}

export interface DragTarget {
  dragOverHanlder(event: DragEvent): void;
  dropHandler(event: DragEvent): void;
  dragLeaveHanlder(event: DragEvent): void;
}

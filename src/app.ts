/// <reference path="./lib/models/drag-drop.ts" />
/// <reference path="./lib/models/project.ts" />
/// <reference path="./lib/state/project-state.ts" />
/// <reference path="./lib/util/validation.ts" />
/// <reference path="./lib/decorators/autobind.ts" />
/// <reference path="./lib/components/project-item.ts" />
/// <reference path="./lib/components/project-input.ts" />
/// <reference path="./lib/components/project-list.ts" />

namespace App {
  new ProjectInput();
  new ProjectList('active');
  new ProjectList('finished');
}

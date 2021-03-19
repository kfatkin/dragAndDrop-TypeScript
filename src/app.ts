/// <reference path="./lib/components/project-input.ts" />
/// <reference path="./lib/components/project-list.ts" />

namespace App {
  new ProjectInput();
  new ProjectList('active');
  new ProjectList('finished');
}

# my-angular

Angular Material
mat-input
mat-card
mat-raised-button
mat-paginator

It was created an example (paginator component) showing up how to trigger an event from a child component to his parent

Created a custom module to import/export Angular Material components. This makes the code cleaner.
Imported the custom module in app.module.ts
Also imported Angular Material modules
Used pre-defined themes. It was imported on style.scss

Directivies
ngModel
ngModelChange
*ngFor
*ngIf

Created the following components
blog-list
blog-post-tile

Annotations
@Input() --> Used in components to accept attributes
@Output() --> Used for launch events
@Injectable()
@Pipe()

ng CLI parameters
ng generate class class-name
ng generate module module-name
ng generate component component-name
ng generate service service-name
ng genereate pipe pipe-name
Pipes are treated as a component and must be imported in app.module.ts and decrarated in declarations array
To inject pipes as we do with services, you must also to insert the pipe-name in providers array into app.module.ts. Then you can inject it in constructor of any class
ng new application-name
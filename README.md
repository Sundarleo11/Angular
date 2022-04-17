Angular
=======
Angular is a platform and framework for building single-page client applications using HTML and TypeScript. 
Angular is written in TypeScript. 
It implements core and optional functionality as a set of TypeScript libraries that you import into your applications.

Advantage
=========
1.Give our applications clean structure
2.lot of re use code.
3.Make our application testable

Architecture of Angular Apps
===========================

           HTTP REQ
Front end------------ >backend

HTML/CSS/JS/TS         DATA+API business logic


Angular Cli comment'
===================
npm install -g @angular/cli
or
npm install @angular/cli@7.0.3

to check ng -- version

cd switch to current folder  

ng name project

example
ng new AJD

some important comment

ctrl+shift+p  comment palat
code .  switch comment window

Folder structure
===============
e2e ----------->end 2 end point for application test
node moduler -->All 3 part libraries
src------------>actual folder strcture
app------------>mainly write code 
assets--------->main content static
envionments---->dev and production

Type script fundamental
-----------------------
1.type annotations
2.Arrow functionality
3.interface
4.class
5.constructor
6.modules
7.access modifier
8.properties

           after run
typescript----------->javascript
1.npm install -g typescript
2.tsc -v
3. create folder ->code main.ts 
4.ls->list of files
5.if you want remove file rm main.js
6. run the code -->tsc main.ts | node main.js

 1.TypeScript and Object-oriented Programming Fundamentals
 ----------------------------------------------------------
 1.type annotations
 2.arrow function 
 3.interface
 4.class
 5.constructor
 6.access mmodifier
 7.properties
 8.Module
 
 typescript
 ----------
 it's super javascript but it's won't support browser
 npm install -g typescript
 tsc --version
 Run :tsc .\Main.ts then run javascript.
 tsc main |node  main.js
 
 class
 -----
 cohesion
 --------
 
 Thing are realated which part of unit each work together.
 

Angular fundamental
-------------------
1.component

component encap->Data,HTML Templet,logic
moduler it's group of realted component
1.1 create component
1.2 Regsiter component
1.3 Add HTML

ng g c course

2.Templet
3.directives
To modife the DOM or exchange data values
4.service


2.Displaying Data and Handling Events
----------------------------------
1.display data
2.Apply class / styles dynamic 
3.formating data using pipes
4.Events handler

String interpolation
===================
 <h2>{{title}}</h2>
property binding (one way binding[compountent-->DOM])
================
Defination :
Property binding moves a value in one direction, from a component's property into a target element property.
For more information on listening for events, 
see Event binding. To read a target element property or call one of its methods, 
see the API reference for ViewChild and ContentChild.

property binding =[]
<h2 [textContent]="title"></h2> 


attribute binding
=================
What is difference between property binding and attribute binding?

In property binding, we only specify the element between brackets. 
But in the case of attribute binding, it starts with the prefix attar, followed by a dot (.), 
and the name of the attribute.
You then bind the attribute value using an expression that resolves to a string

  
<h2> courses</h2>
<h2 [textContent]="title"></h2>
  <li>{{getcourses()}}</li> 
        <table>
        <tr>
        <td [attr.colspan]="colspan"></td>
        </tr>
        </table>
<input type="text">

bootstrap
---------


classbinding
============
<button class="btn btn-primary"[class.active]="isActive">save</button>

stylebinding
============
<button [style.backgroundColor]="isActive ? 'blue':'red'">submit</button>

Event handling
==============
Event binding lets you listen for and respond to user actions such as keystrokes, 
mouse movements, clicks, and touches

event bubling
-------------
<div (click)="onclick($event)">
        <button (click)=onsave($event)>save</button>
        </div>
        <input (keyup.enter)="onKeyUp()">
		
		 onsave($event) {
        $event.stopPropagation();
        console.log("click event", $event);
    }
	
	

Event Fillter
============
  <input (keyup.enter)="onKeyUp()">
  
 onKeyUp() {
        console.log("Enter was pressed");
    }
	
Templet Event
============
Method 1
<input (keyup.enter)="onKeyUp($event)">

 onKeyUp($event) {
        console.log($event.target.value);
    }
	
Method 2
========
 <input #email (keyup.enter)="onKeyUp(email.value)">
 
 onKeyUp(email) {
        console.log(email);
    }
	
Two way binding
===============
Two-way binding gives components in your application a way to share data. 
Use two-way binding to listen for events and update values simultaneously between parent and child components.
need to import
==============
 <input [(ngModel)]="email" (keyup.enter)="onKeyUp()">
 
  email;
    onKeyUp() {
        console.log(this.email);
    }
	
Pipe to formating the data
==========================
1.uppercase
2.lowercase
3.%
4.currency
5.decimal

{{course.title| lowercase}}<br>
        {{ course.rating | number:'2.1-1'}}<br>
        {{course.Student | number}}<br>
        {{course.currency | currency}}<br>
        {{course.NewData | date:"shortDate"}}
		
		course = {

        title: "List of books",
        rating: 46778,
        Student: 34567,
        currency: 2356,
        NewData: new Date(2019, 1, 12)
    }
	
custome pipes
==============
What are custom pipes in Angular?

The most basic of pipe transforms a single value, into a new value.
 This value can be anything you like, a string, array, object, etc
 
 
need to import 
===============
{{text | summary}}
text = "akdldkdld skldndld sldncs  dolssppkw";

import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'summary'
})

export class Pipesumary implements PipeTransform {
    transform(value: String, ...args: any[]) {
        if (!value) {
            return null;
        }
        return value.substring(0, 10) + '......';
    }

}



Add fav 
======
<span class="glyphicon" aria-setsize="200px"
    [class.glyphicon-star]="isfav"
    [class.glyphicon-star-empty]="!isfav"
    (click)="onclick()"
    >


    </span> Star 
	
	 isfav: Boolean;
  constructor() { }

  ngOnInit() {
  }
  onclick() {
    this.isfav = !this.isfav;
  }
  

Building Re-usable Components 
==============================
1.pass data
2.Raise custome event
3.apply style
4.shadow DOM  -allows to apply scoped style to elements without bleeding out to the outer world
5.view encapuslution ,  encapsulation: ViewEncapsulation.Emulated,native some browser support,none

short form:div.panel.panel-default>div.panel.Heading+div.panel.body and press Enter






Directives
===========
1.ngfor
2.ngif
3.ngswitchcase
4.ngclass
5.ngstyles
6.building custome Directives

two class

structural 
----------
to modife the strcture of dom

Attribute
----------
to modife the Attribute of dom

if
===

<!--The content below is only a placeholder and can be replaced.-->
<div style="text-align:center">
  <h1>
    Welcome to {{ title }}!
  </h1>
  <!--method 1-->
 <!-- <div *ngIf="course.length>0">
   list of course
 </div>
 <div *ngIf="course.length==0">
  list of course is none
</div> -->

<!-- Method 2 -->
<!-- <div *ngIf="course.length>0; then  courselist else course1"></div>

<ng-template #courselist>
  list of course
</ng-template>

<ng-template #course1>
  list of course is none
</ng-template> -->

<!-- method 3
<ng-template [hidden]="course.length==0">
  list of course
</ng-template>

<ng-template [hidden]="course.length==0">
  list of course is none
</ng-template> -->

<nav class="nav pils">
  <li class="active"><a href=""></a>Map view</li>
  <li><a href=""></a>List view</li>
</nav>

<div>
<div >Map view content</div>
</div>

---other file-------
 title = 'Directives';
  course = [1, 2];
  
------ bootstrap--------------
@import url(https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js);
@import url(https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js);
@import url(https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css);  


SwitchCase
-----------
<ul class="nav nav-pills">
  <li [class.active]="viewMode =='map' "><a (click)="viewMode = 'map'">Map view</a></li>
  <li [class.active]="viewMode =='List' "><a (click)="viewMode = 'List'">List view</a></li>
 </ul><br>

<div [ngSwitch]="viewMode">
<div *ngSwitchCase="'map'">Map view content</div><br>
<div *ngSwitchCase="'List'" >List view content</div>
<div *ngSwitchDefault>Otherwise</div>
</div> 

other file
==========
 viewMode = 'map';
 
 ngFor
 ===
 <!-- if you want more details go through angular io website -->
<button (click)="add()">ADD</button>
<ul *ngFor="let course of courses; index as i">
  <li>{{i}}-{{course.name}}</li>
  <button (click)="remove(course)">Delete</button>
 <button (click)="Onsave(course)">Save</button>

</ul>{{i}}-{{course.name}}</li>
</ul>
---other file--- 
 courses = [
    { id: 1, name: 'Course1' },
    { id: 2, name: 'Course2' },
    { id: 3, name: 'Course3' },
  ]
  
  
  
  
    add() {
    this.courses.push({ id: 1, name: 'course4' })
  }

  remove(course) {
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);

  }
  
   Onsave(course) {
    course.name = 'update';
  }
  
  
  ngclass
  ======
  [ngClass]="{
       'glyphicon-star'=isfav,
       'glyphicon-star-empty'=!isfav

    }"
	
	
ng style
======
<button
    [ngStyle]="{
           'backgroundColor': canSave ? 'blue' : 'gray',
           'color': canSave ? 'white':'black' 
    }"
    >Save
       
    </button>
	
-----app compountent
Cansave=true


safe traval operator
---------------------
 task = {
    title: "Review the application",
    assignee: {
      name: "sundar"
    }

  
  }

  {{task.assignee.name}}
  
  Note: if assigneename is null there is way to slove the problem one is ? mark method and other one *ngIF method
  
 Custome dircetive
 ----------------
 ng g d name
 
Template form
=============
1.create a form
2.display error
3.disable submit button

FormGroup
1.touched
2.untouched
3.value
4.dirty
5.pristine
6.error
7.validation

Template drive form vs Reactive form the main difference is complex

simple form
----------

<form >
    <div class="form-group">
        <label for="firstname">First Name</label>
        <input ngModel name="firstname" #firstname="ngModel" (change)="log(firstname)" type="text" id="firstname" class="form-control">
        </div>
        <div class="form-group">
            <label for="comment">Comment</label>
            <textarea class="form-control" id="comment" rows="3"></textarea>
          </div>
          <button class="btn btn-primary">submit</button>

</form>

 log(x) {
    console.log("button was touched ", x);
  }
  
  valid checking
  
  <form >
    <div class="form-group">
        <label for="firstname">First Name</label>
        <input required ngModel name="firstname" #firstname="ngModel" (change)="log(firstname)" type="text" id="firstname" class="form-control">
    <div class="alert alert-danger" *ngIf="firstname.touched && !firstname.valid">First Name is required</div>    
    </div>
        <div class="form-group">
            <label for="comment">Comment</label>
            <textarea ngModel name="comment" class="form-control" id="comment" rows="3"></textarea>
          </div>
          <button class="btn btn-primary">submit</button>
		  
error valid

<form >
    <div class="form-group">
        <label for="firstname">First Name</label>
        <input required  minlength="3"  maxlength="10" pattern="sundar" ngModel name="firstname" #firstname="ngModel" (change)="log(firstname)" type="text" id="firstname" class="form-control">
    <div class="alert alert-danger" *ngIf="firstname.touched && !firstname.valid">

        <div *ngIf="firstname.errors.required">First Name is required</div>
        <div *ngIf="firstname.errors.minlength">First Name is required minlength 3</div>
        <div *ngIf="firstname.errors.pattern">First Name doesn't match</div>
    </div>    
    </div>
        <div class="form-group">
            <label for="comment">Comment</label>
            <textarea ngModel name="comment" class="form-control" id="comment" rows="3"></textarea>
          </div>
          <button class="btn btn-primary">submit</button>

</form>
		  

</form>

ngModelGroup

<form #f="ngForm" (ngSubmit)="submit(f)">
    <div ngModelGroup="contact" #contact="ngModelGroup">

        <div class="form-group">
            <label for="firstname">First Name</label>
            <input required  minlength="3"  maxlength="10" pattern="sundar" ngModel name="firstname" #firstname="ngModel" (change)="log(firstname)" type="text" id="firstname" class="form-control">
        <div class="alert alert-danger" *ngIf="firstname.touched && !firstname.valid">
    
            <div *ngIf="firstname.errors.required">First Name is required</div>
            <div *ngIf="firstname.errors.minlength">First Name is required minlength 3</div>
            <div *ngIf="firstname.errors.pattern">First Name doesn't match</div>
        </div>    
        </div>
            <div class="form-group">
                <label for="comment">Comment</label>
                <textarea ngModel name="comment" class="form-control" id="comment" rows="3"></textarea>
              </div>
              <button class="btn btn-primary">submit</button>
    </div>
   
disable button
--------------
<button class="btn btn-primary" [disabled]="!f.valid">submit</button>

summary 
 Formalcontrol ------->ngModel
 FormGroup ------------>ngform-output,, ngModelGroup-hierhacke.
 
 
 Dropdown and checkbox
 
 <form #f="ngForm" (ngSubmit)="submit(f)">
    <div ngModelGroup="contact" #contact="ngModelGroup">

        <div class="form-group">
            <label for="firstname">First Name</label>
            <input required  minlength="3"  maxlength="10" pattern="sundar" ngModel name="firstname" #firstname="ngModel" (change)="log(firstname)" type="text" id="firstname" class="form-control">
        <div class="alert alert-danger" *ngIf="firstname.touched && !firstname.valid">
    
            <div *ngIf="firstname.errors.required">First Name is required</div>
            <div *ngIf="firstname.errors.minlength">First Name is required minlength 3</div>
            <div *ngIf="firstname.errors.pattern">First Name doesn't match</div>
        </div>    
        </div>
            <div class="form-group">
                <label for="comment">Comment</label>
                <textarea ngModel name="comment" class="form-control" id="comment" rows="3"></textarea>
              </div>
              <div class="checkbox">
                   <input type="checkbox" ngModel name="subcribe">Subcribe my page
              </div>
              <div class="formGroup">
                  <label for="contact">contactMethod</label>
                  <select ngModel name="contactMethod" id="contact" class="form-control">
                    <option value=""></option>
                      <option *ngFor="let method of contactMethod" [value]="method.id">{{method.name}}</option>
					  !--[ngvalue]="method"  and if you want you can select multiple content using multiple keywory , using before select keyword-->
                  </select>
              </div>
              <p>
                  {{f.value | json}}
              </p>
              <button class="btn btn-primary" [disabled]="!f.valid">submit</button>
    </div>
   

</form>
 
 Reative form
 ============
 1.create controller program
 2.Add validation
 3.implements custome validation
 4.Asyn validation
 
 inheritnce
 ==========
 AbstractControl
 1.formcontrol
 2.formGroup
 
 1.create controller program
 
 1.import { ReactiveFormsModule, FormsModule } from '@angular/forms';.
 2.FormGroup and formControl need to add exclipct 
 
 Consuming HTTP Services
 =======================
 1.crud operation
 2.Extract re use data service
 3.property handle differnet kindso f error
 4.build appplication with proper seperation of concerns
 
   //GetMethod
  post: any[]

  constructor(http: Http) {

  
    http.get('https://jsonplaceholder.typicode.com/todos')
      .subscribe(responce => {
        // console.log(responce.json());
        this.post = responce.json();
      })
 html-->render the details
 
 //PostMethod
  createPost(input: HTMLInputElement) {

    let post = { title: input.value }
    // let post:any = { title: input.value }
    input.value = '';

    this.http.post(this.url, JSON.stringify(post))
      .subscribe(response => {
        post['id'] = response.json().id;
        this.post.splice(0, 0, post)
        // console.log(response.json())
      })

  //UpdateMethod
  UpdatePost(post) {
    this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true }))

      .subscribe(Response => {
        console.log(Response.json());
      })
  }


  //DeleteMethod
  DeletePost(post) {
    this.http.delete(this.url + '/' + post.id)

      .subscribe(Response => {
        let index = this.post.indexOf(post);
        this.post.splice(index, 1);
        //console.log(Response.json());
      })
	  
	  html--
	  
	  <input  (keyup.enter)="createPost(title)" #title type="text" class="form-control">

<ul class="list-group">
  <li *ngFor="let posts of post" class="list-group-item">
    <button (click)="UpdatePost(posts)"
    class="btn btn-default btn-sm">Update</button>

    <button (click)="DeletePost(posts)"
    class="btn btn-default btn-sm">Delete</button>
    {{posts.title}}</li>
  
</ul>
 
 how to add api ?
 1.import http in appmodule
 2.create constructor and render the data.
 
 



 
 life cylce hook
 ===============
 1.create a compountent
 2.render the website
 3.create render with child compountent
 4.destory the compountent
 
 onInit
 Onchange
 AfterContentInit
 
 folder move cmt:
  step 1:cd src/app
  step 2:mkdir services
  step 3: mv post.service.* services
  
 serivce mostly handling http responce and API
 
 Handling Error
 ------------
 UnExpected
 
 1.server is offline
 2.Network is down
 3.unhandling error
 
 Expected
 --------
 Not FOund error
 bad request 404
 
 
 missing :npm install rxjs-compat --save
 
 Differnet between obserable and promise 
 =======================================
 obserable is subcribe etc it's Lazy
 promise is eager  catch and final, then ets
 
 
 Routing and Navigation
 ======================
 1.configuration route
 2.implements single page application(spas)
 3.woking with route and query parameter
 4.programmatic application
 
 modules 1.formModule 2.reactiveModue 3.http 4.router
 
 steps
 1.configuration routes
 2.adding a routers outlet
 3.add links
 
 
 <a routerLink="/single attri">
 
  <a [routerLink]="['follower','follower.id']">
  
  
 Authentication 
 ==============
 1.jwt(json web tokens)
 2.stateless authentication
 3.Protect routes
 4.Redirect the page
 5.show/hidden
 
 Authorization
 -------------
              api
 1.clicent------------->server
              jwt
missing file			  
npm install angular2-jwt 


Deployment
----------
ng serve ---envionments=name
and import angular/cli json Files

ng lint automatical change code or change it correct syntex

ng lint --fix

hosting GitHub
--------------

ng build --prod -base --href=""
don't forgot it ending /	
	
	
   
  


	

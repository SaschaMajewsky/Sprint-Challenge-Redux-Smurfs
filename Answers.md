Q:
Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

A:
-Array.concat
-Array.map
-Array.filter

-Object.assign
const newObject = Object.assign({}, oldObject, {counter: myObject + 1});


Q:
Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

A:
Actions:
-An action is an info as an object that describes an UI event.
-Actions are beeing passed to reducers so that these know 
conditionally how to update a state tree.
-Action Creators are functions that create an action and returns it as 
an object.
-The store is the single source of truth, because it is a predictable 
state of the application that is immutable and thus can be accessed without
creating side effects or unwanted state intererences.

Reducers:
-Reducers are pure functions so they only act in their own scope.
-A reducer accepts a state tree and an action as argument and reduces them
into one updated state tree object.
-By this they define the state of our application through their immutable store
and make the views rerender.

Store:
-In the redux store the state data for the application is held aka. application state. 
-The redux store is immutable and only accessible by reducers replacing the store
with an updated state tree accordignly to the provided actions.
-Whenever data in the store gets changed all connected and affected components
receive new props and will rerender their states and their views.


Q:
What is the difference between Application state and Component state? When would be a good time to use one over the other?

A:
-The application state is the state that is immutably managed by Redux.
-The component state is a state that each component can hold and be updated through
a call of the setState method.
-By having a cental application state redux provides predictability of the application
and prevents weird unexpected side effect to occur. 
-Usually data from API calls or data that needs to be accessed in multiple component
trees is managed in the redux store/application store.


Q:
What is middleware?

A:
-Middleware is a usual technique used in software development to alter/handle
dataflow within an application.
-Middleware intercepts data before it reaches a certain point and then can 
alter or pass it around before it gets send back on its way through the application.
-In Redux Middleware an action is beeing dispatched before it reaches the reducer, so 
that the action get get manipulated, stay untouched, call different action or even be 
stopped out completely.


Q:
Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

A:
-Redux thunk not only has a funny name but also allows Redux to execute async 
operations.
-It is a middleware package for redux that allows the application to be not stopped
for example when an API call is made. The application can continue to run and just
async wait on the API data to be returned. Without it the whole application wouldn't be
able to serve other clients or requests until the API data is retrieved.


Q:
Which `react-redux` method links up our `components` with our `redux store`?

A:
-The connect() method is used for connecting components to the redux store.
-It works by using the Higher Order Function connect().
-The properties out of the mapStateToProps function are beeing provided to the 
component as Props.
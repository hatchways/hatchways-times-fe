## Answers
Question 1. Right now the data for the posts is coming from a json file. What changes would you have to make to the application if it came from an API? In what type of hook should you use to fetch the data and why? What other considerations would you have to make?

>Usage of the UseEffect Hook would need to be implemented if the data was fetched from the API, This hook allows us to let React know that after rendering, our component has to perform some function. 

>React also does not forget the passed function, and once the DOM updates are done, Call that function. This way it is useful for Data Fetching applications like from an API. 

>We also need to add Async Await for our application, as the data is being fetched first and then loaded, so not to give an empty page at the beginning 

Question 2. Part of this application uses the package nanoid to generate keys. What issue would this cause for generating keys in React?

>Keys help react increase it performance by making it's element distinguishable and decrease the render time between virtual and real DOM

>In our case using NanoID which is a Random ID generator, it forces to view every element in the list to be new or changed, and that causes a rerender, which in turn completely ruins the main point of using Keys in React, as it does not give the improved benefits which react key functionality provides.

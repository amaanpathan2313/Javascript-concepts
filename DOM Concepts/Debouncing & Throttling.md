

#   Debouncing & Throttling   #

When a user scroll the page Or press any button on UI the addevent listner function which add on that button or scrollbar which has been call that many times and due to this performance issue occur to overcome that issue we use Debouncing & Throttling methods.

#  Debouncing :

* Debouncing delays the execution of function until a specified time has pass since the last event.
* Debouncing are trigger when takes pause.
* Debouncing are applied on the input element.

e.g :

   Before Debouncing when we add addeventListener to the input element and user type a text on input box link "mumbai" than for each character of mumbai for "m","u","m","b","a","i"  for each charatere i will fetch the api (make API call). If the API are paid (It charge for each request). Then i will very costly for the API owner to reduce the cost we use Debouncing method.

   In Debouncing method whenever the user take a pose then it will be Fetch the Api
Just like above example if the user want to search Mumbai then  user then we set a settime out function in the debouncy  method  the settime out we will set 1000 milliseconds then the user type m u m b a i then after the user take a pose after then 1000 Millisecond it will be execute the function and call API by doing this when before we will call the API 7 time now we will fatch only one times and because of this we will reduce our cost And performance issue too.


#  Throttling   :

* On Throttling we set limit to the function 
* After the certain milisecond the function get call.

Throttling is just like and debouncing but they bouncing we will apply on input input box for the fetching an API and Throttling we will use on the functions on button also on scrollbar when we will set set time out function in throttling and after the settimeout over then function get call we set limit to the function means we will set a limit like 1000 millisend on settimeout if the function if the user click simultaneously
 on the button when the function run on after 1000 Millsecond completed And after the 1000 million  
 seconds will be completed then another then this function will be execute again after 1000 it not be execute.

 if user click on button in each 1 milisecond 10 time but we set time to 1000 milisecond then 1 function will be call if after 1000 milisecond completed user click on button then function call.
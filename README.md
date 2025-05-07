# edit-recurring-dates-component-adalo-AG
Custom React Component created to handle creating recurring shifts for technicians in a non-hosted database using the Adalo platform. Created because the client does not use an external backend, which would typically be used for this functionality.


**Adalo tech shift component**

This component allows a user to take data from a single collection(companyShifts), take a set of parameters(selectedDays) and return all dates within the given date range for a single shift, or recurring shifts.

The interaction for component is a button that requests, startDate, endDate, selected days, shift title and dateList. 
It then creates a new object for each occurrence based on specified days given by the user. It then exports this data to the shifts collection. 

**Motivation**
The motivation behind this component is to set an array of dates based on given parameters. This allows a user to save a date range instead of multiple ranges given with additional parameters. 

This component has not been published to the marketplace at the time of this writting so the only way to use it is private.

**Running private**

Prerequisites

NodeJS
Yarn
Linux/macOS/WSL
Clone the repository and run
$ cd my-component
$ yarn                # install dependencies
$ npx adalo login     # login to your adalo account
$ npx adalo dev       # start the development server
$ npx adalo publish   # deploy the component privately to your account


**How is this component used**

Once the component is installed, you can drag and drop the Recurrence button on the app screen and configure it. 

-Full Guide coming

**Version History**
1.0.0 - initial commit




Screenshots of the Adalo implementation: 


![Screen Shot 2025-05-06 at 6 05 03 PM](https://github.com/user-attachments/assets/52102ea3-de9a-4471-97e7-25e70414e056)


![Screen Shot 2025-05-06 at 6 05 13 PM](https://github.com/user-attachments/assets/d3d57886-fea5-4685-a3f7-e46b11eea7b6)


![Screen Shot 2025-05-06 at 6 05 23 PM](https://github.com/user-attachments/assets/f53a15a4-3033-441c-b4c8-c1879612b391)


![Screen Shot 2025-05-06 at 6 05 33 PM](https://github.com/user-attachments/assets/2dafd89f-b53b-4b15-94a8-9cb08bb87a6a)


![Screen Shot 2025-05-06 at 6 05 47 PM](https://github.com/user-attachments/assets/68a0f2d8-d296-4969-9baf-6f8ffd22858c)



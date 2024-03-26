**Adalo tech shift component**

This component allows a user to take data from a single collection(companyShifts), take a set of parameters(selectedDays) and returns all dates within the givendate range for a single shift, or reccurring shifts.

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
Clone the respository and run
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

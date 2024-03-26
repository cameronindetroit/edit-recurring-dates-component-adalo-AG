import React from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'

const EditRecurringDates = (props) => {
	const { color, textColor, text, saveToDatabase,dateList,shiftTitle,techList,repeat, monday,tuesday,wednesday,thursday,friday,saturday,sunday } = props


	//Days the selected tech works
	const selectedDays = [monday,tuesday,wednesday,thursday,friday,saturday,sunday];

	//date keys object model
	let initialDateKeys = {
		start_date_key: '',
		end_date_key: ''
	};

	//Function that iterates through the array and update the start and end times of each shift
	const updateOccurence = () => {
		const techShifts = dateList.map(item => {
            const start = new Date(item._meta.record[initialDateKeys.start_date_key]);
            const end = new Date(item._meta.record[initialDateKeys.end_date_key]);

            const dates = getDatesInRange(start, end,selectedDays);
            return dates.map(date => ({
                start: new Date(date.setHours(start.getHours(), start.getMinutes(), start.getSeconds())),
                end: new Date(date.setHours(end.getHours(), end.getMinutes(), end.getSeconds())),
                shiftTitle: shiftTitle
            }));
        }).flat(); // Flatten the array since map will return an array of arrays

        console.log(techShifts);
		setTechShifts(techShifts)
        return techShifts;
    }
	
	 // Utility function to get dates between two dates
	 const getDatesInRange = (startDate, endDate, selectedDays) => {
        let dateArray = [];
        let currentDate = new Date(startDate);
        endDate = new Date(endDate);

        while (currentDate <= endDate) {
		// Check if the day for the current date should be included
        // Note: getDay() returns 0 for Sunday, through 6 for Saturday.
		const dayIndex = currentDate.getDay();
		// Adjust the index for the selectedDays array (assuming Monday starts the array)
		const adjustedIndex = dayIndex === 0 ? 6 : dayIndex - 1;
        if (selectedDays[adjustedIndex]) {
            dateArray.push(new Date(currentDate));
        }
        currentDate.setDate(currentDate.getDate() + 1);

        }
        return dateArray;
    };


	// Helper function to make sure we always return the right keys from the database for start and end time
	function findDateKeys(record) {
		const dateKeys = {
		  start_date_key: '',
		  end_date_key: ''
		};
		const datePattern = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/;
		let potentialDates = [];
		const excludeKeys = new Set(['created_at', 'updated_at']); // Define keys to exclude
	  
		Object.entries(record).forEach(([key, value]) => {
		  if (typeof value === 'string' && datePattern.test(value) && !excludeKeys.has(key)) {
			potentialDates.push([key, value]);
		  }
		});
	  
		// Sort potential dates by their value to determine start and end date keys
		potentialDates.sort((a, b) => new Date(a[1]) - new Date(b[1]));
	  
		if (potentialDates.length) {
		  dateKeys.start_date_key = potentialDates[0][0]; // The first date after sorting is the start date
		  dateKeys.end_date_key = potentialDates[potentialDates.length - 1][0]; // The last date is the end date
		}

		initialDateKeys = dateKeys
		return dateKeys;
	  }


//Button Click
const handleRecurrenceChange = () => {

	findDateKeys(dateList[0]._meta.record)
	updateOccurence()
  }

  //function to export data to database
const setTechShifts = (techShifts) =>{
	for(let i= 0; i < techShifts.length; i++){
		saveToDatabase(techShifts[i].start, techShifts[i].end, techShifts[i].shiftTitle)
	}
	console.log(techShifts)

}
	return(
		<View style={styles.wrapper}>
		<Button 
		title={text}
		color={color}
		onPress={handleRecurrenceChange}/>
		</View>
	)
}

const styles = StyleSheet.create({
	wrapper: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	}
})

export default EditRecurringDates

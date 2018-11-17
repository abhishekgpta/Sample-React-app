import uuid from 'uuid';

export const addLabel = (
	{	
		addedLabels='',
		startTime=0,
		endTime=0,
	}={}
) =>({
	type:'ADD_LABEL',
	label:{
		id:uuid(),
		addedLabels,
		startTime,
		endTime,
	}
});

export const editLabel = (id,updates)=>({
	type: 'EDIT_LABEL',
	id,updates
});


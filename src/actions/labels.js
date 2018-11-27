import uuid from 'uuid';

export const addLabel = (
	{	
		title='',
		start=0,
		end=0,
	}={}
) =>({
	type:'ADD_LABEL',
	label:{
		id:uuid(),
		title,
		start,
		end,
	}
});

export const editLabel = (id,updates)=>({
	type: 'EDIT_LABEL',
	id,updates
});


const labelsReducerDefaultState = [];
export default (state  = labelsReducerDefaultState, action)=>{
	switch(action.type){
		case 'ADD_LABEL':
			return [...state, action.label];
		case 'EDIT_LABEL':
			return state.map((label)=>{
				if(label.id === action.id){
					return {
						...label,
						...action.updates
					}
				}
				else{
					return label;
				}
			})		
		default:
			return state;
	}
};

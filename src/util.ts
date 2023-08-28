
export const deep =  (arrayArg) => {
	 type T1 = typeof arrayArg ; 
	 const arrResult:T1 = arrayArg.slice(); 
	return arrResult;
}

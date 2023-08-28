

///import {  get_page_by_url,create_page_meatadata, get_list_page_metadata, delete_page_metadata } from '../src/apisync.js';



import {  deep } from '../src/util.js';


const arr1: (string | number)[] = ['Apple',  'Orange','Banana']; 
const response = await deep(arr1)
console.log("Response deep:", response);

//const response2 = await create_page_meatadata("http://hellohello.com","2015-01-01","Hello, world!",-47)
//console.log("create page metada:", response2);


///const response4 = await get_page_by_url('http://hellohello.com')
///console.log("Page metada by URL:", response4);

///const response5= await delete_page_metadata({url_name: 'http://hellohello.com'})
///console.log("Delete:", response5);

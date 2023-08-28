import { API } from '@aws-amplify/api'
import config from '../src/aws-exports.js';
import { getWebMetadata } from '../src/graphql/queries.js'
import { createWebMetadata,deleteWebMetadata } from '../src/graphql/mutations.js'

// after your imports
API.configure(config)

// later down in your code
export const get_page_by_url = async (url_name) => {
	try {
	   const response = await API.graphql({
	      query: getWebMetadata,
	      variables: {
			    "url_name": url_name
			}
	   })
	  return response;
	} catch (err) {
    	// err doesn't include the actual error from GraphQL
    	console.log("error")
    	return err
    }
}

export const create_page_meatadata = async (url_name, date_created, page_title,word_count) => {
	try {
	   const response = await API.graphql({
	      query: createWebMetadata,
	      variables: {
			    "input": {
				    "url_name": url_name,
				    "date_created": date_created,
				    "page_title": page_title,
				    "word_count": word_count
			  	}
			}
	    })  
	  return response;
	} catch (err) {
    	// err doesn't include the actual error from GraphQL
    	console.log("error")
    	return err
    }
}


// later down in your code
export const delete_page_metadata = async (deleteInput) => {
	try {
	   const response = await API.graphql({
	      query: deleteWebMetadata,
	      variables: {
			    "input": deleteInput
			}
	    })  
	  return response;
	} catch (err) {
    	// err doesn't include the actual error from GraphQL
    	console.log("error")
    	return err
    }
}




import React from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, Input, Button} from 'reactstrap';


const SearchField = (props) =>{
    return (
        <Form inline onSubmit = {props.handleSearch}>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Input name="searchterm" className ="searchterm" placeholder="Search Movies" onChange = {props.handleChange}/>{' '}
                <Button><i className="material-icons">search</i></Button>
            </FormGroup>
        </Form>
    )
}

SearchField.propTypes = { 
    handleSearch: PropTypes.func,
    handleChange : PropTypes.func,
    searchBtnDisabled : PropTypes.bool

} 
export default SearchField;
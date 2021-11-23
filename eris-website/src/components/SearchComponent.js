import * as React from 'react';
import ProjectIdSearchComponent from './ProjectIdSearchComponent';
import SearchFilterAccordion from './SearchFilterAccordion';
import SubmitSearchButton from './SubmitSearchButton';


function SearchComponent() {
    const [value, setValue] = React.useState(new Date() );

    return (
            <div className="card-body">
                <ProjectIdSearchComponent />
                <SearchFilterAccordion />
                <SubmitSearchButton />
            </div>
    )
}


export default SearchComponent
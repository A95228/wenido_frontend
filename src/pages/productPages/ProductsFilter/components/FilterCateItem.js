import React from 'react';
import {Checkbox} from "@material-ui/core";

function FilterCateItem({category}) {
    return (
        <div className="flex items-center justify-start pl-1 py-1">
            <Checkbox
                defaultChecked
                color="primary"
                style={{padding:0}}
            />
            <p className="text-xs pl-1">{category.title}</p>
        </div>
    );
}

export default FilterCateItem;
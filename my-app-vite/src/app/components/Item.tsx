import React, {FC} from 'react';

type ItemProps = {
    id: string
    title: string
    completed: boolean
}

const Item: FC<ItemProps> = (props) => {
    const {id, title, completed} = props
    return (
        <div>
            {title}
        </div>
    );
};

export default Item;
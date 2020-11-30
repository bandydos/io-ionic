import { IonItem, IonToggle } from '@ionic/react';
import React from 'react';
import './SendCommand.css';

interface InOutBlockListItemProps {
    block: IOBlock;
}

const InOutBlockListItem: React.FC<InOutBlockListItemProps> = ({ block }) => {
    return (
        <IonItem key={"li" + block.pin}>
            Pin: {block.pin}
            <IonToggle
                checked={block.status}
                disabled={true}
                name={"p" + block.pin}
            ></IonToggle>
            
        </IonItem>
    );
};

export default InOutBlockListItem;
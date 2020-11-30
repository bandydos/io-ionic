import { IonList } from '@ionic/react';
import React from 'react';
import InOutBlockListItem from './InOutBlockListItem';
import './SendCommand.css';

interface InOutBlockListProps {
    blocks: Array<IOBlock>;
}

const InOutBlockList: React.FC<InOutBlockListProps> = ({ blocks }) => {
    return (
        <IonList>
            {blocks.map((b, i) => {
                return (
                    <InOutBlockListItem key={"ioblock" + i} block={b} />
                )
            })}
        </IonList>
    );
};

export default InOutBlockList;
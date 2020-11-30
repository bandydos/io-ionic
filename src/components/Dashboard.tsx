import React, { useState } from 'react';
import { setOriginalNode } from 'typescript';
import { CommandForm } from './CommandForm';
import './Dashboard.css';
import InOutBlockList from './InOutBlockList';

interface DashboardProps { }

const initialIoBlocks: Array<IOBlock> = [
  { pin: 12, status: true },
  { pin: 14, status: false }
];

const Dashboard: React.FC<DashboardProps> = () => {
  const [ioBlocks, setIoBlocks] = useState(initialIoBlocks);

  const toggleBlock = (selectedBlock : IOBlock) => {
    const newBlocks = ioBlocks.map(block => {
      if (block === selectedBlock) {
        return {
          ...block,
          status: !block.status
        }
      }
      return block;
    });
    setIoBlocks(newBlocks);
  }

  const addBlock: AddBlock = (newBlock) => {
    setIoBlocks([...ioBlocks, {pin: parseInt(newBlock), status: true}])
  }

  return (
    <React.Fragment>
      <InOutBlockList blocks={ioBlocks} />
      <CommandForm addBlock={addBlock} name="addpin" label="Add pin"></CommandForm>
    </React.Fragment>
  );
};

export default Dashboard;

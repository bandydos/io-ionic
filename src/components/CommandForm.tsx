import { IonInput, IonToggle } from "@ionic/react";
import React, { FormEvent, useState } from "react";

interface CommandFormProps {
    addBlock: AddBlock;
    name: string;
    label: string;
}

export const CommandForm: React.FC<CommandFormProps> = ({ addBlock, name, label}) => {
    const [newPin, setNewPin] = useState<string>("");
    const [newStatus, setNewStatus] = useState<boolean>(false);

    const handleIonChange = (e: any) => {
        setNewPin(e.detail.value!)
    }

    const handleOnIonToggleChange = (e: any) => {
        setNewStatus(e.detail.checked);
    }

    const handleClick = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault(); // Prevent reloading.
        addBlock(newPin, newStatus); // Add block to list.
    }

    return (
        <form>
            <label htmlFor={name}>{label}</label>
            <IonInput value={newPin} type="text" placeholder="Select pin" onIonChange={handleIonChange} id={name} />
            <IonToggle onIonChange={handleOnIonToggleChange}></IonToggle>
            <button type="submit" onClick={handleClick}>add</button>
        </form>
    );
};
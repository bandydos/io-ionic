import { IonButton, IonInput, IonToggle } from "@ionic/react";
import React, { useState } from "react";

interface CommandFormProps {
    addBlock: AddBlock;
    name: string;
    label: string;
    command: object;
}

export const CommandForm: React.FC<CommandFormProps> = ({ addBlock, name, label }) => {
    const [newPin, setNewPin] = useState<string>("");
    const [newStatus, setNewStatus] = useState<boolean>(false);

    const handleIonChange = (e: any) => {
        setNewPin(e.detail.value!)
    }

    const handleOnIonToggleChange = (e: any) => {
        setNewStatus(e.detail.checked);
    }

    return (
        <form>
            <br />
            <label htmlFor={name}>{label}</label>
            <div>
                <IonInput value={newPin} type="text" placeholder="Select pin" onIonChange={handleIonChange} id={name} />
                <label htmlFor={"toggle"}>Status</label>
                <br />
                <IonToggle id="toggle" onIonChange={handleOnIonToggleChange}></IonToggle>
            </div>
            <br />
            <IonButton onClick={(e) => {
                e.preventDefault();
                addBlock(newPin, newStatus);
            }}>ADD</IonButton>
        </form>
    );
};
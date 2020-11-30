import { IonButton, IonInput, IonLabel, IonToggle } from "@ionic/react";
import { stringify } from "querystring";
import React, { ChangeEvent, FormEvent, HtmlHTMLAttributes, useState } from "react";

interface CommandFormProps {
    addBlock: AddBlock;
    name: string;
    label: string;
}

export const CommandForm: React.FC<CommandFormProps> = ({ addBlock, name, label }) => {
    const [newCommand, setNewCommand] = useState<string>("");

    const handleIonChange = (e: any) => {
        setNewCommand(e.detail.value!)
    }

    const handleClick = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        addBlock(newCommand);
    }

    return (
        <form>
            <label htmlFor={name}>{label}</label>
            <IonInput value={newCommand} type="text" placeholder="Select pin" onIonChange={handleIonChange} id={name} />
            <IonToggle onIonChange={(x) => console.log(x)}></IonToggle>
            <button type="submit" onClick={handleClick}>add</button>
        </form>
    );
};
import { LightningElement } from 'lwc';

export default class AccordianTypesOfPets extends LightningElement {
    activeSections = [];
    activeSectionsMessage = 'Take a look at our selection!';

    handleSectionToggle(event) {
        const openSections = event.detail.openSections;

        if (openSections.length === 0) {
            this.activeSectionsMessage = 'Animals available for sale';
        } else {
            this.activeSectionsMessage = 'Take a look at our selection!';
        }
    }
}
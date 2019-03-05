import {
    IPropertyPaneField,
    PropertyPaneFieldType,
    IPropertyPaneCustomFieldProps
} from '@microsoft/sp-webpart-base';

export class PropertyPaneLogo implements IPropertyPaneField<IPropertyPaneCustomFieldProps> {
    public type: PropertyPaneFieldType = PropertyPaneFieldType.Custom;
    public targetProperty: string;
    public properties: IPropertyPaneCustomFieldProps;

    constructor() {
         this.properties = {
             key: "Logo",
             onRender: this.onRender.bind(this)
        };
    }

    private onRender(elem: HTMLElement): void {
        elem.innerHTML = `
    <div style="margin-top: 30px">
      <div style="float:right">Author: <a href="mailto:zhangj@ochin.org" tabindex="-1">Mikael Svenson</a></div>
      <div style="float:right"><a href="https://ochin365.sharepoint.com/sites/members" target="_blank"><img src="//https://ochin365.sharepoint.com/members/siteassets/graphs color iii.jpg" onerror="this.style.display = \'none\'";"></a></div>
    </div>`;
    }
}
export default PropertyPaneLogo;
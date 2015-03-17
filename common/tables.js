TabularTables = {};
Meteor.isClient && Template.registerHelper('TabularTables', TabularTables);

TabularTables.Lots = new Tabular.Table({
    name: "LotList",
    collection: Lots,
    autoWidth: true,
    dom: 'lrti',
    columns: [
        {
            tmpl: Meteor.isClient && Template.lotNumberCell,
            title: "Lot #",
            width: '4%',
            className: "lotNum"
        },
        {
            tmpl: Meteor.isClient && Template.wineNameCell,
            title: "Name",
            className: "name"
        },
        {data: "wine().vintage", title: "Vintage"},
        {data: "wine().region", title: "Region"}
    ]
});

TabularTables.Wines = new Tabular.Table({
    name: "WineList",
    collection: Wines,
    dom: 'lfrti',
    columns: [
        {data: "name", title: "Name"},
        {data: "vintage", title: "Vintage", width: '10%'},
        {data: "region", title: "Region", width: '10%'},
        {
            tmpl: Meteor.isClient && Template.winePriceCell,
            data: 'price',
            title: "Price",
            width: '10%'
        }
    ]
});
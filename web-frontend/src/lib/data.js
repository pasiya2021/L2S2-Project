
const items = {
    //10 items from each category
    'F001': { name: 'Apples', category: 'Fruits', imageURL: 'https://cdn-icons-png.flaticon.com/128/415/415733.png' },
    'F002': { name: 'Bananas', category: 'Fruits', imageURL: 'https://cdn-icons-png.flaticon.com/128/2909/2909761.png' },
    'F003': { name: 'Oranges', category: 'Fruits', imageURl: 'https://cdn-icons-png.flaticon.com/128/3137/3137032.png' },
    'F004': { name: 'Pineapples', category: 'Fruits', imageURL: 'https://cdn-icons-png.flaticon.com/128/6866/6866524.png' },
    'F005': { name: 'Mangoes', category: 'Fruits', imageURL: 'https://cdn-icons-png.flaticon.com/128/5721/5721948.png' },
    'F006': { name: 'Grapes', category: 'Fruits', imageUrl: 'https://cdn-icons-png.flaticon.com/128/765/765560.png' },
    'F007': { name: 'Strawberries', category: 'Fruits', imageURL: 'https://cdn-icons-png.flaticon.com/128/9092/9092419.png' },
    'F008': { name: 'Blueberries', category: 'Fruits', imageURL: 'https://cdn-icons-png.flaticon.com/128/1791/1791354.png' },
    'F009': { name: 'Raspberries', category: 'Fruits', imageURL: 'https://cdn-icons-png.flaticon.com/128/8556/8556950.png' },
    'F010': { name: 'Peaches', category: 'Fruits', imageURL: 'https://cdn-icons-png.flaticon.com/128/6866/6866552.png' },
    'V001': { name: 'Carrots', category: 'Vegetables', imageURL: 'https://cdn-icons-png.flaticon.com/128/2276/2276656.png' },
    'V002': { name: 'Cabbages', category: 'Vegetables', imageURL: 'https://cdn-icons-png.flaticon.com/128/4056/4056895.png' },
    'V003': { name: 'Tomatoes', category: 'Vegetables', imageURL: 'https://cdn-icons-png.flaticon.com/128/1790/1790387.png' },
    'V004': { name: 'Onions', category: 'Vegetables', imageURL: 'https://cdn-icons-png.flaticon.com/128/2923/2923216.png' },
    'V005': { name: 'Potatoes', category: 'Vegetables', imageURL: 'https://cdn-icons-png.flaticon.com/128/1652/1652127.png' },
    'V006': { name: 'Broccoli', category: 'Vegetables', imageURL: 'https://cdn-icons-png.flaticon.com/128/4977/4977365.png' },
    'V007': { name: 'Cauliflower', category: 'Vegetables', imageURL: 'https://cdn-icons-png.flaticon.com/128/8782/8782380.png' },
    'V008': { name: 'Spinach', category: 'Vegetables', imageURL: 'https://cdn-icons-png.flaticon.com/128/8945/8945305.png' },
    'V009': { name: 'Lettuce', category: 'Vegetables', imageURL: 'https://cdn-icons-png.flaticon.com/128/1998/1998145.png' },
    'V010': { name: 'Bell Peppers', category: 'Vegetables', imageURL: 'https://cdn-icons-png.flaticon.com/128/7627/7627601.png' },
    'G001': { name: 'Rice', category: 'Grains', imageURL: 'https://cdn-icons-png.flaticon.com/128/898/898133.png' },
    'G002': { name: 'Wheat', category: 'Grains', imageURL: 'https://cdn-icons-png.flaticon.com/128/6327/6327254.png' },
    'G003': { name: 'Corn', category: 'Grains', imageURL: 'https://cdn-icons-png.flaticon.com/128/4056/4056903.png' },
    'G004': { name: 'Barley', category: 'Grains', imageURL: 'https://cdn-icons-png.flaticon.com/128/2316/2316448.png' },
    'G005': { name: 'Oats', category: 'Grains', imageURL: 'https://cdn-icons-png.flaticon.com/128/11905/11905347.png' },

}

const categories = ['Fruits', 'Vegetables', 'Grains'];

const warehouses = [
    //with random items and stock in each 9 warehouses 
    {
        id: 'WC01', location: 'Colombo', managerId: 'M001', managerName: 'Senanayake', stock: [
            { itemId: 'F001', availableStock: 100, fullStock: 150 },
            { itemId: 'F002', availableStock: 80, fullStock: 100 },
            { itemId: 'F003', availableStock: 120, fullStock: 150 },
            { itemId: 'V001', availableStock: 50, fullStock: 75 },
            { itemId: 'V002', availableStock: 40, fullStock: 50 },
            { itemId: 'V003', availableStock: 70, fullStock: 90 },
            { itemId: 'V010', availableStock: 120, fullStock: 150 },
            { itemId: 'G001', availableStock: 200, fullStock: 250 },
            { itemId: 'G002', availableStock: 150, fullStock: 200 },
            { itemId: 'G003', availableStock: 120, fullStock: 150 },
        ]
    },
    {
        id: 'WG24', location: 'Galle', managerId: 'M002', managerName: 'Perera', stock: [
            { itemId: 'F004', availableStock: 100, fullStock: 150 },
            { itemId: 'F005', availableStock: 80, fullStock: 100 },
            { itemId: 'F006', availableStock: 120, fullStock: 150 },
            { itemId: 'F010', availableStock: 120, fullStock: 170 },
            { itemId: 'V004', availableStock: 50, fullStock: 75 },
            { itemId: 'V005', availableStock: 40, fullStock: 50 },
            { itemId: 'V006', availableStock: 70, fullStock: 90 },
            { itemId: 'G004', availableStock: 200, fullStock: 250 },
            { itemId: 'G005', availableStock: 150, fullStock: 200 },
        ]
    },
   
    {
        id: 'WKG4', location: 'Kurunegala', managerId: 'M005', managerName: 'Rathnayake', stock: [
            { itemId: 'F001', availableStock: 100, fullStock: 150 },
            { itemId: 'F002', availableStock: 80, fullStock: 100 },
            { itemId: 'F003', availableStock: 120, fullStock: 150 },
            { itemId: 'V001', availableStock: 50, fullStock: 75 },
            { itemId: 'V002', availableStock: 40, fullStock: 50 },
            { itemId: 'V003', availableStock: 70, fullStock: 90 },
            { itemId: 'G001', availableStock: 200, fullStock: 250 },
            { itemId: 'G002', availableStock: 150, fullStock: 200 },
            { itemId: 'G003', availableStock: 120, fullStock: 150 },
        ]
    },
    {
        id: 'WA09', location: 'Anuradhapura', managerId: 'M006', managerName: 'Jayasooriya', stock: [
            { itemId: 'F004', availableStock: 100, fullStock: 150 },
            { itemId: 'F005', availableStock: 80, fullStock: 100 },
            { itemId: 'F006', availableStock: 120, fullStock: 150 },
            { itemId: 'V004', availableStock: 50, fullStock: 75 },
            { itemId: 'V005', availableStock: 40, fullStock: 50 },
            { itemId: 'V006', availableStock: 70, fullStock: 90 },
            { itemId: 'G004', availableStock: 200, fullStock: 250 },
            { itemId: 'G005', availableStock: 150, fullStock: 200 },
        ]
    },
    {
        id: 'WB03', location: 'Badulla', managerId: 'M007', managerName: 'Kumara', stock: [
            { itemId: 'F007', availableStock: 100, fullStock: 150 },
            { itemId: 'F008', availableStock: 80, fullStock: 100 },
            { itemId: 'F009', availableStock: 120, fullStock: 150 },
            { itemId: 'V007', availableStock: 50, fullStock: 75 },
            { itemId: 'V008', availableStock: 40, fullStock: 50 },
            { itemId: 'V009', availableStock: 70, fullStock: 90 },
            { itemId: 'G002', availableStock: 200, fullStock: 250 },
            { itemId: 'G003', availableStock: 150, fullStock: 200 },
            { itemId: 'G004', availableStock: 120, fullStock: 150 },
        ]
    },
    {
        id: 'WR02', location: 'Ratnapura', managerId: 'M008', managerName: 'Kumari', stock: [
            { itemId: 'F003', availableStock: 100, fullStock: 150 },
            { itemId: 'F005', availableStock: 80, fullStock: 100 },
            { itemId: 'V008', availableStock: 120, fullStock: 150 },
        ]
    },
    {
        id: 'WK02', location: 'Kegalle', managerId: 'M009', managerName: 'Perera', stock: [
            { itemId: 'F001', availableStock: 100, fullStock: 150 },
            { itemId: 'F002', availableStock: 80, fullStock: 100 },
            { itemId: 'F003', availableStock: 120, fullStock: 150 },
            { itemId: 'V001', availableStock: 50, fullStock: 75 },
            { itemId: 'V002', availableStock: 40, fullStock: 50 },
            { itemId: 'V003', availableStock: 70, fullStock: 90 },
            { itemId: 'G001', availableStock: 200, fullStock: 250 },
            { itemId: 'G002', availableStock: 150, fullStock: 200 },
            { itemId: 'G003', availableStock: 120, fullStock: 150 },
        ]
    },
    {
        id: 'WKL2', location: 'Kalutara', managerId: 'M010', managerName: 'Fernando', stock: [
            { itemId: 'F004', availableStock: 100, fullStock: 150 },
            { itemId: 'F005', availableStock: 80, fullStock: 100 },
            { itemId: 'F006', availableStock: 120, fullStock: 150 },
            { itemId: 'V004', availableStock: 50, fullStock: 75 },
            { itemId: 'V005', availableStock: 40, fullStock: 50 },
            { itemId: 'V006', availableStock: 70, fullStock: 90 },
            { itemId: 'G004', availableStock: 200, fullStock: 250 },
            { itemId: 'G005', availableStock: 150, fullStock: 200 },
        ]
    },
    {
        id: 'WP07', location: 'Puttalam', managerId: 'M011', managerName: 'Silva', stock: [
            { itemId: 'F007', availableStock: 100, fullStock: 150 },
            { itemId: 'F008', availableStock: 80, fullStock: 100 },
            { itemId: 'F009', availableStock: 120, fullStock: 150 },
            { itemId: 'V007', availableStock: 50, fullStock: 75 },
            { itemId: 'V008', availableStock: 40, fullStock: 50 },
            { itemId: 'V009', availableStock: 70, fullStock: 90 },
            { itemId: 'G001', availableStock: 200, fullStock: 250 },
            { itemId: 'G002', availableStock: 150, fullStock: 200 },
        ]
    },
]

function getItemName(itemId) {
    return items[itemId].name;
}

function getItemUrl(itemId) {
    return items[itemId].imageURL;
}

function getStocksByWarehouseID(warehouseId) {
    let warehouse = warehouses.find(warehouse => warehouse.id === warehouseId);
    return warehouse ? warehouse.stock : [];
}

function getTotalStockByItems() {
    // should output an array with the total stock of each item as {itemname, itemid, availablestock, totalstock }
    let totalStockByItems = [];
    Object.keys(items).forEach(itemId => {
        let availableStock = 0;
        let totalStock = 0;
        warehouses.forEach(warehouse => {
            warehouse.stock.forEach(item => {
                if (item.itemId === itemId) {
                    availableStock += item.availableStock;
                    totalStock += item.fullStock;
                }
            });
        });
        totalStockByItems.push({
            itemName: items[itemId].name,
            itemId: itemId,
            availableStock: availableStock,
            totalStock: totalStock
        });
    });

    // split the array into 3 arrays by category
    let fruits = totalStockByItems.filter(item => items[item.itemId].category === 'Fruits');
    let vegetables = totalStockByItems.filter(item => items[item.itemId].category === 'Vegetables');
    let grains = totalStockByItems.filter(item => items[item.itemId].category === 'Grains');

    return {
        'Fruits': fruits,
        'Vegetables': vegetables,
        'Grains': grains
    };
}

export { items, categories, warehouses, getItemName, getItemUrl, getStocksByWarehouseID, getTotalStockByItems };

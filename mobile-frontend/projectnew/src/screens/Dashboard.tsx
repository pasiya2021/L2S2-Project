import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';

interface Props {
    navigation: any;  // Keeping it simple for navigation type
}

interface Item {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    category: number;
}

const Dashboard: React.FC<Props> = ({ navigation }) => {
    const [searchText, setSearchText] = useState<string>('');
    const [selectedSection, setSelectedSection] = useState<number>(1); // Categories by ID
    const [products, setProducts] = useState<Item[]>([]);

    useEffect(() => {
        axios.get('http://192.168.95.78:8080/api/product/allproducts')
            .then(response => setProducts(response.data))
            .catch(error => console.error("Failed to fetch products:", error));
    }, []);

    const handleClearSearch = () => {
        setSearchText('');
    };

    const filteredItems = products.filter(item =>
        item.name.toLowerCase().includes(searchText.toLowerCase()) && item.category === selectedSection
    );

    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <Image source={{ uri: item.imageUrl }} style={styles.itemImage} />
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemPrice}>1 KG Rs {item.price.toFixed(2)}</Text>
            <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('F', { product: item })}>
                <Icon name="plus" size={15} color="white" />
            </TouchableOpacity>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.headerText}>Welcome</Text>
            <Text style={styles.subHeaderText}>Choose the</Text>
            <Text style={styles.subHeaderText}>Item you love</Text>
            <View style={styles.searchBar}>
                <Icon name="search" size={20} color="#888" />
                <TextInput
                    placeholder="Search Item..."
                    style={styles.searchInput}
                    value={searchText}
                    onChangeText={setSearchText}
                />
                {searchText.length > 0 && (
                    <TouchableOpacity onPress={handleClearSearch}>
                        <Icon name="times" size={20} color="#888" />
                    </TouchableOpacity>
                )}
            </View>
            <View style={styles.segmentedControl}>
                <TouchableOpacity onPress={() => setSelectedSection(1)} style={selectedSection === 1 ? styles.segmentSelected : styles.segment}>
                    <Text style={selectedSection === 1 ? styles.segmentTextSelected : styles.segmentText}>Fruits</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setSelectedSection(2)} style={selectedSection === 2 ? styles.segmentSelected : styles.segment}>
                    <Text style={selectedSection === 2 ? styles.segmentTextSelected : styles.segmentText}>Vegetables</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setSelectedSection(3)} style={selectedSection === 3 ? styles.segmentSelected : styles.segment}>
                    <Text style={selectedSection === 3 ? styles.segmentTextSelected : styles.segmentText}>Grains</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={filteredItems}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                numColumns={2}
                contentContainerStyle={styles.itemsList}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        paddingTop: 25
    },
    headerText: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'green',
        textAlign: 'center',
    },
    subHeaderText: {
        fontSize: 22,
        color: 'black',
        textAlign: 'center',
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 10,
        margin: 20,
        elevation: 3,
    },
    searchInput: {
        flex: 1,
        fontSize: 16,
        marginLeft: 10,
    },
    segmentedControl: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10,
    },
    segment: {
        paddingVertical: 6,
        paddingHorizontal: 12,
        backgroundColor: 'white',
        borderRadius: 20,
    },
    segmentSelected: {
        paddingVertical: 6,
        paddingHorizontal: 12,
        backgroundColor: 'green',
        borderRadius: 20,
    },
    segmentText: {
        fontSize: 16,
    },
    segmentTextSelected: {
        fontSize: 16,
        color: 'white',
    },
    itemsList: {
        alignItems: 'center',
        padding: 5
    },
    itemContainer: {
        backgroundColor: 'white',
        borderRadius: 10,
        margin: 5,
        padding: 10,
        alignItems: 'center',
        width: 160,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 3,
    },
    itemImage: {
        width: 140,
        height: 140,
        borderRadius: 10,
    },
    itemName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 5,
    },
    itemPrice: {
        fontSize: 14,
        color: 'gray',
        marginBottom: 5,
    },
    addButton: {
        position: 'absolute',
        right: 5,
        bottom: 10,
        backgroundColor: 'green',
        width: 30,
        height: 30,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default Dashboard;
